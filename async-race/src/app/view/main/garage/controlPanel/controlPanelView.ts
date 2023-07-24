import { ElementCreator } from '../../../../utils/elementCreator';
import {
  InputElementCreatorCreateProps,
  InputElementCreatorUpdateProps,
  buttonGenerateCarsProps,
  buttonRaceProps,
  buttonResetProps,
  controlPanelProps,
} from '../../../../utils/elementsProps';
import { InputElementCreator } from '../../../../utils/inputElementCreator';
import { AppView } from '../../../appView';
import './controlPanel.css';

export class ControlPanelView extends AppView {
  constructor() {
    super(controlPanelProps);
    this.constructView();
  }

  constructView(): void {
    const inputCarCreate = new InputElementCreator(InputElementCreatorCreateProps);
    const inputCarUpdate = new InputElementCreator(InputElementCreatorUpdateProps);
    const buttonRace = new ElementCreator(buttonRaceProps);
    const buttonReset = new ElementCreator(buttonResetProps);
    const buttonGenerateCars = new ElementCreator(buttonGenerateCarsProps);

    this.elementCreator.addElement(inputCarCreate.getElement());
    this.elementCreator.addElement(inputCarUpdate.getElement());
    this.elementCreator.addElement(buttonRace.getElement());
    this.elementCreator.addElement(buttonReset.getElement());
    this.elementCreator.addElement(buttonGenerateCars.getElement());
  }
}
