import { GameData, HtmlElements } from '../../../types/types';
import { editorProps } from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import './editor.css';
import { EditorCssView } from './editorCssView/editorCssView';
import { EditorHtmlView } from './editorHtmlView/editorHtmlView';

export class EditorView extends AppView {
  constructor(gameData: GameData, gameListener: EventTarget, tableElementsArr: HtmlElements) {
    super(editorProps);
    this.constructView(gameData, gameListener, tableElementsArr);
  }

  constructView(gameData: GameData, gameListener: EventTarget, tableElementsArr: HtmlElements): void {
    const editorHtmlView = new EditorHtmlView(gameData, tableElementsArr);
    const editorCssView = new EditorCssView(gameData, gameListener, this.elementCreator);

    this.elementCreator.addElement(editorCssView.getElement());
    this.elementCreator.addElement(editorHtmlView.getElement());
  }
}
