import { gameData } from '../../data/data';
import { GameData } from '../../types/types';
import { mainProps } from '../../utils/elementsProps';
import { AppView } from '../appView';
import { GarageView } from './garage/garageView';

import './main.css';

export class MainView extends AppView {
  gameData: GameData;
  gameListener: EventTarget;
  constructor() {
    super(mainProps);
    this.gameData = gameData;
    this.gameListener = new EventTarget();
    this.constructView();
  }

  constructView(): void {
    const garage = new GarageView(this.gameData, this.gameListener);
    this.elementCreator.addElement(garage.getElement());
  }
}
