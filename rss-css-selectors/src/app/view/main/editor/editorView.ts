import { ElementCreatorProps } from '../../../types/types';
import { AppView } from '../../appView';
import './editor.css';
import { EditorCssView } from './editorCssView/editorCssView';
import { EditorHtmlView } from './editorHtmlView/editorHtmlView';

export class EditorView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView();
  }

  constructView(): void {
  const editorHtmlView = new EditorHtmlView();
  const editorCssView = new EditorCssView();

  this.elementCreator.addElement(editorHtmlView.getElement());
  this.elementCreator.addElement(editorCssView.getElement());
  }
}
