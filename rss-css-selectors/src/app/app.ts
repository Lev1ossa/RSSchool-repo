import { ElementCreatorProps } from './types/types';
import { ElementCreator } from './utils/elementCreator';
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

    const dialogProps: ElementCreatorProps = {
      tag: 'dialog',
      classes: ['fav-dialog'],
      textContent: '',
      listeners: null,
    }

    const formDialogProps: ElementCreatorProps = {
      tag: 'form',
      classes: [],
      textContent: '',
      listeners: null,
    }

    const dialogBlockProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['fav-dialog-block'],
      textContent: '',
      listeners: null,
    }

    const menuProps: ElementCreatorProps = {
      tag: 'menu',
      classes: ['fav-menu'],
      textContent: '',
      listeners: null,
    }

    const closeButtonProps: ElementCreatorProps = {
      tag: 'button',
      classes: ['fav-close-button'],
      textContent: 'Close',
      listeners: null,
    }

    const dialog = new ElementCreator(dialogProps);
    const formDialog = new ElementCreator(formDialogProps);
    const dialogBlock = new ElementCreator(dialogBlockProps);
    const menu = new ElementCreator(menuProps);
    const closeButton = new ElementCreator(closeButtonProps);

    closeButton.setElementAttributes([
      {
        attribute: 'type',
        value: 'reset',
      }
    ]);

    formDialog.setElementAttributes([
      {
        attribute: 'method',
        value: 'dialog',
      }
    ]);

    menu.addElement(closeButton.getElement());
    formDialog.addElement(dialogBlock.getElement());
    formDialog.addElement(menu.getElement());
    dialog.addElement(formDialog.getElement());


    document.body.append(
      headerView.getElement(),
      mainView.getElement(),
      footerView.getElement(),
      dialog.getElement(),
    );
  }
}
