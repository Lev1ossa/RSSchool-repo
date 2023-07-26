import { GameData } from '../../../../types/types';
import { winnersBlockProps } from '../../../../utils/elementsProps';
import { getWinnersData } from '../../../../utils/requests';
import { AppView } from '../../../appView';
import { WinnerView } from './winner/winnerView';
import './winnersBlock.css';

export class WinnersBlockView extends AppView {
  gameData: GameData;
  gameListener: EventTarget;
  constructor(gameData: GameData, gameListener: EventTarget) {
    super(winnersBlockProps);
    this.gameData = gameData;
    this.gameListener = gameListener;
    this.constructView();
  }

  constructView(): void {
    getWinnersData(
      this.gameData.winnersCurrentPage,
      this.gameData.sortProp,
      this.gameData.orderProp,
    ).then(
      (winnersData) => {
        this.gameData.winnersMaxPage = winnersData.winnersPagesNumber;
        this.gameListener.dispatchEvent(new CustomEvent('winnersChangeTitle', { detail: { winners: winnersData.winnersNumber } }));
        this.gameListener.dispatchEvent(new CustomEvent('winnersResetButtons'));
        winnersData.winnersCarsData.forEach((winnerData) => {
          const winner = new WinnerView(this.gameData, this.gameListener, winnerData);
          this.elementCreator.addElement(winner.getElement());
        });
      },
      () => {},
    );
  }
}
