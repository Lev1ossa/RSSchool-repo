import { AppView } from '../../../appView';
import { ElementCreatorProps, TableItem, TableItems } from '../../../../types/types';
import './table.css';
import { ElementCreator } from '../../../../utils/elementCreator';

export class tableView extends AppView {
  constructor(tableItems: TableItems) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['table'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView(tableItems);
  }

  constructView(tableItems: TableItems): void {
    const tooltipProps = {
      tag: 'div',
      classes: ['tooltip', 'hidden'],
      textContent: '',
      listeners: null,
    }

    const tooltip = new ElementCreator(tooltipProps);
    this.elementCreator.addElement(tooltip.getElement());

    tableItems.forEach((item: TableItem) => {
      const tableItemProps: ElementCreatorProps = {
        tag: item.tag,
        classes: [item.class],
        textContent: '',
        listeners: {
          mouseover: (event: Event): void => {
            const hoverTarget = event.target as HTMLElement;
            if (hoverTarget) {
              hoverTarget.classList.add('item-hovered');
              const leftCord = hoverTarget.offsetLeft;
              const tooltipEl = tooltip.getElement();
              tooltipEl.style.setProperty('left', `${leftCord}px`);
              tooltip.getElement().classList.remove('hidden');
              tooltip.getElement().textContent = item.tooltip;
            }
          },
          mouseout: (event: Event): void => {
            tooltip.getElement().classList.add('hidden');
            const hoverTarget = event.target;
            if (hoverTarget instanceof HTMLElement) {
              hoverTarget.classList.remove('item-hovered');
            }
            tooltip.getElement().textContent = '';
          }
        },
      };

      const tableItem = new ElementCreator(tableItemProps);
      this.elementCreator.addElement(tableItem.getElement());
    });
  }
}