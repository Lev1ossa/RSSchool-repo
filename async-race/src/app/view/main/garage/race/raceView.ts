import { GameData } from '../../../../types/types';
import { ElementCreator } from '../../../../utils/elementCreator';
import { raceProps, raceSubtitleProps, raceTitleProps } from '../../../../utils/elementsProps';
import { getGarageData } from '../../../../utils/requests';
import { AppView } from '../../../appView';
import './race.css';
import { RaceTrackView } from './raceTrack/raceTrackView';

export class RaceView extends AppView {
  gameData: GameData;
  gameListener: EventTarget;
  constructor(data: GameData, gameListener: EventTarget) {
    super(raceProps);
    this.gameListener = gameListener;
    this.gameData = data;
    this.constructView();
  }

  async constructView(): Promise<void> {
    getGarageData(this.gameData.currentPage).then(
      (result) => {
        if (result) {
          this.gameData.carsOnPage.length = 0;
          const { cars, carsNumber } = result;
          const raceTitle = new ElementCreator(raceTitleProps);
          raceTitle.setTextContent(`Garage(${carsNumber})`);
          const raceSubtitle = new ElementCreator(raceSubtitleProps);
          raceSubtitle.setTextContent(`Page #(${this.gameData.currentPage})`);
          this.elementCreator.addElement(raceTitle.getElement());
          this.elementCreator.addElement(raceSubtitle.getElement());
          cars.forEach((carData) => {
            const raceTrack = new RaceTrackView(carData, this.gameListener, this.gameData);
            this.gameData.carsOnPage.push(raceTrack);
            this.elementCreator.addElement(raceTrack.getElement());
          });
        }
      },
      () => {},
    );
  }
}
