import { ElementCreatorProps } from '../../types/types';
import { ElementCreator } from '../../utils/elementCreator';
import { AppView } from '../appView';
import { EditorView } from './editor/editorView';
import { LevelsView } from './levels/levelsView';
import './main.css';
import { TableWrapperView } from './tableBlock/tableWrapperView';

export class MainView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['main'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView();
  }

  constructView(): void {
    const gameProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['game'],
      textContent: '',
      listeners: null,
    }
    const gameView = new ElementCreator(gameProps);
    const tableWrapperView = new TableWrapperView();
    const editorView = new EditorView();
    const levelsView = new LevelsView();

    gameView.addElement(tableWrapperView.getElement());
    gameView.addElement(editorView.getElement());
    this.elementCreator.addElement(gameView.getElement());
    this.elementCreator.addElement(levelsView.getElement());
  }
}