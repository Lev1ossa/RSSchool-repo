import hljs from 'highlight.js/lib/core';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import { AppView } from '../../../appView';
import { ElementCreatorProps, HtmlEditorItems, HtmlEditorItem, LevelData, GameData, HtmlElements } from '../../../../types/types';
import { ElementCreator } from '../../../../utils/elementCreator';
import './editorHtml.css';
import 'highlight.js/styles/kimbie-dark.css';
import 'highlight.js/styles/rainbow.css';
import { getOffSet } from '../../../../utils/getOffSet';

hljs.registerLanguage('xml', xmlLanguage);

const DEFAULT_STRINGS_NUMBER = 10;

export class EditorHtmlView extends AppView {
  constructor(gameData: GameData, tableElementsArr: HtmlElements) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor-html'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView(gameData, tableElementsArr);
  }

  constructView(gameData: GameData, tableElementsArr: HtmlElements): void {
    const numbersProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['numbers'],
      textContent: '',
      listeners: null,
    }

    const numbers = new ElementCreator(numbersProps);

    for (let i = 0; i < DEFAULT_STRINGS_NUMBER; i += 1) {
      const numberProps: ElementCreatorProps = {
        tag: 'div',
        classes: ['number'],
        textContent: `${i + 1}`,
        listeners: null,
      }
      const number = new ElementCreator(numberProps);
      numbers.addElement(number.getElement());
    }

    this.elementCreator.addElement(numbers.getElement());

    this.createHTMLItem(this.elementCreator, gameData.levelsData[gameData.currentLevel].htmlEditorItems, tableElementsArr);
  }

  createHTMLItem(currentEl: ElementCreator, htmlEditorItems: HtmlEditorItems, tableElementsArr: HtmlElements): void {
    htmlEditorItems.forEach((item: HtmlEditorItem, idx) => {
      const newElProps: ElementCreatorProps = {
        tag: 'div',
        classes: ['html-editor-item'],
        textContent: '',
        listeners: {
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
              // const tableItemIndex = tableElementsArr.indexOf(hoverTarget);
              // const htmlEditorElement = htmlEditorElementsArr[tableItemIndex + 1];
              // htmlEditorElement.classList.remove('html-item-hovered');
              // hoverTarget.classList.remove('item-hovered');
            }
            tooltipEl.classList.add('hidden');
            tooltipEl.textContent = '';
          }
        },
      }
      const newEl = new ElementCreator(newElProps);

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