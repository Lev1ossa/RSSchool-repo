import { setGameData } from "../app/utils/gameDataUtils";

let dataContainer: string | null;
beforeAll(() => {
  //container to save current game data from storage
  dataContainer = localStorage.getItem('lev1ossa-css-selectors-gameData');
});

describe('setGameData', () => {
  test('should set any value in gameData storage', () => {
    
    
    const testData = 'testData';
    setGameData(testData);
    expect(localStorage.getItem('lev1ossa-css-selectors-gameData')).toEqual(JSON.stringify(testData));
    
    
  });
});

afterAll(() => {
  //if data container not empty return real game data in local storage
  if (dataContainer) {
    localStorage.setItem('lev1ossa-css-selectors-gameData', dataContainer);
  }
});