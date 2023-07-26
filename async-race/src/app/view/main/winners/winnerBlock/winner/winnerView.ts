import { CarData, GameData, Winner } from '../../../../../types/types';
import { ElementCreator } from '../../../../../utils/elementCreator';
import {
  carContainerProps,
  winnerProps,
  winnersCarProps,
  winnersNameProps,
  winnersNumberProps,
  winnersTimeProps,
  winnersWinsProps,
} from '../../../../../utils/elementsProps';
import { getCarSvg } from '../../../../../utils/getCarSvg';
import { getCar } from '../../../../../utils/requests';
import { AppView } from '../../../../appView';
import './winner.css';

export class WinnerView extends AppView {
  gameData: GameData;
  gameListener: EventTarget;
  winnersNumber: ElementCreator;
  winnersCar: ElementCreator;
  winnersName: ElementCreator;
  winnersWins: ElementCreator;
  winnersTime: ElementCreator;
  winnerData: Winner;
  constructor(gameData: GameData, gameListener: EventTarget, winnerData: Winner) {
    super(winnerProps);
    this.gameData = gameData;
    this.gameListener = gameListener;
    this.winnerData = winnerData;
    this.winnersNumber = new ElementCreator(winnersNumberProps);
    this.winnersCar = new ElementCreator(winnersCarProps);
    this.winnersName = new ElementCreator(winnersNameProps);
    this.winnersWins = new ElementCreator(winnersWinsProps);
    this.winnersTime = new ElementCreator(winnersTimeProps);
    this.constructView();
  }

  constructView(): void {
    let counter = 0;
    getCar(this.winnerData.id).then(
      (car: CarData) => {
        counter += 1;
        this.winnersNumber.setTextContent(`${counter}`);
        this.winnersCar.getElement().innerHTML = getCarSvg(car.color);
        this.winnersCar.element = this.winnersCar.getElement().firstElementChild as HTMLElement;
        this.winnersCar.element.style.width = '30px';
        this.winnersCar.element.style.height = '30px';
        this.winnersCar.setCssClasses(['winners-car-svg']);
        const carContainer = new ElementCreator(carContainerProps);
        carContainer.setCssClasses(['winners-car-container']);
        this.winnersName.setTextContent(car.name);
        this.winnersWins.setTextContent(`${this.winnerData.wins}`);
        this.winnersTime.setTextContent(`${this.winnerData.time}`);

        this.elementCreator.addElement(this.winnersNumber.getElement());
        carContainer.addElement(this.winnersCar.getElement());
        this.elementCreator.addElement(carContainer.getElement());
        this.elementCreator.addElement(this.winnersName.getElement());
        this.elementCreator.addElement(this.winnersWins.getElement());
        this.elementCreator.addElement(this.winnersTime.getElement());
      },
      () => {},
    );
  }
}
