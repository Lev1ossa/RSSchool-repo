import {
  ListenersObj, ElementCreatorProps, ElAttributes, ElAttribute,
} from '../types/types';

export class ElementCreator {
  element: HTMLElement;
  constructor(props: ElementCreatorProps) {
    const {
      tag, classes, textContent, listeners,
    } = props;
    this.element = this.createElement(tag);
    this.setTextContent(textContent);
    this.setCssClasses(classes);
    if (listeners) {
      this.addListeners(listeners);
    }
  }

  createElement(tag: string): HTMLElement {
    return document.createElement(tag);
  }

  getElement(): HTMLElement | HTMLInputElement {
    return this.element;
  }

  setElementAttributes(attributes: ElAttributes): void {
    attributes.forEach(
      (item: ElAttribute) => this.element.setAttribute(item.attribute, item.value),
    );
  }

  setTextContent(textContent: string): void {
    this.element.textContent = textContent;
  }

  setCssClasses(classes: string[]): void {
    classes.forEach((item) => {
      if (item) {
        this.element.classList.add(item);
      }
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
