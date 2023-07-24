import { ElementCreator } from '../../utils/elementCreator';
import { garageButtonProps, headerProps, winnersButtonProps } from '../../utils/elementsProps';
import { AppView } from '../appView';
import './header.css';

export class HeaderView extends AppView {
  gameListener: EventTarget;
  constructor(gameListener: EventTarget) {
    super(headerProps);
    this.gameListener = gameListener;
    this.constructView();
  }

  constructView(): void {
    const garageButton = new ElementCreator(garageButtonProps);
    garageButton.addListeners({ click: () => this.gameListener.dispatchEvent(new CustomEvent('pageGarage')) });

    const winnersButton = new ElementCreator(winnersButtonProps);
    winnersButton.addListeners({ click: () => this.gameListener.dispatchEvent(new CustomEvent('pageWinners')) });

    this.elementCreator.addElement(garageButton.getElement());
    this.elementCreator.addElement(winnersButton.getElement());
  }
}
