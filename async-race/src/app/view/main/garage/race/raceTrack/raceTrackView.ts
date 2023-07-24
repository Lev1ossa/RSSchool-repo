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

  constructor() {
    super(raceTrackProps);
    this.buttonSelect = new ElementCreator(raceTrackButtonSelectProps);
    this.buttonDelete = new ElementCreator(raceTrackButtonDeleteProps);
    this.carNameTitle = new ElementCreator(raceTrackCarNameProps);
    this.road = new ElementCreator(raceTrackRoadProps);
    this.buttonStart = new ElementCreator(raceRoadStartButtonProps);
    this.buttonStop = new ElementCreator(raceRoadStopButtonProps);
    this.raceCar = new ElementCreator(raceRoadCarProps);
    this.raceFlag = new ElementCreator(raceRoadFlagProps);
    this.constructView();
  }

  constructView(): void {
    this.raceCar.getElement().innerHTML = getCarSvg('#fff');
    this.raceCar.element = this.raceCar.getElement().firstElementChild as HTMLElement;

    this.elementCreator.addElement(this.buttonSelect.getElement());
    this.elementCreator.addElement(this.buttonDelete.getElement());
    this.elementCreator.addElement(this.carNameTitle.getElement());
    this.road.addElement(this.buttonStart.getElement());
    this.road.addElement(this.buttonStop.getElement());
    this.road.addElement(this.raceCar.getElement());
    this.road.addElement(this.raceFlag.getElement());
    this.elementCreator.addElement(this.road.getElement());
  }
}
