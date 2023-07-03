import { AppView } from '../../../appView';
import { ElementCreatorProps } from '../../../../types/types';
import './table.css';

export class titleView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['title'],
      textContent: 'Hello world!',
      listeners: null,
    };
    super(props);
  }
}