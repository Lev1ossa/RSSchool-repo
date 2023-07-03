import { ElementCreatorProps, LevelData } from '../../../types/types';
import { AppView } from '../../appView';
import './editor.css';
import { EditorCssView } from './editorCssView/editorCssView';
import { EditorHtmlView } from './editorHtmlView/editorHtmlView';

export class EditorView extends AppView {
  constructor(levelData: LevelData) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView(levelData);
  }

  constructView(levelData: LevelData): void {
    const editorHtmlView = new EditorHtmlView(levelData);
    const editorCssView = new EditorCssView();

    this.elementCreator.addElement(editorCssView.getElement());
    this.elementCreator.addElement(editorHtmlView.getElement());
  }
}
