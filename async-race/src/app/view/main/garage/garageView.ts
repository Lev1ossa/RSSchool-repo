import { GameData } from '../../../types/types';
import { garageProps } from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import { ControlPanelView } from './controlPanel/controlPanelView';
import './garage.css';
import { RaceView } from './race/raceView';

export class GarageView extends AppView {
  gameData: GameData;
  raceView: RaceView;
  constructor(data: GameData) {
    super(garageProps);
    this.gameData = data;
    this.raceView = new RaceView(this.gameData);
    this.constructView();
  }

  constructView(): void {
    const controlPanel = new ControlPanelView();
    this.elementCreator.addElement(controlPanel.getElement());
    this.elementCreator.addElement(this.raceView.getElement());
    this.redrawRaceView();
  }

  redrawRaceView(): void {
    const newRaceView = new RaceView(this.gameData);
    this.raceView.getElement().replaceWith(newRaceView.getElement());
    this.raceView = newRaceView;
  }
}
