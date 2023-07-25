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
  createCar, getCar, getWinner, updateCar, updateWinner,
} from '../../../../utils/requests';
import { AppView } from '../../../appView';
import './controlPanel.css';

export class ControlPanelView extends AppView {
  gameListener: EventTarget;
  gameData: GameData;
  constructor(gameData: GameData, gameListener: EventTarget) {
    super(controlPanelProps);
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
    const inputCarCreate = new InputElementCreator(InputElementCreatorCreateProps);
    inputCarCreate.button.addListeners({
      click: () => {
        const nameInput = inputCarCreate.input.getElement() as HTMLInputElement;
        const colorInput = inputCarCreate.inputColor.getElement() as HTMLInputElement;
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
    this.elementCreator.addElement(inputCarCreate.getElement());
  }

  CreateInputCarUpdate(): void {
    const inputCarUpdate = new InputElementCreator(InputElementCreatorUpdateProps);
    inputCarUpdate.button.addListeners({
      click: () => {
        const nameInput = inputCarUpdate.input.getElement() as HTMLInputElement;
        const colorInput = inputCarUpdate.inputColor.getElement() as HTMLInputElement;
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
      const nameInput = inputCarUpdate.input.getElement() as HTMLInputElement;
      const colorInput = inputCarUpdate.inputColor.getElement() as HTMLInputElement;
      nameInput.value = this.gameData.selectedCarName;
      colorInput.value = this.gameData.selectedCarColor;
    });
    this.elementCreator.addElement(inputCarUpdate.getElement());
  }

  CreateButtonGenerateCars(): void {
    const buttonGenerateCars = new ElementCreator(buttonGenerateCarsProps);
    buttonGenerateCars.addListeners({
      click: () => {
        createRandomCars().then(
          () => {
            this.gameListener.dispatchEvent(new CustomEvent('carsUpdated'));
          },
          () => {},
        );
      },
    });
    this.elementCreator.addElement(buttonGenerateCars.getElement());
  }

  CreateButtonRace(): void {
    const buttonRace = new ElementCreator(buttonRaceProps);
    buttonRace.addListeners({
      click: () => {
        const carStartEnginePromises = this.gameData.carsOnPage.map(
          async (car) => car.startCarEngine(),
        );
        Promise.all(carStartEnginePromises).then(
          (carMoveProps: CarMoveProps[]) => {
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
                this.winHandler(carRaceTime);
              },
              () => {},
            );
          },
          () => {},
        );
      },
    });
    this.elementCreator.addElement(buttonRace.getElement());
  }

  winHandler(carRaceTime: WinnerProps): void {
    getCar(carRaceTime.carId).then((carData) => {
      const winTime = +(carRaceTime.carTime / 1000).toFixed(2);
      const modalText = `${carData.name} win race in ${winTime}`;
      this.gameListener.dispatchEvent(new CustomEvent('modal-show', { detail: { modalText } }));
      getWinner(carData.id).then(
        (winner) => {
          if (winTime > winner.carTime) {
            updateWinner(winner.carId, winner.carWins + 1, carRaceTime.carTime);
          }
        },
        () => {
          updateWinner(carData.id, 1, winTime);
        },
      );
    }, () => {});
  }

  CreateButtonReset(): void {
    const buttonReset = new ElementCreator(buttonResetProps);
    buttonReset.addListeners({
      click: () => {
        const carStopEnginePromises = this.gameData.carsOnPage.map(
          async (car) => car.stopCarEngine(),
        );
        Promise.all(carStopEnginePromises).then(
          (cars) => {
            cars.forEach(async (car) => car.stopCarAnimation());
            this.gameListener.dispatchEvent(new CustomEvent('modal-hide'));
          },
          () => {},
        );
      },
    });
    this.elementCreator.addElement(buttonReset.getElement());
  }
}
