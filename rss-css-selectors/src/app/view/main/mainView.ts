import hljs from 'highlight.js/lib/core';
import { gameData } from '../../data/gameData';
import { GameData, HtmlElements } from '../../types/types';
import { ElementCreator } from '../../utils/elementCreator';
import { AppView } from '../appView';
import { EditorView } from './editor/editorView';
import { LevelsView } from './levels/levelsView';
import { TableWrapperView } from './tableBlock/tableWrapperView';
import './main.css';
import { gameProps, helpButtonContainerProps, helpButtonProps, mainProps, titleProps } from '../../utils/elementsProps';

export class MainView extends AppView {
  gameData: GameData; 
  gameView: ElementCreator | undefined;
  levelsView: LevelsView | undefined;
  tableElementsArr: HtmlElements;
  constructor() {
    super(mainProps);
    const loadedGameData: string | null = localStorage.getItem('lev1ossa-css-selectors-gameData');
    if (loadedGameData) {
      this.gameData = JSON.parse(loadedGameData);
    } else {
      this.gameData = gameData;
      this.updateGameData();
    }
    this.tableElementsArr = [];
    this.constructView();
  }

  constructView(): void {
    const gameListener = new EventTarget();
    gameListener.addEventListener('gameDataUpdated', (() => {
      this.updateGameData();
    }) as EventListener);
    gameListener.addEventListener('levelChange', (() => {
      this.updateGameData();
      this.clearGame();
      this.setupGame(gameListener);
    }) as EventListener);

    this.setupGame(gameListener);
    
  }

  updateGameData(): void {
    localStorage.setItem('lev1ossa-css-selectors-gameData', JSON.stringify(this.gameData));
  }

  setupGame(gameListener: EventTarget): void {
    const helpButtonContainer = new ElementCreator(helpButtonContainerProps);
    const helpButton = new ElementCreator(helpButtonProps);
    helpButton.addListeners({
        click: (): void => {
          const helpText = this.gameData.levelsData[this.gameData.currentLevel].helpTag;
          const cssInput = document.querySelector('.css-input') as HTMLInputElement;
          const fakeInput = document.querySelector('.fake-css-input') as HTMLElement;
          if (!cssInput.disabled) {
            cssInput.disabled = true;
            cssInput.value = '';
            fakeInput.innerText = '';
            helpText.split('').forEach((item, idx) => {
              setTimeout(() => {
                cssInput.value += item;
                fakeInput.innerText += item;
                hljs.highlightElement(fakeInput);
              }, 100 * idx);
            })
            setTimeout(() => cssInput.disabled = false, helpText.length * 100);
            this.gameData.levelsData[this.gameData.currentLevel].helpUsed = true;
            this.updateGameData();
          }
        },
      },
    );

    helpButtonContainer.addElement(helpButton.getElement());
    

    const gameView = new ElementCreator(gameProps);
    const tableWrapperView = new TableWrapperView(this.gameData.levelsData[this.gameData.currentLevel], gameListener, this.tableElementsArr);
    const editorView = new EditorView(this.gameData, gameListener, this.tableElementsArr);
    const levelsView = new LevelsView(this.gameData, gameListener);

    const gameTitle = new ElementCreator(titleProps);
    gameTitle.getElement().textContent = this.gameData.levelsData[this.gameData.currentLevel].title;

    gameView.addElement(gameTitle.getElement());
    gameView.addElement(helpButton.getElement());
    gameView.addElement(tableWrapperView.getElement());
    gameView.addElement(editorView.getElement());

    this.gameView = gameView;
    this.levelsView = levelsView;

    this.elementCreator.addElement(gameView.getElement());
    this.elementCreator.addElement(levelsView.getElement());
  }

  clearGame(): void {
    if (this.gameView) {
      this.getElement().removeChild(this.gameView.getElement());
    }
    if (this.levelsView) {
      this.getElement().removeChild(this.levelsView.getElement());
    }
    this.tableElementsArr.length = 0;
  }
}