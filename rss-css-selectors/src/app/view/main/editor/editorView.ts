import { ElementCreatorProps, GameData, HtmlElements, LevelData } from '../../../types/types';
import { AppView } from '../../appView';
import './editor.css';
import { EditorCssView } from './editorCssView/editorCssView';
import { EditorHtmlView } from './editorHtmlView/editorHtmlView';

export class EditorView extends AppView {
  constructor(gameData: GameData, gameListener: EventTarget, tableElementsArr: HtmlElements) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView(gameData, gameListener, tableElementsArr);
  }

  constructView(gameData: GameData, gameListener: EventTarget, tableElementsArr: HtmlElements): void {
    const editorHtmlView = new EditorHtmlView(gameData, tableElementsArr);
    const editorCssView = new EditorCssView(gameData, gameListener, this.elementCreator);

    this.elementCreator.addElement(editorCssView.getElement());
    this.elementCreator.addElement(editorHtmlView.getElement());
  }
}
