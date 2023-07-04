import hljs from 'highlight.js/lib/core';
import { gameData } from '../../data/gameData';
import { ElementCreatorProps, GameData } from '../../types/types';
import { ElementCreator } from '../../utils/elementCreator';
import { AppView } from '../appView';
import { EditorView } from './editor/editorView';
import { LevelsView } from './levels/levelsView';
import { TableWrapperView } from './tableBlock/tableWrapperView';
import './main.css';

export class MainView extends AppView {
  gameData: GameData; 
  gameView: ElementCreator | undefined;
  levelsView: LevelsView | undefined;
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['main'],
      textContent: '',
      listeners: null,
    };
    super(props);
    const loadedGameData: string | null = localStorage.getItem('lev1ossa-selectors-gameData');
    if (loadedGameData) {
      this.gameData = JSON.parse(loadedGameData);
    } else {
      this.gameData = gameData;
      this.updateGameData();
    }
    this.constructView();
  }

  constructView(): void {
    const gameListener = new EventTarget();
    gameListener.addEventListener('gameDataUpdated', ((event: CustomEvent) => {
      this.updateGameData();
    }) as EventListener);
    gameListener.addEventListener('levelChange', ((event: CustomEvent) => {
      this.updateGameData();
      this.clearGame();
      this.setupGame(gameListener);
    }) as EventListener);

    this.setupGame(gameListener);
    
  }

  updateGameData(): void {
    localStorage.setItem('lev1ossa-selectors-gameData', JSON.stringify(this.gameData));
  }

  setupGame(gameListener: EventTarget): void {
    const titleProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['title'],
      textContent: this.gameData.levelsData[gameData.currentLevel].title,
      listeners: null,
    }
    const gameProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['game'],
      textContent: '',
      listeners: null,
    }

    const helpButtonContainerProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['help-button-container'],
      textContent: '',
      listeners: null,
    }

    const helpButtonProps: ElementCreatorProps = {
      tag: 'button',
      classes: ['help-button'],
      textContent: 'HELP!',
      listeners: {
        click: (): void => {
          const helpText = this.gameData.levelsData[this.gameData.currentLevel].helpTag;
          const cssInput = document.querySelector('.css-input') as HTMLInputElement;
          cssInput.value = helpText;
          const fakeInput = document.querySelector('.fake-css-input') as HTMLElement;
          fakeInput.innerText = helpText;
          hljs.highlightElement(fakeInput);
          fakeInput.classList.add('help');
          setTimeout(() => fakeInput.classList.remove('help'), 3000);
          this.gameData.levelsData[this.gameData.currentLevel].helpUsed = true;
          this.updateGameData();
        },
      },
    }

    const helpButtonContainer = new ElementCreator(helpButtonContainerProps);
    const helpButton = new ElementCreator(helpButtonProps);

    helpButtonContainer.addElement(helpButton.getElement());
    

    const gameView = new ElementCreator(gameProps);
    const tableWrapperView = new TableWrapperView(this.gameData.levelsData[gameData.currentLevel], gameListener);
    const editorView = new EditorView(this.gameData, gameListener);
    const levelsView = new LevelsView(this.gameData, gameListener);
    const gameTitle = new ElementCreator(titleProps);

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
  }
}