import { GameData, Statuses } from '../../../types/types';
import { ElementCreator } from '../../../utils/elementCreator';
import { levelItemProps, levelNumberProps, levelStatusProps, levelsProps, resetButtonProps, resetbuttonContainerProps } from '../../../utils/elementsProps';
import { AppView } from '../../appView';
import './levels.css';

export class LevelsView extends AppView {
  constructor(gameData: GameData, newEventTarget: EventTarget) {
    super(levelsProps);
    this.constructView(gameData, newEventTarget);
  }

  constructView(gameData: GameData, gameListener: EventTarget): void {
    Object.entries(gameData.levelsData).forEach(([key]) => {
      const thisLevel = gameData.levelsData[key];
      const levelItem = new ElementCreator(levelItemProps);
      levelItem.getElement().classList.add(`level-item-${key}`);
      levelItem.addListeners({
          click: (event: Event): void => {
            const eventTarget = event.target as HTMLElement;
            if (eventTarget) {
              gameData.currentLevel = key;
              gameListener.dispatchEvent(new CustomEvent('levelChange'));
            }
          }
        }
      );

      if (gameData.currentLevel === key) {
        levelItem.getElement().classList.add('current-level');
      }
      
      const levelStatus = new ElementCreator(levelStatusProps);

      switch (thisLevel.status) {
        case Statuses.statusWin:
          levelStatus.getElement().classList.add('win');
          break;
        case Statuses.statusWinHelp:
          levelStatus.getElement().classList.add('win-help');
          break;
        default:
          levelStatus.getElement().classList.add('unfinished');
      }

      const levelNumber = new ElementCreator(levelNumberProps);
      levelNumber.getElement().textContent = `${key}`;

      levelItem.addElement(levelStatus.getElement());
      levelItem.addElement(levelNumber.getElement());
      this.elementCreator.addElement(levelItem.getElement());
    });

    const buttonContainer = new ElementCreator(resetbuttonContainerProps);
    const resetButton = new ElementCreator(resetButtonProps);
    resetButton.addListeners({
        click: (): void => {
          gameData.currentLevel = '1';
          Object.entries(gameData.levelsData).forEach(([, value]) => {
            value.status = Statuses.statusUnfinished;
            value.helpUsed = false;
          });
          gameListener.dispatchEvent(new CustomEvent('levelChange'));
        }
      }
    );
    buttonContainer.addElement(resetButton.getElement());

    this.elementCreator.addElement(buttonContainer.getElement());
  }
}