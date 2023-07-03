import hljs from 'highlight.js/lib/core';
import cssLanguage from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/kimbie-dark.css';
import { AppView } from '../../../appView';
import { ElementCreatorProps } from '../../../../types/types';
import './editorCss.css';
import { ElementCreator } from '../../../../utils/elementCreator';

hljs.registerLanguage('css', cssLanguage);

export class EditorCssView extends AppView {
  inputValue: string;
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor-css'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.inputValue = '';
    this.constructView();
  }

  constructView(): void {
    const fakeInputProps = {
      tag: 'div',
      classes: ['fake-css-input', 'language-css'],
      textContent: '',
      listeners: null,
    }

    const fakeInputPreProps = {
      tag: 'pre',
      classes: [],
      textContent: '',
      listeners: null,
    }

    const fakeInputCodeProps = {
      tag: 'code',
      classes: [],
      textContent: '',
      listeners: null,
    }

    const fakeInput = new ElementCreator(fakeInputProps);
    const fakeInputPre = new ElementCreator(fakeInputPreProps);
    const fakeInputCode = new ElementCreator(fakeInputCodeProps);

    const inputProps: ElementCreatorProps = {
      tag: 'input',
      classes: ['css-input'],
      textContent: '',
      listeners: {
        input: (event: Event) => {
          const fakeInputEl = fakeInput.getElement();
          const eventTarget = event.target;
          if (eventTarget instanceof HTMLInputElement){
            fakeInputEl.innerText = eventTarget.value;
          }
          hljs.highlightElement(fakeInputEl);
        },
        keyup: (event: Event) => {
          const eventTarget = event.target;
          if (eventTarget instanceof HTMLInputElement){
            this.inputValue = eventTarget.value;
          }
        },
      },
    }

    const cssInput = new ElementCreator(inputProps);
    cssInput.setElementAttributes([
      {
        attribute: 'type',
        value: 'text',
      },
      {
        attribute: 'placeholder',
        value: 'Type your CSS selector here!',
      },
    ]);

    fakeInputCode.addElement(fakeInput.getElement());
    fakeInputPre.addElement(fakeInputCode.getElement());

    const buttonContainerProps = {
      tag: 'button',
      classes: ['button-container'],
      textContent: '',
      listeners: null,
    }

    const cssEditorButtonProps = {
      tag: 'button',
      classes: ['css-editor-button'],
      textContent: 'Enter',
      listeners: null,
    }
    
    const buttonContainer = new ElementCreator(buttonContainerProps);
    const cssEditorButton = new ElementCreator(cssEditorButtonProps);
    buttonContainer.addElement(cssEditorButton.getElement());

    this.elementCreator.addElement(cssInput.getElement());
    this.elementCreator.addElement(fakeInputPre.getElement());
    this.elementCreator.addElement(buttonContainer.getElement());
  }
}