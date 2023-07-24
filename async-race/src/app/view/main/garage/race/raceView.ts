import { ElementCreator } from '../../../../utils/elementCreator';
import { raceProps, raceSubtitleProps, raceTitleProps } from '../../../../utils/elementsProps';
import { AppView } from '../../../appView';
import './race.css';
import { RaceTrackView } from './raceTrack/raceTrackView';

export class RaceView extends AppView {
  constructor() {
    super(raceProps);
    this.constructView();
  }

  constructView(): void {
    const raceTitle = new ElementCreator(raceTitleProps);
    const raceSubtitle = new ElementCreator(raceSubtitleProps);
    const raceTrack = new RaceTrackView();

    this.elementCreator.addElement(raceTitle.getElement());
    this.elementCreator.addElement(raceSubtitle.getElement());
    this.elementCreator.addElement(raceTrack.getElement());
  }
}
