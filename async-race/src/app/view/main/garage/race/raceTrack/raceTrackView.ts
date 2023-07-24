import { carEngineStatuses } from '../../../../../data/data';
import { CarData, CarMoveProps, GameData } from '../../../../../types/types';
import { ElementCreator } from '../../../../../utils/elementCreator';
import {
  raceRoadCarProps,
  raceRoadFlagProps,
  raceRoadStartButtonProps,
  raceRoadStopButtonProps,
  raceTrackButtonDeleteProps,
  raceTrackButtonSelectProps,
  raceTrackCarNameProps,
  raceTrackProps,
  raceTrackRoadProps,
} from '../../../../../utils/elementsProps';
import { getCarSvg } from '../../../../../utils/getCarSvg';
import { deleteCar, patchCarEngine } from '../../../../../utils/requests';
import { AppView } from '../../../../appView';
import './raceTrack.css';

export class RaceTrackView extends AppView {
  buttonSelect: ElementCreator;
  buttonDelete: ElementCreator;
  carNameTitle: ElementCreator;
  road: ElementCreator;
  buttonStart: ElementCreator;
  buttonStop: ElementCreator;
  raceCar: ElementCreator;
  raceFlag: ElementCreator;
  carData: CarData;
  gameListener: EventTarget;
  gameData: GameData;

  constructor(carData: CarData, gameListener: EventTarget, gameData: GameData) {
    super(raceTrackProps);
    this.carData = carData;
    this.buttonSelect = new ElementCreator(raceTrackButtonSelectProps);
    this.buttonDelete = new ElementCreator(raceTrackButtonDeleteProps);
    this.carNameTitle = new ElementCreator(raceTrackCarNameProps);
    this.road = new ElementCreator(raceTrackRoadProps);
    this.buttonStart = new ElementCreator(raceRoadStartButtonProps);
    this.buttonStop = new ElementCreator(raceRoadStopButtonProps);
    this.raceCar = new ElementCreator(raceRoadCarProps);
    this.raceFlag = new ElementCreator(raceRoadFlagProps);
    this.gameListener = gameListener;
    this.gameData = gameData;
    this.constructView();
  }

  constructView(): void {
    this.raceCar.getElement().innerHTML = getCarSvg(this.carData.color);
    this.raceCar.element = this.raceCar.getElement().firstElementChild as HTMLElement;
    this.carNameTitle.setTextContent(this.carData.name);
    // this.elementCreator.addElement(this.buttonSelect.getElement());
    this.createButtonSelect();
    // this.elementCreator.addElement(this.buttonDelete.getElement());
    this.createButtonDelete();
    this.elementCreator.addElement(this.carNameTitle.getElement());
    this.createButtonStart();
    // this.road.addElement(this.buttonStart.getElement())
    this.createButtonStop();
    // this.road.addElement(this.buttonStop.getElement());
    this.road.addElement(this.raceCar.getElement());
    this.road.addElement(this.raceFlag.getElement());
    this.elementCreator.addElement(this.road.getElement());
  }

  createButtonSelect(): void {
    this.buttonSelect.addListeners({
      click: () => {
        const { id, name, color } = this.carData;
        this.gameData.selectedCarID = id;
        this.gameData.selectedCarName = name;
        this.gameData.selectedCarColor = color;
        this.gameListener.dispatchEvent(new CustomEvent('carSelected'));
      },
    });
    this.elementCreator.addElement(this.buttonSelect.getElement());
  }

  createButtonDelete(): void {
    this.buttonDelete.addListeners({
      click: () => {
        deleteCar(this.carData.id).then(
          () => {
            this.gameListener.dispatchEvent(new CustomEvent('carsUpdated'));
          },
          () => {},
        );
      },
    });
    this.elementCreator.addElement(this.buttonDelete.getElement());
  }

  createButtonStart(): void {
    this.buttonStart.addListeners({
      click: () => {
        this.startCarEngine();
      },
    });
    this.road.addElement(this.buttonStart.getElement());
  }

  createButtonStop(): void {
    this.buttonStop.addListeners({
      click: () => {
        this.stopCarEngine();
      },
    });
    this.road.addElement(this.buttonStop.getElement());
  }

  startCarEngine(): void {
    patchCarEngine(this.carData.id, carEngineStatuses.start).then(
      (carMoveProps: CarMoveProps) => {
        const carRaceTime = (
          carMoveProps.engineProps.distance / carMoveProps.engineProps.velocity
        );
        this.startCarAnimation(carRaceTime);
        this.setCarEngineDriveMode().then(
          (result) => dispatchEvent(new CustomEvent('carFinish', { detail: { carId: this.carData.id, carTime: result } })),
          () => {},
        );
      },
      () => {},
    );
  }

  stopCarEngine(): void {
    patchCarEngine(this.carData.id, carEngineStatuses.stop).then(
      () => {
        this.gameListener.dispatchEvent(
          new CustomEvent('carStop', { detail: { carId: this.carData.id } }),
        );
        this.stopCarAnimation();
      },
      () => {},
    );
  }

  async setCarEngineDriveMode(): Promise<number | void> {
    return patchCarEngine(this.carData.id, carEngineStatuses.drive).then(
      (carMoveProps: CarMoveProps) => {
        if (carMoveProps.status === 500) {
          this.gameListener.dispatchEvent(new CustomEvent('carStop', { detail: { carId: this.carData.id } }));
        }
        const carRaceTime = (
          carMoveProps.engineProps.distance / carMoveProps.engineProps.velocity
        );
        return (carRaceTime);
      },
      (err) => {
        if (err.message === '500') {
          this.gameListener.dispatchEvent(new CustomEvent('carStop', { detail: { carId: this.carData.id } }));
        }
      },
    );
  }

  startCarAnimation(carRaceTime: number): void {
    const animationDistance = this.road.getElement().offsetWidth - this.gameData.carLength;
    const animationStepInterval = (carRaceTime / animationDistance);
    const carElement = this.raceCar.getElement();
    carElement.style.left = '0px';
    let carPosition = 0;
    const carAnimation = setInterval(() => {
      if (carPosition < animationDistance) {
        carPosition += 1;
        carElement.style.left = `${carPosition}px`;
      }
    }, animationStepInterval);
    this.gameListener.addEventListener('carStop', (event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail.carId === this.carData.id) {
        clearInterval(carAnimation);
      }
    });
    this.gameListener.addEventListener('allCarsStop', () => {
      clearInterval(carAnimation);
      carElement.style.left = '0px';
    }, { once: true });
  }

  stopCarAnimation(): void {
    this.gameListener.dispatchEvent(
      new CustomEvent('gameDataUpdated', { detail: { carId: this.carData.id } }),
    );
  }
}
