import { MainView } from "../app/view/main/mainView";

jest.mock('../app/view/main/main.css', () => ({}));
jest.mock('../app/view/main/editor/editor.css', () => ({}));
jest.mock('highlight.js/styles/kimbie-dark.css', () => ({}));
jest.mock('highlight.js/styles/rainbow.css', () => ({}));
jest.mock('../app/view/main/editor/editorCssView/editorCss.css', () => ({}));
jest.mock('../app/view/main/editor/editorHtmlView/editorHtml.css', () => ({}));
jest.mock('../app/view/main/levels/levels.css', () => ({}));
jest.mock('../app/view/main/tableBlock/table/table.css', () => ({}));
jest.mock('../app/view/main/tableBlock/tableWrapper.css', () => ({}));

describe('Main', () => {
  const main = new MainView();
  const mainEl = main.getElement();
  it('Main should be empty after game clear', () => {
    const numOfItemsBeforeDelete = mainEl.children.length;
    main.clearGame();
    const numOfItemsAfterDelete = mainEl.children.length;
    expect(numOfItemsAfterDelete).not.toBe(numOfItemsBeforeDelete);
  })
});