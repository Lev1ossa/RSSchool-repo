import { ElementCreatorProps, GameData, LevelData } from '../../../types/types';
import { AppView } from '../../appView';
import './editor.css';
import { EditorCssView } from './editorCssView/editorCssView';
import { EditorHtmlView } from './editorHtmlView/editorHtmlView';

export class EditorView extends AppView {
  constructor(gameData: GameData, gameListener: EventTarget) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView(gameData, gameListener);
  }

  constructView(gameData: GameData, gameListener: EventTarget): void {
    const editorHtmlView = new EditorHtmlView(gameData);
    const editorCssView = new EditorCssView(gameData, gameListener, this.elementCreator);

    this.elementCreator.addElement(editorCssView.getElement());
    this.elementCreator.addElement(editorHtmlView.getElement());
  }
}
