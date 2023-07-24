import { ElementCreator } from './utils/elementCreator';
import {
  closeButtonProps, dialogBlockProps, dialogProps, formDialogProps, menuProps,
} from './utils/elementsProps';
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

  createDialogView():void {
    const dialog = new ElementCreator(dialogProps);
    const formDialog = new ElementCreator(formDialogProps);
    const dialogBlock = new ElementCreator(dialogBlockProps);
    const menu = new ElementCreator(menuProps);
    const closeButton = new ElementCreator(closeButtonProps);

    closeButton.setElementAttributes([
      {
        attribute: 'type',
        value: 'reset',
      },
    ]);

    formDialog.setElementAttributes([
      {
        attribute: 'method',
        value: 'dialog',
      },
    ]);

    menu.addElement(closeButton.getElement());
    formDialog.addElement(dialogBlock.getElement());
    formDialog.addElement(menu.getElement());
    dialog.addElement(formDialog.getElement());

    document.body.append(
      dialog.getElement(),
    );
  }
}
