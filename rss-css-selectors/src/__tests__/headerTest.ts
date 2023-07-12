import { AppView } from "../app/view/appView";
import { HeaderView } from "../app/view/header/headerView";

jest.mock('../app/view/header/header.css', () => ({}));

describe('Header', () => {
  let header: HeaderView;

  beforeEach(() => {
    header = new HeaderView();
  });

  it('Header should extend AppView', () => {
    expect(header instanceof AppView).toBe(true);
  });

  it('Header should have exact properties', () => {
    const headerEl = header.getElement();
    expect(headerEl.tagName).toBe('DIV');
    expect(headerEl.className).toBe('header');
  })
});