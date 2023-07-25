import { GameData } from '../../../types/types';
import { ElementCreator } from '../../../utils/elementCreator';
import {
  buttonNextPageProps, buttonPrevPageProps, garageProps, modalWindowProps,
} from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import { ControlPanelView } from './controlPanel/controlPanelView';
import './garage.css';
import { RaceView } from './race/raceView';

export class GarageView extends AppView {
  gameData: GameData;
  raceView: RaceView;
  gameListener: EventTarget;
  prevButton: ElementCreator;
  nextButton: ElementCreator;
  constructor(data: GameData, gameListener: EventTarget) {
    super(garageProps);
    this.gameListener = gameListener;
    this.gameData = data;
    this.raceView = new RaceView(this.gameData, this.gameListener);
    this.prevButton = new ElementCreator(buttonPrevPageProps);
    this.nextButton = new ElementCreator(buttonNextPageProps);
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
      this.resetButtons();
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
    this.createPrevPage();
    this.createNextPage();
  }

  createPrevPage(): void {
    const prevButtonElement = this.prevButton.getElement() as HTMLButtonElement;
    this.prevButton.addListeners({
      click: () => {
        if (this.gameData.currentPage === 1) {
          prevButtonElement.disabled = true;
        } else {
          prevButtonElement.disabled = false;
          this.gameData.currentPage -= 1;
        }
        this.gameListener.dispatchEvent(new CustomEvent('carsUpdated'));
      },
    });
    this.elementCreator.addElement(this.prevButton.getElement());
  }

  createNextPage(): void {
    const nextButtonElement = this.nextButton.getElement() as HTMLButtonElement;
    this.nextButton.addListeners({
      click: () => {
        if (this.gameData.currentPage === this.gameData.maxPage) {
          nextButtonElement.disabled = true;
        } else {
          nextButtonElement.disabled = false;
          this.gameData.currentPage += 1;
        }
        this.gameListener.dispatchEvent(new CustomEvent('carsUpdated'));
      },
    });
    this.elementCreator.addElement(this.nextButton.getElement());
  }

  resetButtons(): void {
    const prevButtonElement = this.prevButton.getElement() as HTMLButtonElement;
    const nextButtonElement = this.nextButton.getElement() as HTMLButtonElement;
    if (this.gameData.currentPage === 1) {
      prevButtonElement.disabled = true;
    } else {
      prevButtonElement.disabled = false;
    }

    if (this.gameData.currentPage === this.gameData.maxPage) {
      nextButtonElement.disabled = true;
    } else {
      nextButtonElement.disabled = false;
    }
  }

  redrawRaceView(): void {
    const newRaceView = new RaceView(this.gameData, this.gameListener);
    this.raceView.getElement().replaceWith(newRaceView.getElement());
    this.raceView = newRaceView;
  }
}
