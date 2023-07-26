import { carEngineStatuses } from '../../../../../data/data';
import {
  CarData, CarMoveProps, GameData, WinnerProps,
} from '../../../../../types/types';
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
import { deleteCar, deleteWinner, patchCarEngine } from '../../../../../utils/requests';
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
    this.stopCarAnimation();
    this.raceCar.getElement().innerHTML = getCarSvg(this.carData.color);
    this.raceCar.element = this.raceCar.getElement().firstElementChild as HTMLElement;
    this.raceCar.setCssClasses(['race-car-svg']);
    this.carNameTitle.setTextContent(this.carData.name);
    this.createButtonSelect();
    this.createButtonDelete();
    this.elementCreator.addElement(this.carNameTitle.getElement());
    this.createButtonStart();
    this.createButtonStop();
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
            deleteWinner(this.carData.id).then(
              () => { this.gameListener.dispatchEvent(new CustomEvent('carsUpdated')); },
              () => {},
            );
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
        this.gameData.carsActive.push(this.carData.id);
        this.gameListener.dispatchEvent(new CustomEvent('blockRace'));
        this.gameListener.dispatchEvent(new CustomEvent('blockCarsPages'));
        this.carMove().then(
          () => {},
          () => {},
        );
      },
    });
    this.road.addElement(this.buttonStart.getElement());
  }

  createButtonStop(): void {
    const buttonStopElement = this.buttonStop.getElement() as HTMLButtonElement;
    buttonStopElement.disabled = true;
    this.buttonStop.addListeners({
      click: () => {
        this.CarStop().then(
          () => {},
          () => {},
        );
      },
    });
    this.road.addElement(this.buttonStop.getElement());
  }

  async carMove(): Promise<WinnerProps> {
    const buttonStartElement = this.buttonStart.getElement() as HTMLButtonElement;
    buttonStartElement.disabled = true;
    return this.startCarEngine().then(
      (carMoveProps) => {
        const carRaceTime = carMoveProps.engineProps.distance / carMoveProps.engineProps.velocity;
        this.startCarAnimation(carRaceTime);
        return this.setCarEngineDriveMode(carRaceTime).then(
          (result) => ({ carId: this.carData.id, carTime: result }),
          (err) => { throw new Error(err); },
        );
      },
      (err) => { throw new Error(err); },
    );
  }

  async startCarEngine(): Promise<CarMoveProps> {
    return patchCarEngine(this.carData.id, carEngineStatuses.start).then(
      (carMoveProps: CarMoveProps) => {
        const buttonStopElement = this.buttonStop.getElement() as HTMLButtonElement;
        buttonStopElement.disabled = false;
        return carMoveProps;
      },
      () => {
        throw new Error();
      },
    );
  }

  async CarStop(): Promise<void> {
    const buttonStopElement = this.buttonStop.getElement() as HTMLButtonElement;
    buttonStopElement.disabled = true;
    return this.stopCarEngine().then(
      () => {
        this.gameData.carsActive.splice(this.gameData.carsActive.findIndex(
          (item) => item === this.carData.id,
        ), 1);
        if (this.gameData.carsActive.length === 0 && !(this.gameData.raceActive)) {
          this.gameListener.dispatchEvent(new CustomEvent('unblockRace'));
          this.gameListener.dispatchEvent(new CustomEvent('unblockCarsPages'));
        }
        this.stopCarAnimation();
      },
      () => {},
    );
  }

  async stopCarEngine(): Promise<RaceTrackView> {
    return patchCarEngine(this.carData.id, carEngineStatuses.stop).then(
      () => {
        const buttonStartElement = this.buttonStart.getElement() as HTMLButtonElement;
        buttonStartElement.disabled = false;
        return this;
      },
      (err) => { throw new Error(err); },
    );
  }

  async setCarEngineDriveMode(carRaceTime: number): Promise<number> {
    return patchCarEngine(this.carData.id, carEngineStatuses.drive).then(
      () => (carRaceTime),
      (err) => {
        if (err.message === '500') {
          this.gameData.carsEngineBroken.push(this.carData.id);
          if (this.gameData.carsEngineBroken.length === this.gameData.carsOnPage.length) {
            this.gameListener.dispatchEvent(new CustomEvent('unblockReset'));
          }
          this.gameListener.dispatchEvent(new CustomEvent('carStop', { detail: { carId: this.carData.id } }));
        }
        throw new Error(err);
      },
    );
  }

  startCarAnimation(carRaceTime: number): void {
    const animationDistance = -(this.road.getElement().offsetWidth - this.gameData.carLength);
    const carElement = this.raceCar.getElement();
    const animation = carElement.animate(
      [
        {
          transform: `rotate(0deg) matrix(-1, 0, 0, 1, 0, 0) translateX(${animationDistance}px)`,
        },
      ],
      {
        duration: carRaceTime,
        fill: 'forwards',
      },
    );

    this.gameListener.addEventListener('carStop', (event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail.carId === this.carData.id) {
        animation.pause();
      }
    });
    this.gameListener.addEventListener('carStopAnimation', (event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail.carId === this.carData.id) {
        carElement.style.left = '0px';
        animation.cancel();
      }
    });
    this.gameListener.addEventListener('allCarsStop', () => {
      carElement.style.left = '0px';
      this.stopCarEngine();
      animation.cancel();
    });
  }

  stopCarAnimation(): void {
    this.gameListener.dispatchEvent(
      new CustomEvent('carStopAnimation', { detail: { carId: this.carData.id } }),
    );
  }
}
