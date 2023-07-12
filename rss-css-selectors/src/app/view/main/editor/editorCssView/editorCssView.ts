import hljs from 'highlight.js/lib/core';
import cssLanguage from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/kimbie-dark.css';
import { AppView } from '../../../appView';
import { GameData, HtmlElements, Statuses } from '../../../../types/types';
import './editorCss.css';
import { ElementCreator } from '../../../../utils/elementCreator';
import { showDialog } from '../../../../utils/showDialog';
import { buttonContainerProps, cssEditorButtonProps, editorCssProps, fakeInputCodeProps, fakeInputPreProps, fakeInputProps, inputProps } from '../../../../utils/elementsProps';
import { сheckGameWin } from '../../../../utils/checkGameWin';

hljs.registerLanguage('css', cssLanguage);

export class EditorCssView extends AppView {
  inputValue: string;
  maxLevel: number;
  constructor(gameData: GameData, gameListener: EventTarget, editorElement: ElementCreator) {
    super(editorCssProps);
    this.inputValue = '';
    this.maxLevel = Object.entries(gameData.levelsData).length;
    this.constructView(gameData, gameListener, editorElement);
  }

  constructView(gameData: GameData, gameListener: EventTarget, editorElement: ElementCreator): void {
    const fakeInput = new ElementCreator(fakeInputProps);
    const fakeInputPre = new ElementCreator(fakeInputPreProps);
    const fakeInputCode = new ElementCreator(fakeInputCodeProps);
    const cssInput = new ElementCreator(inputProps);
    cssInput.addListeners({
        input: (event: Event) => {
          const fakeInputEl = fakeInput.getElement();
          const eventTarget = event.target;
          if (eventTarget instanceof HTMLInputElement){
            fakeInputEl.innerText = eventTarget.value;
            this.inputValue = eventTarget.value;
          }
          hljs.highlightElement(fakeInputEl);
        },
        keyup: (event: Event | KeyboardEvent) => {
          event.preventDefault();
          if (event instanceof KeyboardEvent){
            if (event.code === 'Enter' && !(event.repeat)) {
              this.cssInputHandler(gameData, gameListener, editorElement, cssInput);
            }
          }
        }
      },
    );
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
    
    const buttonContainer = new ElementCreator(buttonContainerProps);
    const cssEditorButton = new ElementCreator(cssEditorButtonProps);
    cssEditorButton.addListeners({
      click: (): void => {
        this.cssInputHandler(gameData, gameListener, editorElement, cssInput);
      },
    },
    )
    buttonContainer.addElement(cssEditorButton.getElement());

    this.elementCreator.addElement(cssInput.getElement());
    this.elementCreator.addElement(fakeInputPre.getElement());
    this.elementCreator.addElement(buttonContainer.getElement());
  }

  cssInputHandler(gameData: GameData, gameListener: EventTarget, editorElement: ElementCreator, cssInput: ElementCreator): void {
    const cssInputEl = cssInput.getElement() as HTMLInputElement;
    const winSelectorElements = [...document.querySelectorAll('.skew')] as HtmlElements;
    if (!cssInputEl.disabled){  
      if (this.сheckWin(cssInput, winSelectorElements)) {
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
        setTimeout(() => {
          gameListener.dispatchEvent(new CustomEvent('levelChange'));
        }, 2000);
      } else {
        editorElement.getElement().classList.add('loseShake');
        setTimeout(() => editorElement.getElement().classList.remove('loseShake'), 2000);
      }
    }
  }

  сheckWin(cssInput: ElementCreator, winSelectorElements: HtmlElements): boolean {
    return сheckGameWin(cssInput, winSelectorElements);
  }
}