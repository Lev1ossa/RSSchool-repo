import { INews } from '../../types/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const sourcesEl = document.querySelector('.sources');
    sourcesEl?.addEventListener('click', (e) =>
      this.controller.getNews(e, (data?: INews) => {
        if (data) {
          this.view.drawNews(data);
        }
      })
    );
    this.controller.getSources((data?: INews) => {
      if (data) {
        this.view.drawSources(data);
      }
    });
  }
}

export default App;
