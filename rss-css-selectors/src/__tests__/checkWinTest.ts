import { сheckGameWin } from "../app/utils/checkGameWin";
import { ElementCreator } from "../app/utils/elementCreator"
import { inputProps } from "../app/utils/elementsProps"

describe('checkWin', () => {
  const newInput = new ElementCreator(inputProps);
  const fakeWinSelectors = new Array(3).fill(newInput.getElement());
  test('should return false in case empty input', () => {
    expect(сheckGameWin(newInput, fakeWinSelectors)).toBeFalsy();
  })
});