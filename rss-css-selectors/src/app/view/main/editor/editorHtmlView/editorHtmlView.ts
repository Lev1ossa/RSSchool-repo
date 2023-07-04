import hljs from 'highlight.js/lib/core';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import { AppView } from '../../../appView';
import { ElementCreatorProps, HtmlEditorItems, HtmlEditorItem, LevelData } from '../../../../types/types';
import { ElementCreator } from '../../../../utils/elementCreator';
import './editorHtml.css';
import 'highlight.js/styles/kimbie-dark.css';
import 'highlight.js/styles/rainbow.css';

hljs.registerLanguage('xml', xmlLanguage);

const DEFAULT_STRINGS_NUMBER = 10;

export class EditorHtmlView extends AppView {
  constructor(levelData: LevelData) {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['editor-html'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView(levelData);
  }

  constructView(levelData: LevelData): void {
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

    this.createHTMLItem(this.elementCreator, levelData.htmlEditorItems);
  }

  createHTMLItem(currentEl: ElementCreator, htmlEditorItems: HtmlEditorItems): void {
    htmlEditorItems.forEach((item: HtmlEditorItem) => {
      const newElProps: ElementCreatorProps = {
        tag: 'div',
        classes: ['html-editor-item'],
        textContent: '',
        listeners: null,
      }
      const newEl = new ElementCreator(newElProps);

      if (item.children.length > 0) {
        this.createHTMLItem(newEl, item.children);
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