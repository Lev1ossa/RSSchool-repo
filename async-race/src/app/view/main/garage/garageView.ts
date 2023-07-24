import { garageProps } from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import { ControlPanelView } from './controlPanel/controlPanelView';
import './garage.css';
import { RaceView } from './race/raceView';

export class GarageView extends AppView {
  constructor() {
    super(garageProps);
    this.constructView();
  }

  constructView(): void {
    const controlPanel = new ControlPanelView();
    const race = new RaceView();

    this.elementCreator.addElement(controlPanel.getElement());
    this.elementCreator.addElement(race.getElement());
  }
}
