import { ElementCreatorProps, HtmlElements, LevelData } from '../../../types/types';
import { ElementCreator } from '../../../utils/elementCreator';
import { AppView } from '../../appView';
import { tableView } from './table/tableView';
import './tableWrapper.css';

export class TableWrapperView extends AppView {
  constructor(levelData: LevelData, newEventTarget: EventTarget, tableElementsArr: HtmlElements) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['table-wrapper'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView(levelData, newEventTarget, tableElementsArr);
  }

  constructView(levelData: LevelData, newEventTarget: EventTarget, tableElementsArr: HtmlElements): void {
    // const event = new CustomEvent("hey", { detail: 'HELLO!' });
    // newEventTarget.dispatchEvent(event);
    
    const surfaceProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['table-surface'],
      textContent: '',
      listeners: null,
    }
    const tableSurface = new ElementCreator(surfaceProps);

    const edgeProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['table-edge'],
      textContent: '',
      listeners: null,
    }
    const tableEdge = new ElementCreator(edgeProps);

    const table = new tableView(levelData, tableElementsArr);
    tableSurface.addElement(table.getElement());

    this.elementCreator.addElement(tableSurface.getElement());
    this.elementCreator.addElement(tableEdge.getElement());
  }
}