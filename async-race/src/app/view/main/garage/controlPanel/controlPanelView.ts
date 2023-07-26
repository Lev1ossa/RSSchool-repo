import { CarMoveProps, GameData, WinnerProps } from '../../../../types/types';
import { createRandomCars } from '../../../../utils/createRandomCars';
import { ElementCreator } from '../../../../utils/elementCreator';
import {
  InputElementCreatorCreateProps,
  InputElementCreatorUpdateProps,
  buttonGenerateCarsProps,
  buttonRaceProps,
  buttonResetProps,
  controlPanelProps,
} from '../../../../utils/elementsProps';
import { InputElementCreator } from '../../../../utils/inputElementCreator';
import {
  CreateWinner,
  createCar, getCar, getWinner, updateCar, updateWinner,
} from '../../../../utils/requests';
import { AppView } from '../../../appView';
import './controlPanel.css';

export class ControlPanelView extends AppView {
  gameListener: EventTarget;
  gameData: GameData;
  buttonRace: ElementCreator;
  buttonReset: ElementCreator;
  buttonGenerateCars: ElementCreator;
  inputCarCreate: InputElementCreator;
  inputCarUpdate: InputElementCreator;
  constructor(gameData: GameData, gameListener: EventTarget) {
    super(controlPanelProps);
    this.buttonRace = new ElementCreator(buttonRaceProps);
    this.buttonReset = new ElementCreator(buttonResetProps);
    this.inputCarCreate = new InputElementCreator(InputElementCreatorCreateProps);
    this.inputCarUpdate = new InputElementCreator(InputElementCreatorUpdateProps);
    this.buttonGenerateCars = new ElementCreator(buttonGenerateCarsProps);
    this.gameData = gameData;
    this.gameListener = gameListener;
    this.constructView();
  }

  constructView(): void {
    this.createInputCarCreate();
    this.CreateInputCarUpdate();
    this.CreateButtonRace();
    this.CreateButtonReset();
    this.CreateButtonGenerateCars();
  }

  createInputCarCreate(): void {
    this.inputCarCreate.button.addListeners({
      click: () => {
        const nameInput = this.inputCarCreate.input.getElement() as HTMLInputElement;
        const colorInput = this.inputCarCreate.inputColor.getElement() as HTMLInputElement;
        const nameInputValue = nameInput.value;
        if (nameInputValue) {
          createCar(nameInputValue, colorInput.value).then(
            () => {
              this.gameListener.dispatchEvent(new CustomEvent('carsUpdated'));
              nameInput.value = '';
              colorInput.value = '#000000';
            },
            () => {},
          );
        }
      },
    });
    this.elementCreator.addElement(this.inputCarCreate.getElement());
  }

  CreateInputCarUpdate(): void {
    this.inputCarUpdate.button.addListeners({
      click: () => {
        const nameInput = this.inputCarUpdate.input.getElement() as HTMLInputElement;
        const colorInput = this.inputCarUpdate.inputColor.getElement() as HTMLInputElement;
        const nameInputValue = nameInput.value;
        const carID = this.gameData.selectedCarID;
        if (nameInputValue && carID) {
          updateCar(carID, nameInputValue, colorInput.value).then(
            () => {
              this.gameListener.dispatchEvent(new CustomEvent('carsUpdated'));
              this.gameData.selectedCarID = 0;
              this.gameData.selectedCarName = '';
              nameInput.value = '';
              colorInput.value = '#000000';
            },
            () => {},
          );
        }
      },
    });
    this.gameListener.addEventListener('carSelected', () => {
      const nameInput = this.inputCarUpdate.input.getElement() as HTMLInputElement;
      const colorInput = this.inputCarUpdate.inputColor.getElement() as HTMLInputElement;
      nameInput.value = this.gameData.selectedCarName;
      colorInput.value = this.gameData.selectedCarColor;
    });
    this.elementCreator.addElement(this.inputCarUpdate.getElement());
  }

  CreateButtonGenerateCars(): void {
    this.buttonGenerateCars.addListeners({
      click: () => {
        createRandomCars().then(
          () => {
            this.gameListener.dispatchEvent(new CustomEvent('carsUpdated'));
          },
          () => {},
        );
      },
    });
    this.elementCreator.addElement(this.buttonGenerateCars.getElement());
  }

  CreateButtonRace(): void {
    this.setRaceDisableHandlers();
    this.buttonRace.addListeners({
      click: () => this.startRaceHandler(),
    });
    this.elementCreator.addElement(this.buttonRace.getElement());
  }

  startRaceHandler(): void {
    this.gameListener.dispatchEvent(new CustomEvent('pageWinnersBlock'));
    this.gameData.raceActive = true;
    this.gameData.carsEngineBroken.splice(0, this.gameData.carsEngineBroken.length);
    const buttonResetElement = this.buttonReset.getElement() as HTMLButtonElement;
    this.raceStartDisableButtons();
    const carStartEnginePromises = this.gameData.carsOnPage.map(
      async (car) => {
        this.gameData.carsInRace.push(car.carData.id);
        return car.startCarEngine();
      },
    );
    Promise.all(carStartEnginePromises).then(
      (carMoveProps: CarMoveProps[]) => {
        this.gameListener.dispatchEvent(new CustomEvent('pageWinnersUnblock'));
        const carStartDrivePromises = this.gameData.carsOnPage.map(
          async (car) => {
            const carData = carMoveProps.find(
              (item) => item.carId === car.carData.id,
            ) as CarMoveProps;
            const carRaceTime = carData.engineProps.distance / carData.engineProps.velocity;
            car.startCarAnimation(carRaceTime);
            return car.setCarEngineDriveMode(carRaceTime).then(
              (result) => ({ carId: car.carData.id, carTime: result }),
              (err) => { throw new Error(err); },
            );
          },
        );
        Promise.any(carStartDrivePromises).then(
          (carRaceTime: WinnerProps) => {
            buttonResetElement.disabled = false;
            this.winHandler(carRaceTime);
          },
          () => {},
        );
      },
      () => {},
    );
  }

  raceStartDisableButtons(): void {
    const buttonRaceElement = this.buttonRace.getElement() as HTMLButtonElement;
    const buttonResetElement = this.buttonReset.getElement() as HTMLButtonElement;
    const buttonGenerateCars = this.buttonGenerateCars.getElement() as HTMLButtonElement;
    const buttonCreateElement = this.inputCarCreate.button.getElement() as HTMLButtonElement;
    const buttonUpdateElement = this.inputCarUpdate.button.getElement() as HTMLButtonElement;
    buttonRaceElement.disabled = true;
    buttonResetElement.disabled = true;
    buttonCreateElement.disabled = true;
    buttonUpdateElement.disabled = true;
    buttonGenerateCars.disabled = true;
    this.gameData.carsOnPage.forEach((car) => {
      const buttonStartElement = car.buttonStart.getElement() as HTMLButtonElement;
      buttonStartElement.disabled = true;
      const buttonDeleteElement = car.buttonDelete.getElement() as HTMLButtonElement;
      buttonStartElement.disabled = true;
      buttonDeleteElement.disabled = true;
    });
    this.gameListener.dispatchEvent(new CustomEvent('garagePaginationBlock'));
  }

  setRaceDisableHandlers(): void {
    const buttonRaceElement = this.buttonRace.getElement() as HTMLButtonElement;
    this.gameListener.addEventListener(('blockRace'), () => {
      buttonRaceElement.disabled = true;
    });
    this.gameListener.addEventListener(('unblockRace'), () => {
      buttonRaceElement.disabled = false;
    });
  }

  setResetDisableHandlers(): void {
    const buttonResetElement = this.buttonReset.getElement() as HTMLButtonElement;
    this.gameListener.addEventListener(('blockReset'), () => {
      buttonResetElement.disabled = true;
    });
    this.gameListener.addEventListener(('unblockReset'), () => {
      buttonResetElement.disabled = false;
    });
  }

  winHandler(carRaceTime: WinnerProps): void {
    getCar(carRaceTime.carId).then((carData) => {
      if (this.gameData.carsInRace.includes(carData.id)) {
        const winTime = +(carRaceTime.carTime / 1000).toFixed(2);
        const modalText = `${carData.name} win race in ${winTime}`;
        this.gameListener.dispatchEvent(new CustomEvent('modal-show', { detail: { modalText } }));
        getWinner(carData.id).then(
          (winner) => {
            if (winner.id) {
              if (winTime < winner.time) {
                updateWinner(winner.id, +winner.wins + 1, winTime).then(
                  () => {
                    this.gameListener.dispatchEvent(new CustomEvent('winnersUpdated'));
                  },
                );
              } else {
                updateWinner(winner.id, +winner.wins + 1, winner.time).then(
                  () => {
                    this.gameListener.dispatchEvent(new CustomEvent('winnersUpdated'));
                  },
                );
              }
            } else {
              CreateWinner(carData.id, 1, winTime).then(
                () => {
                  this.gameListener.dispatchEvent(new CustomEvent('winnersUpdated'));
                },
              );
            }
          },
          () => {
          },
        );
      }
    }, () => {});
  }

  CreateButtonReset(): void {
    this.setResetDisableHandlers();
    this.buttonReset.addListeners({
      click: () => {
        this.resetRaceHandler();
      },
    });
    this.elementCreator.addElement(this.buttonReset.getElement());
  }

  resetRaceHandler(): void {
    this.gameData.raceActive = false;
    this.gameData.carsActive.splice(0, this.gameData.carsActive.length);
    this.gameData.carsInRace.splice(0, this.gameData.carsActive.length);
    const buttonCreateElement = this.inputCarCreate.button.getElement() as HTMLButtonElement;
    const buttonUpdateElement = this.inputCarUpdate.button.getElement() as HTMLButtonElement;
    const buttonGenerateCars = this.buttonGenerateCars.getElement() as HTMLButtonElement;
    const buttonRaceElement = this.buttonRace.getElement() as HTMLButtonElement;
    const buttonResetElement = this.buttonReset.getElement() as HTMLButtonElement;
    buttonRaceElement.disabled = true;
    buttonResetElement.disabled = true;
    this.gameListener.dispatchEvent(new CustomEvent('garagePaginationUnblock'));
    const carStopEnginePromises = this.gameData.carsOnPage.map(
      async (car) => car.stopCarEngine(),
    );
    Promise.all(carStopEnginePromises).then(
      (cars) => {
        buttonRaceElement.disabled = false;
        buttonCreateElement.disabled = false;
        buttonUpdateElement.disabled = false;
        buttonGenerateCars.disabled = false;
        cars.forEach(async (car) => {
          const buttonDeleteElement = car.buttonDelete.getElement() as HTMLButtonElement;
          buttonDeleteElement.disabled = false;
          car.stopCarAnimation();
        });
        this.gameListener.dispatchEvent(new CustomEvent('carsUpdated'));
        this.gameListener.dispatchEvent(new CustomEvent('modal-hide'));
      },
      () => {},
    );
  }
}
