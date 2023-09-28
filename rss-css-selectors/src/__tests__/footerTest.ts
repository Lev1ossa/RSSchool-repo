import { AppView } from "../app/view/appView";
import { FooterView } from "../app/view/footer/footerView";

jest.mock('../app/view/footer/footer.css', () => ({}));

describe('Footer', () => {
  let footer: FooterView;

  beforeEach(() => {
    footer = new FooterView();
  });
  
  it('Footer should extend AppView', () => {
    expect(footer instanceof AppView).toBe(true);
  });

  it('Footer should have exact properties', () => {
    const footerEl = footer.getElement();
    expect(footerEl.tagName).toBe('DIV');
    expect(footerEl.className).toBe('footer');
  })
});