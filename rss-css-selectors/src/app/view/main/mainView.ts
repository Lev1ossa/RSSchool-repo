import { gameData } from '../../data/gameData';
import { ElementCreatorProps, GameData } from '../../types/types';
import { ElementCreator } from '../../utils/elementCreator';
import { AppView } from '../appView';
import { EditorView } from './editor/editorView';
import { LevelsView } from './levels/levelsView';
import { TableWrapperView } from './tableBlock/tableWrapperView';
import './main.css';

// const defaultLevel = 1;

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
    //TODO add current level load from save
    // this.currentLevel = gameData.currentLevel;
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
    const gameView = new ElementCreator(gameProps);
    const tableWrapperView = new TableWrapperView(this.gameData.levelsData[gameData.currentLevel], gameListener);
    const editorView = new EditorView(this.gameData.levelsData[gameData.currentLevel]);
    const levelsView = new LevelsView(this.gameData, gameListener);
    const gameTitle = new ElementCreator(titleProps);

    gameView.addElement(gameTitle.getElement());
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