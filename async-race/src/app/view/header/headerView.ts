import { ElementCreator } from '../../utils/elementCreator';
import { garageButtonProps, headerProps, winnersButtonProps } from '../../utils/elementsProps';
import { AppView } from '../appView';
import './header.css';

export class HeaderView extends AppView {
  constructor() {
    super(headerProps);
    this.constructView();
  }

  constructView(): void {
    const garageButton = new ElementCreator(garageButtonProps);
    const winnersButton = new ElementCreator(winnersButtonProps);

    this.elementCreator.addElement(garageButton.getElement());
    this.elementCreator.addElement(winnersButton.getElement());
  }
}
