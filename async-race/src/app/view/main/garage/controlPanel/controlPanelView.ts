import { InputElementCreatorCreateProps, InputElementCreatorUpdateProps, controlPanelProps } from '../../../../utils/elementsProps';
import { InputElementCreator } from '../../../../utils/inputElementCreator';
import { AppView } from '../../../appView';

export class ControlPanelView extends AppView {
  constructor() {
    super(controlPanelProps);
    this.constructView();
  }

  constructView(): void {
    const inputCarCreate = new InputElementCreator(InputElementCreatorCreateProps);
    const inputCarUpdate = new InputElementCreator(InputElementCreatorUpdateProps);

    this.elementCreator.addElement(inputCarCreate.getElement());
    this.elementCreator.addElement(inputCarUpdate.getElement());
  }
}
