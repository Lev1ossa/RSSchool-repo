import { ElementCreatorProps } from '../../../types/types';
import { ElementCreator } from '../../../utils/elementCreator';
import { AppView } from '../../appView';
import './tableWrapper.css';

export class TableWrapperView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['table-wrapper'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView();
  }

  constructView(): void {
    const surfaceProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['table-surface'],
      textContent: '',
      listeners: null,
    }
    const tableSurface = new ElementCreator(surfaceProps);
    this.elementCreator.addElement(tableSurface.getElement());

    const edgeProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['table-edge'],
      textContent: '',
      listeners: null,
    }
    const tableEdge = new ElementCreator(edgeProps);
    this.elementCreator.addElement(tableEdge.getElement());
  }
}