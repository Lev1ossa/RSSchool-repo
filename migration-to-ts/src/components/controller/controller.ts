import { Endpoints } from '../../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  public getSources(callback: () => void): void {
    super.getResp(
      {
        endpoint: Endpoints.sources,
      },
      callback
    );
  }

  public getNews<T>(e: Event, callback: (data?: T) => void): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoints.everything,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
