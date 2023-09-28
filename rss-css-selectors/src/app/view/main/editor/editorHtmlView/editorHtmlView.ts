import hljs from 'highlight.js/lib/core';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import { AppView } from '../../../appView';
import { HtmlEditorItems, HtmlEditorItem, GameData, HtmlElements } from '../../../../types/types';
import { ElementCreator } from '../../../../utils/elementCreator';
import './editorHtml.css';
import 'highlight.js/styles/kimbie-dark.css';
import 'highlight.js/styles/rainbow.css';
import { getOffSet } from '../../../../utils/getOffSet';
import { editorHtmlProps, newElProps, numberProps, numbersProps } from '../../../../utils/elementsProps';

hljs.registerLanguage('xml', xmlLanguage);

const DEFAULT_STRINGS_NUMBER = 10;

export class EditorHtmlView extends AppView {
  constructor(gameData: GameData, tableElementsArr: HtmlElements) {
    super(editorHtmlProps);
    this.constructView(gameData, tableElementsArr);
  }

  constructView(gameData: GameData, tableElementsArr: HtmlElements): void {
    const numbers = new ElementCreator(numbersProps);
    for (let i = 0; i < DEFAULT_STRINGS_NUMBER; i += 1) {
      const number = new ElementCreator(numberProps);
      number.getElement().textContent = `${i + 1}`;
      numbers.addElement(number.getElement());
    }

    this.elementCreator.addElement(numbers.getElement());

    this.createHTMLItem(this.elementCreator, gameData.levelsData[gameData.currentLevel].htmlEditorItems, tableElementsArr);
  }

  createHTMLItem(currentEl: ElementCreator, htmlEditorItems: HtmlEditorItems, tableElementsArr: HtmlElements): void {
    htmlEditorItems.forEach((item: HtmlEditorItem) => {
      const newEl = new ElementCreator(newElProps);
      newEl.addListeners({
          mouseover: (event: Event): void => {
            event.stopPropagation;
            const hoverTarget = event.target as HTMLElement;
            if (hoverTarget) {
              const htmlEditorElementsArr = [...document.querySelectorAll('.html-editor-item')];
              const tooltipEl = document.querySelector('.tooltip') as HTMLElement;              
              const HtmlEditorElement = hoverTarget.closest('div') as HTMLElement;
              const HtmlEditorItemIndex = htmlEditorElementsArr.indexOf(HtmlEditorElement);
              if (HtmlEditorItemIndex !== 0) {
                const tableElement = tableElementsArr[HtmlEditorItemIndex - 1];
                const leftCord = getOffSet(tableElement);
                tableElement.classList.add('item-hovered');
                HtmlEditorElement.classList.add('html-item-hovered');
                tooltipEl.style.setProperty('left', `${leftCord}px`);
                tooltipEl.classList.remove('hidden');
                tooltipEl.textContent = HtmlEditorElement.innerText;
              }
            }
          },
          mouseout: (event: Event): void => {
            const tooltipEl = document.querySelector('.tooltip') as HTMLElement;
            const hoverTarget = event.target as HTMLElement;
            if (hoverTarget) {
              const htmlEditorElementsArr = [...document.querySelectorAll('.html-editor-item')];
              const HtmlEditorElement = hoverTarget.closest('div') as HTMLElement;
              const HtmlEditorItemIndex = htmlEditorElementsArr.indexOf(HtmlEditorElement);
              if (HtmlEditorItemIndex !== 0) {
                const tableElement = tableElementsArr[HtmlEditorItemIndex - 1];
                tableElement.classList.remove('item-hovered');
                HtmlEditorElement.classList.remove('html-item-hovered');
              }
            }
            tooltipEl.classList.add('hidden');
            tooltipEl.textContent = '';
          }
        },
      );

      if (item.children.length > 0) {
        this.createHTMLItem(newEl, item.children, tableElementsArr);
      }

      if (item.selector) {
        newEl.getElement().insertAdjacentHTML(
          'afterbegin',
          hljs.highlight(`<${item.tag} ${item.selector}>`, {language: 'xml',}).value,
          );
      } else {
        newEl.getElement().insertAdjacentHTML(
          'afterbegin',
          hljs.highlight(`<${item.tag}>`, {language: 'xml',}).value,
          );
      }
      newEl.getElement().insertAdjacentHTML(
        'beforeend',
        hljs.highlight(`</${item.tag}>`, {language: 'xml',}).value,
      );
      currentEl.addElement(newEl.getElement());
    })
  }
}