import { ElementCreatorProps } from '../types/types';
import { ElementCreator } from '../utils/elementCreator';

export class AppView {
  elementCreator: ElementCreator;

  constructor(props: ElementCreatorProps) {
    this.elementCreator = this.createView(props);
  }

  createView(props: ElementCreatorProps): ElementCreator {
    return new ElementCreator(props);
  }

  getElement(): HTMLElement {
    return this.elementCreator.getElement();
  }
}
