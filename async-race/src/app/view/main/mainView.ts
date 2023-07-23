import { mainProps } from '../../utils/elementsProps';
import { AppView } from '../appView';
import { GarageView } from './garage/garageView';

import './main.css';

export class MainView extends AppView {
  constructor() {
    super(mainProps);
    this.constructView();
  }

  constructView(): void {
    const garage = new GarageView();
    this.elementCreator.addElement(garage.getElement());
  }
}
