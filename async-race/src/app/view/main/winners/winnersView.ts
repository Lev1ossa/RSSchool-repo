import { orderProps, sortProps } from '../../../data/data';
import { GameData } from '../../../types/types';
import { ElementCreator } from '../../../utils/elementCreator';
import {
  buttonWinnerPrevPageProps,
  buttonWinnersNextPageProps,
  winnersHeadCarProps,
  winnersHeadNameProps,
  winnersHeadNumberProps,
  winnersHeadProps,
  winnersHeadTimeProps,
  winnersHeadWinsProps,
  winnersProps,
  winnersSubtitleProps,
  winnersTitleProps,
} from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import { WinnersBlockView } from './winnerBlock/winnersBlockView';
import './winners.css';

export class WinnersView extends AppView {
  gameData: GameData;
  gameListener: EventTarget;
  winnersTitle: ElementCreator;
  winnersSubtitle: ElementCreator;
  winnersBlock: WinnersBlockView;
  buttonWinnerPrevPage: ElementCreator;
  buttonWinnerNextPage: ElementCreator;
  winnersHead: ElementCreator;
  winnersHeadNumber: ElementCreator;
  winnersHeadCar: ElementCreator;
  winnersHeadName: ElementCreator;
  winnersHeadWins: ElementCreator;
  winnersHeadTime: ElementCreator;
  constructor(gameData: GameData, gameListener: EventTarget) {
    super(winnersProps);
    this.gameData = gameData;
    this.gameListener = gameListener;
    this.winnersTitle = new ElementCreator(winnersTitleProps);
    this.winnersSubtitle = new ElementCreator(winnersSubtitleProps);
    this.winnersBlock = new WinnersBlockView(this.gameData, this.gameListener);
    this.buttonWinnerPrevPage = new ElementCreator(buttonWinnerPrevPageProps);
    this.buttonWinnerNextPage = new ElementCreator(buttonWinnersNextPageProps);
    this.winnersHead = new ElementCreator(winnersHeadProps);
    this.winnersHeadNumber = new ElementCreator(winnersHeadNumberProps);
    this.winnersHeadCar = new ElementCreator(winnersHeadCarProps);
    this.winnersHeadName = new ElementCreator(winnersHeadNameProps);
    this.winnersHeadWins = new ElementCreator(winnersHeadWinsProps);
    this.winnersHeadTime = new ElementCreator(winnersHeadTimeProps);
    this.createWinnersHead();
    this.resetButtons();
    this.constructView();
  }

  constructView(): void {
    this.createPrevPage();
    this.createNextPage();
    this.winnersTitle.setTextContent('Winners()');
    this.winnersSubtitle.setTextContent(`Page #${this.gameData.winnersCurrentPage}`);
    this.gameListener.addEventListener('winnersChangeTitle', (event) => {
      const customEvent = event as CustomEvent;
      this.winnersTitle.setTextContent(`Winners(${customEvent.detail.winners})`);
      this.winnersSubtitle.setTextContent(`Page #${this.gameData.winnersCurrentPage}`);
    });
    this.gameListener.addEventListener('winnersResetButtons', () => {
      this.resetButtons();
    });
    this.gameListener.addEventListener('winnersUpdated', () => {
      this.redrawWinnersBlockView();
      this.resetButtons();
    });

    this.elementCreator.addElement(this.winnersTitle.getElement());
    this.elementCreator.addElement(this.winnersSubtitle.getElement());
    this.elementCreator.addElement(this.winnersHead.getElement());
    this.elementCreator.addElement(this.winnersBlock.getElement());
    this.elementCreator.addElement(this.buttonWinnerPrevPage.getElement());
    this.elementCreator.addElement(this.buttonWinnerNextPage.getElement());
  }

  createWinnersHead(): void {
    if (this.gameData.sortProp === sortProps.wins) {
      this.winnersHeadTime.setTextContent('Time');
      if (this.gameData.orderProp === orderProps.DESC) {
        this.winnersHeadWins.setTextContent('Wins ↓');
      } else {
        this.winnersHeadWins.setTextContent('Wins ↑');
      }
    } else {
      this.winnersHeadWins.setTextContent('Wins');
      if (this.gameData.orderProp === orderProps.DESC) {
        this.winnersHeadTime.setTextContent('Time ↓');
      } else {
        this.winnersHeadTime.setTextContent('Time ↑');
      }
    }
    this.setWinnersHeadWinsHandler();
    this.setWinnersHeadTimeHandler();
    this.winnersHead.addElement(this.winnersHeadNumber.getElement());
    this.winnersHead.addElement(this.winnersHeadCar.getElement());
    this.winnersHead.addElement(this.winnersHeadName.getElement());
    this.winnersHead.addElement(this.winnersHeadWins.getElement());
    this.winnersHead.addElement(this.winnersHeadTime.getElement());
  }

  setWinnersHeadWinsHandler(): void {
    this.winnersHeadWins.addListeners({
      click: () => {
        if (this.gameData.sortProp === sortProps.wins) {
          this.winnersHeadTime.setTextContent('Time');
          if (this.gameData.orderProp === orderProps.DESC) {
            this.winnersHeadWins.setTextContent('Wins ↑');
            this.gameData.orderProp = orderProps.ASC;
          } else {
            this.winnersHeadWins.setTextContent('Wins ↓');
            this.gameData.orderProp = orderProps.DESC;
          }
        } else {
          this.winnersHeadTime.setTextContent('Time');
          this.gameData.sortProp = sortProps.wins;
          if (this.gameData.orderProp === orderProps.DESC) {
            this.winnersHeadWins.setTextContent('Wins ↓');
          } else {
            this.winnersHeadWins.setTextContent('Wins ↑');
          }
        }
        this.redrawWinnersBlockView();
      },
    });
  }

  setWinnersHeadTimeHandler(): void {
    this.winnersHeadTime.addListeners({
      click: () => {
        if (this.gameData.sortProp === sortProps.time) {
          this.winnersHeadWins.setTextContent('Wins');
          if (this.gameData.orderProp === orderProps.DESC) {
            this.winnersHeadTime.setTextContent('Time ↑');
            this.gameData.orderProp = orderProps.ASC;
          } else {
            this.winnersHeadTime.setTextContent('Time ↓');
            this.gameData.orderProp = orderProps.DESC;
          }
        } else {
          this.winnersHeadWins.setTextContent('Wins');
          this.gameData.sortProp = sortProps.time;
          if (this.gameData.orderProp === orderProps.DESC) {
            this.winnersHeadTime.setTextContent('Time ↓');
          } else {
            this.winnersHeadTime.setTextContent('Time ↑');
          }
        }
        this.redrawWinnersBlockView();
      },
    });
  }

  createPrevPage(): void {
    const prevButtonElement = this.buttonWinnerPrevPage.getElement() as HTMLButtonElement;
    this.buttonWinnerPrevPage.addListeners({
      click: () => {
        if (this.gameData.winnersCurrentPage === 1) {
          prevButtonElement.disabled = true;
        } else {
          prevButtonElement.disabled = false;
          this.gameData.winnersCurrentPage -= 1;
        }
        this.gameListener.dispatchEvent(new CustomEvent('winnersUpdated'));
      },
    });
    this.elementCreator.addElement(this.buttonWinnerPrevPage.getElement());
  }

  createNextPage(): void {
    const nextButtonElement = this.buttonWinnerNextPage.getElement() as HTMLButtonElement;
    this.buttonWinnerNextPage.addListeners({
      click: () => {
        if (this.gameData.winnersCurrentPage === this.gameData.winnersMaxPage) {
          nextButtonElement.disabled = true;
        } else {
          nextButtonElement.disabled = false;
          this.gameData.winnersCurrentPage += 1;
        }
        this.gameListener.dispatchEvent(new CustomEvent('winnersUpdated'));
      },
    });
    this.elementCreator.addElement(this.buttonWinnerNextPage.getElement());
  }

  resetButtons(): void {
    const prevButtonElement = this.buttonWinnerPrevPage.getElement() as HTMLButtonElement;
    const nextButtonElement = this.buttonWinnerNextPage.getElement() as HTMLButtonElement;
    if (this.gameData.winnersCurrentPage === 1) {
      prevButtonElement.disabled = true;
    } else {
      prevButtonElement.disabled = false;
    }

    if (this.gameData.winnersCurrentPage >= this.gameData.winnersMaxPage) {
      nextButtonElement.disabled = true;
    } else {
      nextButtonElement.disabled = false;
    }
  }

  redrawWinnersBlockView(): void {
    const newWinnersBlockView = new WinnersBlockView(
      this.gameData,
      this.gameListener,
    );
    this.winnersBlock.getElement().replaceWith(newWinnersBlockView.getElement());
    this.winnersBlock = newWinnersBlockView;
  }
}
