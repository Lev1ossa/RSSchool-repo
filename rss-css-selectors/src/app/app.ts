import { HeaderView } from './view/header/headerView';

export class App {
  constructor() {
    this.createAppView();
  }

  createAppView(): void {
    const headerView: HeaderView = new HeaderView();
    document.body.append(headerView.getElement());
  }
}
