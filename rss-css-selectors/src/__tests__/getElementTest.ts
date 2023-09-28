import { ElementCreatorProps } from "../app/types/types";
import { ElementCreator } from "../app/utils/elementCreator";

describe('getElement', () => {
  const newElementProps: ElementCreatorProps = {
    tag: 'testTag',
    classes: [],
    textContent: '',
    listeners: null,
  }
  const newElement = new ElementCreator(newElementProps);

  test('should return element with custom tag', () => {
    expect(newElement.getElement().tagName).toBe('TESTTAG');
  });
})