export const setGameData = <T>(gameData: T): void => {
  localStorage.setItem('lev1ossa-css-selectors-gameData', JSON.stringify(gameData));
};

export const getGameData = <T>(gameData: T): T => {
  const loadedGameData = localStorage.getItem('lev1ossa-css-selectors-gameData');
  const newGameData = gameData;
  if (loadedGameData) {
    return JSON.parse(loadedGameData);
  }

  return newGameData;
};