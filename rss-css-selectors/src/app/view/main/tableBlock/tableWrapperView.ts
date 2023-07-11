import { HtmlElements, LevelData } from '../../../types/types';
import { ElementCreator } from '../../../utils/elementCreator';
import { edgeProps, surfaceProps, tableWrapperProps } from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import { tableView } from './table/tableView';
import './tableWrapper.css';

export class TableWrapperView extends AppView {
  constructor(levelData: LevelData, newEventTarget: EventTarget, tableElementsArr: HtmlElements) {
    super(tableWrapperProps);
    this.constructView(levelData, newEventTarget, tableElementsArr);
  }

  constructView(levelData: LevelData, newEventTarget: EventTarget, tableElementsArr: HtmlElements): void {
    const tableSurface = new ElementCreator(surfaceProps);
    const tableEdge = new ElementCreator(edgeProps);
    const table = new tableView(levelData, tableElementsArr);

    tableSurface.addElement(table.getElement());
    this.elementCreator.addElement(tableSurface.getElement());
    this.elementCreator.addElement(tableEdge.getElement());
  }
}