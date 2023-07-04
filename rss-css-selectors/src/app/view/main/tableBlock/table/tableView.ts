import { AppView } from '../../../appView';
import { ElementCreatorProps, LevelData, TableItem, TableItems } from '../../../../types/types';
import './table.css';
import { ElementCreator } from '../../../../utils/elementCreator';

export class tableView extends AppView {
  levelData: LevelData;
  tooltip: ElementCreator;
  constructor(levelData: LevelData) {
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
    this.constructView();
  }

  constructView(): void {
    
    this.elementCreator.addElement(this.tooltip.getElement());

    this.createTableItems(this.elementCreator, this.levelData.tableItems);
    
  }

  createTableItems(currentEl: ElementCreator, tableItems: TableItems): void {
    tableItems.forEach((item: TableItem) => {
      const tableItemProps: ElementCreatorProps = {
        tag: item.tag,
        classes: ['table-item', item.class],
        textContent: '',
        listeners: {
          mouseover: (event: Event): void => {
            const hoverTarget = event.target as HTMLElement;
            if (hoverTarget) {
              hoverTarget.classList.add('item-hovered');
              const leftCord = hoverTarget.offsetLeft;
              const tooltipEl = this.tooltip.getElement();
              tooltipEl.style.setProperty('left', `${leftCord}px`);
              this.tooltip.getElement().classList.remove('hidden');
              this.tooltip.getElement().textContent = item.tooltip;
            }
          },
          mouseout: (event: Event): void => {
            this.tooltip.getElement().classList.add('hidden');
            const hoverTarget = event.target;
            if (hoverTarget instanceof HTMLElement) {
              hoverTarget.classList.remove('item-hovered');
            }
            this.tooltip.getElement().textContent = '';
          }
        },
      };

      const tableItem = new ElementCreator(tableItemProps);

      if (item.children.length > 0) {
        this.createTableItems(tableItem, item.children);
      }
      // this.elementCreator.addElement(tableItem.getElement());
      currentEl.addElement(tableItem.getElement());
    });
  }
}