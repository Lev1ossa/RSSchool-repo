import { ListenersObj, ElementCreatorProps, ElAttributes, ElAttribute } from '../types/types';

export class ElementCreator {
  element: HTMLElement;
  constructor(props: ElementCreatorProps) {
    this.element = this.createElement(props);
  }

  createElement(props: ElementCreatorProps): HTMLElement {
    const {
      tag, classes, textContent, listeners,
    } = props;
    const element = document.createElement(tag);
    this.setTextContent(element, textContent);
    this.setCssClasses(element, classes);
    if (listeners) {
      this.setListeners(element, listeners);
    }

    return element;
  }

  getElement(): HTMLElement | HTMLInputElement {
      return this.element;
  }

  setElementAttributes(attributes: ElAttributes): void {
    attributes.forEach((item: ElAttribute) => this.element.setAttribute(item.attribute, item.value));
  }

  setTextContent(element: HTMLElement, textContent: string): void {
    element.textContent = textContent;
  }

  setCssClasses(element: HTMLElement, classes: string[]): void {
    classes.forEach((item) => {
      if (item) {
        element.classList.add(item);
      }
    });
  }

  setListeners(element: HTMLElement, listeners: ListenersObj): void {
    Object.entries(listeners).forEach(([key, value]) => {
      element.addEventListener(key, value);
    });
  }

  addListeners(listeners: ListenersObj): void {
    Object.entries(listeners).forEach(([key, value]) => {
      this.element.addEventListener(key, value);
    });
  }

  addElement(newElement: HTMLElement | undefined): void {
    if (newElement) {
      this.element.append(newElement);
    }
  }
}
