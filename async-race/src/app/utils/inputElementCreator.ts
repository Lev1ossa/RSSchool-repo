import { InputElementCreatorProps } from '../types/types';
import { ElementCreator } from './elementCreator';

export class InputElementCreator extends ElementCreator {
  input: ElementCreator;
  inputColor: ElementCreator;
  button: ElementCreator;

  constructor(props: InputElementCreatorProps) {
    const {
      blockProps,
      inputProps,
      inputColorProps,
      buttonProps,
      buttonName,
    } = props;
    super(blockProps);
    this.input = new ElementCreator(inputProps);
    this.inputColor = new ElementCreator(inputColorProps);
    this.button = new ElementCreator(buttonProps);
    this.constructView(buttonName);
  }

  constructView(buttonName: string): void {
    this.inputColor.setElementAttributes([
      {
        attribute: 'type',
        value: 'color',
      },
    ]);
    this.button.element.innerText = buttonName;
    this.getElement().append(this.input.getElement());
    this.getElement().append(this.inputColor.getElement());
    this.getElement().append(this.button.getElement());
  }
}
