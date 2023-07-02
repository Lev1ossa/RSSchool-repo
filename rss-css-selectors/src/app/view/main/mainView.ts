import { ElementCreatorProps } from '../../types/types';
import { AppView } from '../appView';
import './main.css';

export class MainView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'main',
      classes: ['main'],
      textContent: 'Hello world!',
      listeners: null,
    };
    super(props);
  }
}