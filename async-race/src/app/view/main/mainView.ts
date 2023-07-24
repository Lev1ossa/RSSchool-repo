import { gameData } from '../../data/data';
import { GameData } from '../../types/types';
import { mainProps } from '../../utils/elementsProps';
import { AppView } from '../appView';
import { GarageView } from './garage/garageView';

import './main.css';

export class MainView extends AppView {
  gameData: GameData;
  constructor() {
    super(mainProps);
    this.gameData = gameData;
    this.constructView();
  }

  constructView(): void {
    const garage = new GarageView(this.gameData);
    this.elementCreator.addElement(garage.getElement());
  }
}
