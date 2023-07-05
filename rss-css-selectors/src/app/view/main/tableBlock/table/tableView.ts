import { AppView } from '../../../appView';
import { ElementCreatorProps, HtmlElements, LevelData, TableItem, TableItems } from '../../../../types/types';
import './table.css';
import { ElementCreator } from '../../../../utils/elementCreator';
import { getOffSet } from '../../../../utils/getOffSet';

export class tableView extends AppView {
  levelData: LevelData;
  tooltip: ElementCreator;
  constructor(levelData: LevelData, tableElementsArr: HtmlElements) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['table'],
      textContent: '',
      listeners: null,
    };
    super(props);

    const tooltipProps = {
      tag: 'div',
      classes: ['tooltip', 'hidden'],
      textContent: '',
      listeners: null,
    }

    this.tooltip = new ElementCreator(tooltipProps);
    this.levelData = levelData;
    this.constructView(tableElementsArr);
  }

  constructView(tableElementsArr: HtmlElements): void {
    this.createTableItems(this.elementCreator, this.levelData.tableItems, tableElementsArr);
    this.elementCreator.addElement(this.tooltip.getElement());
    
  }

  createTableItems(currentEl: ElementCreator, tableItems: TableItems, tableElementsArr: HtmlElements): void {
    tableItems.forEach((item: TableItem) => {
      const tableItemProps: ElementCreatorProps = {
        tag: item.tag,
        classes: ['table-item', ...item.classes],
        textContent: '',
        listeners: {
          mouseover: (event: Event): void => {
            const hoverTarget = event.target as HTMLElement;
            if (hoverTarget) {
              hoverTarget.classList.add('item-hovered');
              const leftCord = getOffSet(hoverTarget);
              const tooltipEl = this.tooltip.getElement();
              const htmlEditorElementsArr = document.querySelectorAll('.html-editor-item');
              const tableItemIndex = tableElementsArr.indexOf(hoverTarget);
              const htmlEditorElement = htmlEditorElementsArr[tableItemIndex + 1] as HTMLElement;
              htmlEditorElement.classList.add('html-item-hovered');
              tooltipEl.style.setProperty('left', `${leftCord}px`);
              this.tooltip.getElement().classList.remove('hidden');
              // this.tooltip.getElement().textContent = item.tooltip;
              this.tooltip.getElement().textContent = htmlEditorElement.innerText;
            }
          },
          mouseout: (event: Event): void => {
            this.tooltip.getElement().classList.add('hidden');
            const hoverTarget = event.target as HTMLElement;
            if (hoverTarget) {
              const htmlEditorElementsArr = document.querySelectorAll('.html-editor-item');
              const tableItemIndex = tableElementsArr.indexOf(hoverTarget);
              const htmlEditorElement = htmlEditorElementsArr[tableItemIndex + 1];
              htmlEditorElement.classList.remove('html-item-hovered');
              hoverTarget.classList.remove('item-hovered');
            }
            this.tooltip.getElement().textContent = '';
          }
        },
      };

      const tableItem = new ElementCreator(tableItemProps);
      if (item.id) {
        tableItem.setElementAttributes([
          {
            attribute: 'id',
            value: item.id,
          }
        ]);
      }
      tableElementsArr.push(tableItem.getElement());
      if (item.children.length > 0) {
        this.createTableItems(tableItem, item.children, tableElementsArr);
      }
      // this.elementCreator.addElement(tableItem.getElement());
      currentEl.addElement(tableItem.getElement());
    });
  }
}