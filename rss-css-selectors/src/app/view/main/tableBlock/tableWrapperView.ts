import { ElementCreatorProps } from '../../../types/types';
import { AppView } from '../../appView';
import './tableWrapper.css';

export class TableWrapperView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['table-wrapper'],
      textContent: 'Hello world!',
      listeners: null,
    };
    super(props);
  }
}