import { ElementCreatorProps } from '../../types/types';
import { AppView } from '../appView';
import './header.css';

export class HeaderView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['header'],
      textContent: 'RSS CSS Selectors',
      listeners: null,
    };
    super(props);
  }
}
