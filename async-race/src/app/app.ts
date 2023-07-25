import { FooterView } from './view/footer/footerView';
import { HeaderView } from './view/header/headerView';
import { MainView } from './view/main/mainView';

export class App {
  gameListener: EventTarget;

  constructor() {
    this.gameListener = new EventTarget();
    this.createAppView();
  }

  createAppView(): void {
    const headerView: HeaderView = new HeaderView(this.gameListener);
    const mainView: MainView = new MainView(this.gameListener);
    const footerView: FooterView = new FooterView();

    document.body.append(
      headerView.getElement(),
      mainView.getElement(),
      footerView.getElement(),
    );
  }
}
