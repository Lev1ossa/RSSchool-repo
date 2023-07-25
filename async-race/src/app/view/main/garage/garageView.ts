import { GameData } from '../../../types/types';
import { ElementCreator } from '../../../utils/elementCreator';
import { garageProps, modalWindowProps } from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import { ControlPanelView } from './controlPanel/controlPanelView';
import './garage.css';
import { RaceView } from './race/raceView';

export class GarageView extends AppView {
  gameData: GameData;
  raceView: RaceView;
  gameListener: EventTarget;
  constructor(data: GameData, gameListener: EventTarget) {
    super(garageProps);
    this.gameListener = gameListener;
    this.gameData = data;
    this.raceView = new RaceView(this.gameData, this.gameListener);
    this.constructView();
  }

  constructView(): void {
    const controlPanel = new ControlPanelView(this.gameData, this.gameListener);
    const modalWindow = new ElementCreator(modalWindowProps);
    this.elementCreator.addElement(controlPanel.getElement());
    this.elementCreator.addElement(this.raceView.getElement());
    this.redrawRaceView();
    this.gameListener.addEventListener('carsUpdated', () => {
      this.redrawRaceView();
    });
    this.gameListener.addEventListener('modal-hide', () => {
      modalWindow.getElement().classList.add('hidden');
    });
    this.gameListener.addEventListener('modal-show', (event) => {
      const customEvent = event as CustomEvent;
      modalWindow.getElement().textContent = customEvent.detail.modalText;
      modalWindow.getElement().classList.remove('hidden');
    });
    this.elementCreator.addElement(modalWindow.getElement());
  }

  redrawRaceView(): void {
    const newRaceView = new RaceView(this.gameData, this.gameListener);
    this.raceView.getElement().replaceWith(newRaceView.getElement());
    this.raceView = newRaceView;
  }
}
