import hljs from 'highlight.js/lib/core';
import cssLanguage from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/kimbie-dark.css';
import { AppView } from '../../../appView';
import { ElementCreatorProps, GameData, KeyboardEventHandler, Statuses } from '../../../../types/types';
import './editorCss.css';
import { ElementCreator } from '../../../../utils/elementCreator';
import { showDialog } from '../../../../utils/showDialog';

hljs.registerLanguage('css', cssLanguage);

export class EditorCssView extends AppView {
  inputValue: string;
  maxLevel: number;
  constructor(gameData: GameData, gameListener: EventTarget, editorElement: ElementCreator) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor-css'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.inputValue = '';
    this.maxLevel = Object.entries(gameData.levelsData).length;
    this.constructView(gameData, gameListener, editorElement);
  }

  constructView(gameData: GameData, gameListener: EventTarget, editorElement: ElementCreator): void {
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
            this.inputValue = eventTarget.value;
          }
          hljs.highlightElement(fakeInputEl);
        }
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
      listeners: {
        click: (): void => {
          this.cssInputHandler(gameData, gameListener, editorElement, cssInput);
        }
      },
    };

    const keyUpHandler = (event: KeyboardEvent): void => {
      event.preventDefault();
      if (event.code === 'Enter' && !(event.repeat)) {
        this.cssInputHandler(gameData, gameListener, editorElement, cssInput, keyUpHandler);
      }
    }; 

    window.addEventListener('keyup', keyUpHandler);
    
    const buttonContainer = new ElementCreator(buttonContainerProps);
    const cssEditorButton = new ElementCreator(cssEditorButtonProps);
    buttonContainer.addElement(cssEditorButton.getElement());

    this.elementCreator.addElement(cssInput.getElement());
    this.elementCreator.addElement(fakeInputPre.getElement());
    this.elementCreator.addElement(buttonContainer.getElement());
  }

  cssInputHandler(gameData: GameData, gameListener: EventTarget, editorElement: ElementCreator, cssInput: ElementCreator, keyUpHandler?: KeyboardEventHandler): void {
    const cssInputEl = cssInput.getElement() as HTMLInputElement;
    if (!cssInputEl.disabled){  
      let correctSelector = true;
      const winSelectorElements = [...document.querySelectorAll('.skew')];
      try {
        const userSelectorElements = [...document.querySelectorAll(cssInputEl.value)];
        if (winSelectorElements.length === userSelectorElements.length) {
          for (let i = 0; i < winSelectorElements.length; i++) {
            if (winSelectorElements[i] !== userSelectorElements[i]) {
              correctSelector = false;
            }
          }
        } else {
          correctSelector = false;
        }
      } catch {
        correctSelector = false;
      }
      if (correctSelector) {
        winSelectorElements.forEach((item) => {
          item.classList.add('remove');
        });
        const currentLevel = gameData.levelsData[gameData.currentLevel];
        if (currentLevel.helpUsed) {
          currentLevel.status = Statuses.statusWinHelp;
        } else {
          currentLevel.status = Statuses.statusWin;
        }
        const nextLevel = +gameData.currentLevel + 1;
        if (nextLevel > this.maxLevel) {
          showDialog('You have finished last level! You can reset game and try again!');
        } else {
          gameData.currentLevel = nextLevel.toString();
        }
        if (keyUpHandler) {
          window.removeEventListener('keyup', keyUpHandler);
        }
        setTimeout(() => {
          gameListener.dispatchEvent(new CustomEvent('levelChange'));
        }, 2000);
      } else {
        editorElement.getElement().classList.add('loseShake');
        setTimeout(() => editorElement.getElement().classList.remove('loseShake'), 2000);
      }
    }
  }
}