import { AppView } from '../../../appView';
import { ElementCreatorProps } from '../../../../types/types';
import './editorHtml.css';

export class EditorHtmlView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor-html'],
      textContent: 'Hello world!',
      listeners: null,
    };
    super(props);
  }
}