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
    const garageButtonElement = garageButton.getElement() as HTMLButtonElement;
    garageButtonElement.disabled = true;

    const winnersButton = new ElementCreator(winnersButtonProps);
    const winnersButtonElement = winnersButton.getElement() as HTMLButtonElement;
    winnersButtonElement.disabled = false;

    garageButton.addListeners(
      {
        click: () => {
          this.gameListener.dispatchEvent(new CustomEvent('pageGarage'));
          garageButtonElement.disabled = true;
          winnersButtonElement.disabled = false;
        },
      },
    );

    winnersButton.addListeners({
      click: () => {
        this.gameListener.dispatchEvent(new CustomEvent('pageWinners'));
        garageButtonElement.disabled = false;
        winnersButtonElement.disabled = true;
      },
    });

    this.elementCreator.addElement(garageButton.getElement());
    this.elementCreator.addElement(winnersButton.getElement());
  }
}
