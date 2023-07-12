import { gameData } from "../app/data/gameData";
import { getGameData } from "../app/utils/gameDataUtils";

describe('getGameData', () => {
  test('should return proper gameData', () => {
    const GameDataNumOfLevels = Object.keys(gameData.levelsData).length;
    expect(Object.keys(getGameData(gameData).levelsData)).toHaveLength(GameDataNumOfLevels);
  });
});