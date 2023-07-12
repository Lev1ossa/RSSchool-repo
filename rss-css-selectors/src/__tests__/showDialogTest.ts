import { showDialog } from "../app/utils/showDialog";

describe('getGameData', () => {
  test('should return nothing', () => {
    expect(showDialog('test')).toBeUndefined();
  });
});