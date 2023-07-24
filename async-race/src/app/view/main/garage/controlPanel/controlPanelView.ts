import { GameData } from '../../../../types/types';
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
import { createCar, updateCar } from '../../../../utils/requests';
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
    const buttonRace = new ElementCreator(buttonRaceProps);
    this.elementCreator.addElement(buttonRace.getElement());
    const buttonReset = new ElementCreator(buttonResetProps);
    this.elementCreator.addElement(buttonReset.getElement());
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
}
