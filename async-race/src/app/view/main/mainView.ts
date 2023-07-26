import { gameData } from '../../data/data';
import { GameData } from '../../types/types';
import { mainProps } from '../../utils/elementsProps';
import { AppView } from '../appView';
import { GarageView } from './garage/garageView';

import './main.css';
import { WinnersView } from './winners/winnersView';

export class MainView extends AppView {
  gameData: GameData;
  gameListener: EventTarget;
  garage: GarageView;
  winners: WinnersView;
  constructor(gameListener: EventTarget) {
    super(mainProps);
    this.gameData = gameData;
    this.gameListener = gameListener;
    this.garage = new GarageView(this.gameData, this.gameListener);
    this.winners = new WinnersView(this.gameData, this.gameListener);
    this.constructView();
    this.setChangeViewListeners();
  }

  constructView(): void {
    this.elementCreator.addElement(this.garage.getElement());
  }

  setChangeViewListeners(): void {
    this.gameListener.addEventListener('pageGarage', () => {
      this.elementCreator.removeChildren();
      this.elementCreator.addElement(this.garage.getElement());
    });
    this.gameListener.addEventListener('pageWinners', () => {
      this.elementCreator.removeChildren();
      this.elementCreator.addElement(this.winners.getElement());
      this.gameListener.dispatchEvent(new CustomEvent('winnersUpdated'));
    });
  }
}
