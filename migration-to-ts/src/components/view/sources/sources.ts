import { INewsItemSource } from '../../../types/types';
import './sources.css';

class Sources {
  public draw(data: INewsItemSource[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement | null;

      const itemNameEl = sourceClone?.querySelector('.source__item-name') as HTMLTemplateElement;
      itemNameEl.textContent = item.name;

      const itemEl = sourceClone?.querySelector('.source__item') as HTMLTemplateElement;
      itemEl.setAttribute('data-source-id', item.id);

      if (sourceClone) {
        fragment.append(sourceClone);
      }
    });

    const sourcesEl = document.querySelector('.sources') as HTMLTemplateElement;
    sourcesEl.append(fragment);
  }
}

export default Sources;
