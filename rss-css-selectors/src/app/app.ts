import { FooterView } from './view/footer/footerView';
import { HeaderView } from './view/header/headerView';
import { MainView } from './view/main/mainView';

export class App {
  constructor() {
    this.createAppView();
  }

  createAppView(): void {
    const headerView: HeaderView = new HeaderView();
    const mainView: MainView = new MainView();
    const footerView: FooterView = new FooterView();

    document.body.append(
      headerView.getElement(),
      mainView.getElement(),
      footerView.getElement(),
    );
  }
}
