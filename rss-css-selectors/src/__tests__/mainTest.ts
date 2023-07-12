import { AppView } from "../app/view/appView";
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
  let main: MainView;

  beforeEach(() => {
    main = new MainView();
  });

  it('Main should extend AppView', () => {
    expect(main instanceof AppView).toBe(true);
  });

  it('Main should have exact properties', () => {
    const mainEl = main.getElement();
    expect(mainEl.tagName).toBe('DIV');
    expect(mainEl.className).toBe('main');
  })
});