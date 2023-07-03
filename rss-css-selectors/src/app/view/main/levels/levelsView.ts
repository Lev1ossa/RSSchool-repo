import { ElementCreatorProps } from '../../../types/types';
import { AppView } from '../../appView';
import './levels.css';

export class LevelsView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['levels'],
      textContent: 'Hello world!',
      listeners: null,
    };
    super(props);
  }
}