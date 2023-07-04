import { ElementCreatorProps, GameData, Statuses } from '../../../types/types';
import { ElementCreator } from '../../../utils/elementCreator';
import { AppView } from '../../appView';
import './levels.css';

export class LevelsView extends AppView {
  constructor(gameData: GameData, newEventTarget: EventTarget) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['levels'],
      textContent: 'Levels',
      listeners: null,
    };
    super(props);
    this.constructView(gameData, newEventTarget);
  }

  constructView(gameData: GameData, gameListener: EventTarget): void {
    Object.entries(gameData.levelsData).forEach(([key, value]) => {
      const thisLevel = gameData.levelsData[key];
      const levelItemProps: ElementCreatorProps = {
        tag: 'div',
        classes: [`level-item-${key}`, 'level-item'],
        textContent: '',
        listeners: {
          click: (event: Event): void => {
            const eventTarget = event.target as HTMLElement;
            if (eventTarget) {
              // if (!(eventTarget.classList.contains(`level-item-${key}`))) {

                  gameData.currentLevel = key;
                  gameListener.dispatchEvent(new CustomEvent('levelChange'));
              // }
            }
          }
        }
      };
      const levelItem = new ElementCreator(levelItemProps);

      if (gameData.currentLevel === key) {
        levelItem.getElement().classList.add('current-level');
      }
      
      const levelStatusProps: ElementCreatorProps = {
        tag: 'span',
        classes: [`level-status`],
        textContent: '∨',
        listeners: null,
      }
      const levelStatus = new ElementCreator(levelStatusProps);

      if (thisLevel.status === Statuses.statusWin) {
        levelStatus.getElement().classList.add('win');
      } else if (thisLevel.status === Statuses.statusWinHelp) {
        levelStatus.getElement().classList.add('win-help');
      } else {
        levelStatus.getElement().classList.add('unfinished');
      }

      const levelNumberProps: ElementCreatorProps = {
        tag: 'span',
        classes: [`level-number`],
        textContent: `${key}`,
        listeners: null,
      } 
      const levelNumber = new ElementCreator(levelNumberProps);

      levelItem.addElement(levelStatus.getElement());
      levelItem.addElement(levelNumber.getElement());
      this.elementCreator.addElement(levelItem.getElement());
    });

    const buttonContainerProps = {
      tag: 'button',
      classes: ['reset-button-container'],
      textContent: '',
      listeners: null,
    }

    const resetButtonProps = {
      tag: 'button',
      classes: ['game-reset-button'],
      textContent: 'Reset',
      listeners: {
        click: (): void => {
          gameData.currentLevel = '1';
          Object.entries(gameData.levelsData).forEach(([key, value]) => {
            value.status = Statuses.statusUnfinished;
          });
          gameListener.dispatchEvent(new CustomEvent('levelChange'));
        }
      },
    }
    
    const buttonContainer = new ElementCreator(buttonContainerProps);
    const resetButton = new ElementCreator(resetButtonProps);
    buttonContainer.addElement(resetButton.getElement());

    this.elementCreator.addElement(buttonContainer.getElement());
  }
}