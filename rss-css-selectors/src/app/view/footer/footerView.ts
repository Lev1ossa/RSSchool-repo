import { ElementCreatorProps } from '../../types/types';
import { AppView } from '../appView';
import './footer.css';

export class FooterView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'footer',
      classes: ['footer'],
      textContent: 'Hello world!',
      listeners: null,
    };
    super(props);
  }
}
