import { GameData } from '../../../../types/types';
import { ElementCreator } from '../../../../utils/elementCreator';
import { raceProps, raceSubtitleProps, raceTitleProps } from '../../../../utils/elementsProps';
import { getGarageData } from '../../../../utils/requests';
import { AppView } from '../../../appView';
import './race.css';
import { RaceTrackView } from './raceTrack/raceTrackView';

export class RaceView extends AppView {
  gameData: GameData;
  constructor(data: GameData) {
    super(raceProps);
    this.gameData = data;
    this.constructView();
  }

  async constructView(): Promise<void> {
    const { cars, carsNumber } = await getGarageData(this.gameData.currentPage);
    const raceTitle = new ElementCreator(raceTitleProps);
    raceTitle.setTextContent(`Garage(${carsNumber})`);
    const raceSubtitle = new ElementCreator(raceSubtitleProps);
    raceSubtitle.setTextContent(`Page #(${this.gameData.currentPage})`);
    this.elementCreator.addElement(raceTitle.getElement());
    this.elementCreator.addElement(raceSubtitle.getElement());
    // this.elementCreator.addElement(raceTrack.getElement());
    cars.forEach((carData) => {
      const raceTrack = new RaceTrackView(carData);
      this.elementCreator.addElement(raceTrack.getElement());
    });
    // const raceTrack = new RaceTrackView();
  }
}
