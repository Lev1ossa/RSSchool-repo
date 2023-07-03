import { levelsData } from '../../data/levelsData';
import { ElementCreatorProps, LevelsData } from '../../types/types';
import { ElementCreator } from '../../utils/elementCreator';
import { AppView } from '../appView';
import { EditorView } from './editor/editorView';
import { LevelsView } from './levels/levelsView';
import { TableWrapperView } from './tableBlock/tableWrapperView';
import './main.css';

const defaultLevel = 1;

export class MainView extends AppView {
  levelsData: LevelsData; 
  currentLevel: number;
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['main'],
      textContent: '',
      listeners: null,
    };
    super(props);
    //TODO add current level load from save
    this.currentLevel = defaultLevel;
    this.levelsData = levelsData;
    this.constructView();
  }

  constructView(): void {
    const titleProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['title'],
      textContent: this.levelsData[this.currentLevel].title,
      listeners: null,
    }
    const gameProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['game'],
      textContent: '',
      listeners: null,
    }
    const gameView = new ElementCreator(gameProps);
    const tableWrapperView = new TableWrapperView(this.levelsData[this.currentLevel]);
    const editorView = new EditorView(this.levelsData[this.currentLevel]);
    const levelsView = new LevelsView();
    const gameTitle = new ElementCreator(titleProps);

    gameView.addElement(gameTitle.getElement());
    gameView.addElement(tableWrapperView.getElement());
    gameView.addElement(editorView.getElement());
    this.elementCreator.addElement(gameView.getElement());
    this.elementCreator.addElement(levelsView.getElement());
  }
}