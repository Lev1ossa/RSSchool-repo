import { winnersProps } from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import './winners.css';

export class WinnersView extends AppView {
  // gameData: GameData;
  // gameListener: EventTarget;
  constructor() {
    super(winnersProps);
    // this.gameData = gameData;
    // this.gameListener = new EventTarget();
    this.constructView();
  }

  constructView(): void {
  }
}
