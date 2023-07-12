import { getOffSet } from "../app/utils/getOffSet";

describe('getOffSet', () => {
  test('Offset should return number', () => {
    expect(typeof(getOffSet(null))).toBe('number');
  })
})