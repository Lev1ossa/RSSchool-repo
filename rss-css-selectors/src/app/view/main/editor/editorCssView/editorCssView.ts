import { AppView } from '../../../appView';
import { ElementCreatorProps } from '../../../../types/types';
import './editorCss.css';

export class EditorCssView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor-css'],
      textContent: 'Hello world!',
      listeners: null,
    };
    super(props);
  }
}