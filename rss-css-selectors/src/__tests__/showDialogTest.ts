import { showDialog } from "../app/utils/showDialog";

describe('showDialog', () => {
  test('should return nothing', () => {
    expect(showDialog('test')).toBeUndefined();
  });
});