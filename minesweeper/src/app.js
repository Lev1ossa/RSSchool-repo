import './style.css';
import mineImage from './assets/icons/mine.svg';
import winSoundsrc from './assets/sounds/win.mp3';
import pushSoundsrc from './assets/sounds/push.mp3';
import loseSoundsrc from './assets/sounds/lose.mp3';
import flaggedSoundsrc from './assets/sounds/flagged.mp3';

const body = document.querySelector('body');
const defaultDifficulty = 'easy';
const defaultMines = 10;

let clickedCell;

let gameTimer;

let gameLoaded = false;

// Todo: implement difficulty lvl and game load
// let currentSize = 10;
// let currentMines = 10;
// let currentDifficulty = 'easy';
// let firstMove = true;

const gameData = {
  difficulty: 'easy',
  size: 10,
  mines: 10,
  firstMove: true,
  mineCells: [],
  openedCells: [],
  flagedCells: [],
  fieldMap: {},
  gamefinished: false,
  gameTime: 0,
  moves: 0,
  minesCounter: 10,
};

class FieldCell {
  constructor(row, column, id) {
    this.mineAround = 0;
    this.isMine = false;
    this.state = 'unopened';
    this.row = row;
    this.column = column;
    this.id = id;
  }
}

const playSound = (sound) => {
  if (sound === 'win') {
    const winSound = new Audio(winSoundsrc);
    winSound.volume = 0.5;
    winSound.play();
  } else if (sound === 'push') {
    const pushSound = new Audio(pushSoundsrc);
    pushSound.volume = 0.5;
    pushSound.play();
  } else if (sound === 'lose') {
    const loseSound = new Audio(loseSoundsrc);
    loseSound.volume = 0.5;
    loseSound.play();
  } else if (sound === 'flagged') {
    const flaggedSound = new Audio(flaggedSoundsrc);
    flaggedSound.volume = 0.5;
    flaggedSound.play();
  }
};

const startTimer = () => {
  const writeTime = () => {
    if (!gameData.gamefinished) {
      const time = gameData.gameTime;
      const timerEl = document.querySelector('.stats-timer');
      gameData.gameTime = time + 1;
      timerEl.innerHTML = time + 1;
    }
  };
  gameTimer = setInterval(writeTime, 1000);
};

const getNeighboursIdArr = (cell, cellID) => {
  const neighboursIdArr = [];

  if (cell.row === 1 && cell.column === 1) {
    neighboursIdArr.push(
      cellID + 1,
      cellID + gameData.size + 1,
      cellID + gameData.size,
    );
  } else if (cell.row === 1 && cell.column === gameData.size) {
    neighboursIdArr.push(
      cellID + gameData.size,
      cellID + gameData.size - 1,
      cellID - 1,
    );
  } else if (cell.row === gameData.size && cell.column === 1) {
    neighboursIdArr.push(
      cellID - gameData.size,
      cellID - gameData.size + 1,
      cellID + 1,
    );
  } else if (cell.row === gameData.size && cell.column === gameData.size) {
    neighboursIdArr.push(
      cellID - gameData.size - 1,
      cellID - gameData.size,
      cellID - 1,
    );
  } else if (cell.column === 1) {
    neighboursIdArr.push(
      cellID - gameData.size,
      cellID - gameData.size + 1,
      cellID + 1,
      cellID + gameData.size + 1,
      cellID + gameData.size,
    );
  } else if (cell.column === gameData.size) {
    neighboursIdArr.push(
      cellID - gameData.size - 1,
      cellID - gameData.size,
      cellID + gameData.size,
      cellID + gameData.size - 1,
      cellID - 1,
    );
  } else if (cell.row === 1) {
    neighboursIdArr.push(
      cellID + 1,
      cellID + gameData.size + 1,
      cellID + gameData.size,
      cellID + gameData.size - 1,
      cellID - 1,
    );
  } else if (cell.row === gameData.size) {
    neighboursIdArr.push(
      cellID - gameData.size - 1,
      cellID - gameData.size,
      cellID - gameData.size + 1,
      cellID + 1,
      cellID - 1,
    );
  } else {
    neighboursIdArr.push(
      cellID - gameData.size - 1,
      cellID - gameData.size,
      cellID - gameData.size + 1,
      cellID + 1,
      cellID + gameData.size + 1,
      cellID + gameData.size,
      cellID + gameData.size - 1,
      cellID - 1,
    );
  }

  return neighboursIdArr;
};

const countMines = () => {
  gameData.mineCells.forEach((item) => {
    const mine = gameData.fieldMap[item];
    const neighboursIdArr = getNeighboursIdArr(mine, item);
    neighboursIdArr.forEach((neighbourId) => {
      gameData.fieldMap[neighbourId].mineAround += 1;
    });
  });
};

const addRandomMines = () => {
  while (gameData.mineCells.length < gameData.mines) {
    const randomInt = Math.floor(Math.random() * (gameData.size * gameData.size)) + 1;
    if (randomInt !== 0 && !gameData.mineCells.includes(randomInt)
    && !gameData.openedCells.includes(randomInt)) {
      gameData.mineCells.push(randomInt);
    }
  }

  gameData.mineCells.forEach((item) => {
    gameData.fieldMap[item].isMine = true;
  });

  console.log(gameData.mineCells);
};

const allCellsAreOpen = () => {
  let result;
  if (gameData.openedCells.length < gameData.size * gameData.size - gameData.mines) {
    result = false;
  } else {
    result = true;
  }

  return result;
};

const setCounters = () => {
  const movesEl = document.querySelector('.stats-moves');
  const timerEl = document.querySelector('.stats-timer');
  const minesEl = document.querySelector('.stats-mines');
  const flagsEl = document.querySelector('.stats-flags');

  timerEl.innerHTML = gameData.gameTime;
  movesEl.innerHTML = gameData.moves;
  minesEl.innerHTML = gameData.minesCounter;
  flagsEl.innerHTML = gameData.flagedCells.length;
};

const changeMovesCounter = () => {
  const movesEl = document.querySelector('.stats-moves');
  movesEl.innerHTML = +movesEl.innerHTML + 1;
  gameData.moves = movesEl.innerHTML;
};

const addFlag = (cellID) => {
  const minesEl = document.querySelector('.stats-mines');
  const flagsEl = document.querySelector('.stats-flags');
  const fieldCellObj = gameData.fieldMap[cellID];
  const fieldCellEl = document.getElementById(cellID);

  gameData.flagedCells.push(cellID);
  fieldCellObj.state = 'flagged';
  fieldCellEl.classList.add('field-cell-flagged');
  minesEl.innerHTML = +minesEl.innerHTML - 1;
  flagsEl.innerHTML = +flagsEl.innerHTML + 1;

  gameData.minesCounter = minesEl.innerHTML;

  playSound('flagged');
};

const removeFlag = (cellID) => {
  const minesEl = document.querySelector('.stats-mines');
  const flagsEl = document.querySelector('.stats-flags');
  const fieldCellObj = gameData.fieldMap[cellID];
  const fieldCellEl = document.getElementById(cellID);

  const cellIdx = gameData.flagedCells.indexOf(cellID);
  if (cellIdx !== -1) {
    gameData.flagedCells.splice(cellIdx, 1);
  }
  fieldCellObj.state = 'unopened';
  fieldCellEl.classList.remove('field-cell-flagged');
  minesEl.innerHTML = +minesEl.innerHTML + 1;
  flagsEl.innerHTML = +flagsEl.innerHTML - 1;
  playSound('flagged');
};

const gameStart = (cellID) => {
  const fieldCellObj = gameData.fieldMap[cellID];
  gameData.openedCells.push(fieldCellObj.id);
  fieldCellObj.state = 'opened';
  addRandomMines();
  countMines();
  gameData.firstMove = false;
  startTimer();
};

const gameEnd = (gameResult, cellID) => {
  if (gameResult === 'lose') {
    gameData.mineCells.forEach((item) => {
      const fieldCellEl = document.getElementById(item);
      if (item === cellID) {
        fieldCellEl.classList.add('field-cell-opened', 'field-cell-mine');
      } else {
        fieldCellEl.classList.add('field-cell-opened');
      }
      const mineImg = document.createElement('img');
      mineImg.classList.add('field-img-mine');
      mineImg.setAttribute('src', mineImage);
      mineImg.alt = 'mine image';
      fieldCellEl.appendChild(mineImg);
    });
    // TODO show lose message
    alert(`you lose`);
    playSound('lose');
  } else if (gameResult === 'win') {
    console.log('hey');
    // TODO show lose message
    alert(`Hooray! You found all mines in ${gameData.gameTime} seconds and ${gameData.moves} moves!`);
    playSound('win');
  }

  gameData.gamefinished = true;
  clearInterval(gameTimer);
};

const getColor = (numberOfMines) => {
  let color;
  if (numberOfMines === 1) {
    color = 'blue';
  } else if (numberOfMines === 2) {
    color = 'green';
  } else if (numberOfMines === 3) {
    color = 'red';
  } else if (numberOfMines === 4) {
    color = 'darkblue';
  } else if (numberOfMines === 5) {
    color = 'brown';
  } else if (numberOfMines === 6) {
    color = 'aqua';
  } else if (numberOfMines === 7) {
    color = 'gray';
  } else if (numberOfMines === 8) {
    color = 'darkgray';
  }

  return color;
};

const cellOpen = (cellID) => {
  const fieldCellObj = gameData.fieldMap[cellID];
  const fieldCellEl = document.getElementById(fieldCellObj.id);
  if (gameData.firstMove) {
    gameStart(fieldCellObj.id);
  }
  if (fieldCellObj.isMine) {
    gameEnd('lose', cellID);
  } else {
    if (fieldCellObj.state !== 'opened') {
      gameData.openedCells.push(fieldCellObj.id);
      fieldCellObj.state = 'opened';
    }
    fieldCellEl.classList.add('field-cell-opened');
    if (fieldCellObj.mineAround !== 0) {
      fieldCellEl.innerHTML = fieldCellObj.mineAround;
      fieldCellEl.classList.add(`color-${getColor(fieldCellObj.mineAround)}`);
    }
    if (allCellsAreOpen() && !gameData.gamefinished) {
      gameEnd('win', cellID);
    }
  }
};

const openNeighboursCells = (currentCellID) => {
  const neighboursArr = getNeighboursIdArr(gameData.fieldMap[currentCellID], currentCellID);
  neighboursArr.forEach((item) => {
    const thisCell = gameData.fieldMap[item];
    if (!thisCell.isMine && thisCell.state !== 'opened' && thisCell.state !== 'flagged') {
      cellOpen(item);
      if (thisCell.mineAround === 0) {
        openNeighboursCells(item);
      }
    }
  });
};

const cellMousedownHandler = (event, fieldCellEl) => {
  const fieldCellObj = gameData.fieldMap[fieldCellEl.id];
  // console.log(fieldCellObj.state !== 'opened');
  if (!gameData.gamefinished && fieldCellObj.state !== 'opened') {
    clickedCell = fieldCellEl;
    if (event.which === 1 && fieldCellObj.state !== 'flagged') {
      console.log('leftMouseDown');
      fieldCellEl.classList.add('field-cell-active');
    } else if (event.which === 3) {
      console.log('rightMouseDown');
    }
  }
};

const cellMouseupHandler = (event) => {
  if (clickedCell) {
    const fieldCellObj = gameData.fieldMap[clickedCell.id];
    if (!gameData.gamefinished && fieldCellObj.state !== 'opened') {
      // console.log(fieldCellObj);
      if (event.which === 1 && fieldCellObj.state !== 'flagged') {
        console.log('leftMouseUp');
        clickedCell.classList.remove('field-cell-active');
        cellOpen(fieldCellObj.id);
        openNeighboursCells(fieldCellObj.id);
        changeMovesCounter();
        playSound('push');
      } else if (event.which === 3) {
        console.log('rightMouseUp');
        if (fieldCellObj.state === 'unopened' && !gameData.firstMove) {
          addFlag(fieldCellObj.id);
        } else if (fieldCellObj.state === 'flagged') {
          removeFlag(fieldCellObj.id);
        }
      }
    }
    clickedCell = undefined;
  }
};

const createNewField = () => {
  const field = document.querySelector('.field');

  field.innerHTML = '';
  field.classList.remove('field-easy');
  field.classList.remove('field-medium');
  field.classList.remove('field-hard');
  field.classList.add(`field-${gameData.difficulty}`);

  for (let i = 0; i < gameData.size; i += 1) {
    const fieldRow = document.createElement('div');
    fieldRow.classList.add('field-row', `field-row-${i + 1}`);
    field.appendChild(fieldRow);
    for (let j = 0; j < gameData.size; j += 1) {
      const fieldCellEl = document.createElement('div');
      const elID = i * gameData.size + j + 1;
      fieldCellEl.classList.add('field-cell', `field-column-${j + 1}`);
      fieldCellEl.setAttribute('id', `${elID}`);
      fieldRow.appendChild(fieldCellEl);

      fieldCellEl.addEventListener('mousedown', (event) => {
        cellMousedownHandler(event, fieldCellEl);
      });

      fieldCellEl.addEventListener('contextmenu', (event) => {
        event.preventDefault();
      });

      gameData.fieldMap[elID] = new FieldCell(i + 1, j + 1, elID);
    }
  }

  gameData.firstMove = true;
};

const createApp = () => {
  const app = document.createElement('div');
  app.classList.add('app');
  app.innerHTML = `<header class="header">
    <div class="header-wrapper">
      <h1 class="title">Minesweeper</h1>
    </div>
  </header>
  <main class="main">
    <div class="main-wrapper">
      <div class="stats">
        <div class="stats-block">
          <p class="stats-text">Moves: <span class="stats-moves"></span></p>
          <p class="stats-text">Time: <span class="stats-timer"></span></p>
        </div>
        <div class="stats-block stats-newgame">
          <div class="stats-smile"></div>
        </div>
        <div class="stats-block">
          <p class="stats-text">Mines: <span class="stats-mines"></span></p>
          <p class="stats-text">Flags: <span class="stats-flags"></span></p>
        </div>
      </div>
      <div class="field">
      </div>
      <div class="settings">
        <fieldset class="settings-fieldset">
          <legend class="settings-legend">Select a difficulty level:</legend>
          <div class="settings-input">
            <input type="radio" id="easy" name="difficulty" value="easy" checked>
            <label for="easy">Easy</label>
          </div>
          <div class="settings-input">
            <input type="radio" id="medium" name="difficulty" value="medium">
            <label for="medium">Medium</label>
          </div>
          <div class="settings-input">
            <input type="radio" id="hard" name="difficulty" value="hard">
            <label for="hard">Hard</label>
          </div>
          <div class="settings-input">
            <input type="number" id="mines" name="mines" min="10" max="99" value="10">
            <label for="mines">Number of mines (10-99):</label>
          </div>
        </fieldset>
        <div class="buttons-block">
          <div class="button new-game">New game</div>
          <div class="button save-game">Save</div>
          <div class="button load-game">Load</div>
          <div class="button color-theme">Change theme</div>
          <div class="button leaderboard">Leaderboard</div>
        </div>
      </div>
    </div>
  </main>`;

  body.appendChild(app);
  createNewField();
  setCounters();
  // if (gameLoaded) {
  //   startTimer();
  // }
  const minesInput = document.getElementById('mines');
  minesInput.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value < 10) {
      e.target.value = 10;
    } else if (e.target.value > 99) {
      e.target.value = 99;
    }
  });
};

const startNewGame = () => {
  const difficultySettings = document.querySelector('input[name="difficulty"]:checked').value;
  const numberOfMines = document.querySelector('input[name="mines"]').value;

  gameData.difficulty = difficultySettings;
  if (difficultySettings === 'easy') {
    gameData.size = 10;
  } else if (difficultySettings === 'medium') {
    gameData.size = 15;
  } else if (difficultySettings === 'hard') {
    gameData.size = 25;
  }
  gameData.mines = numberOfMines;
  gameData.firstMove = true;
  gameData.mineCells = [];
  gameData.openedCells = [];
  gameData.flagedCells = [];
  gameData.fieldMap = {};
  gameData.gamefinished = false;
  gameData.gameTime = 0;
  gameData.moves = 0;
  gameData.minesCounter = numberOfMines;

  setCounters();
  createNewField();
  clearInterval(gameTimer);
};

const saveGame = () => {
  if (!gameData.gamefinished) {
    localStorage.setItem('lev1ossa-save-gameData', JSON.stringify(gameData));
  }
};

const loadGame = () => {
  clearInterval(gameTimer);
  const loadGameData = JSON.parse(localStorage.getItem('lev1ossa-save-gameData'));
  gameData.difficulty = loadGameData.difficulty;
  gameData.size = loadGameData.size;
  gameData.mines = loadGameData.mines;
  gameData.mineCells = loadGameData.mineCells;
  gameData.openedCells = loadGameData.openedCells;
  gameData.flagedCells = loadGameData.flagedCells;
  gameData.gamefinished = loadGameData.gamefinished;
  gameData.gameTime = loadGameData.gameTime;
  gameData.moves = loadGameData.moves;
  gameData.minesCounter = loadGameData.minesCounter;

  createNewField();

  gameData.firstMove = loadGameData.firstMove;
  gameData.fieldMap = loadGameData.fieldMap;

  if (!gameData.firstMove) {
    startTimer();
    gameData.openedCells.forEach((item) => {
      const cellObj = gameData.fieldMap[item];
      const cellEl = document.getElementById(item);
      cellEl.classList.add('field-cell-opened');
      if (cellObj.mineAround !== 0) {
        cellEl.innerHTML = cellObj.mineAround;
        cellEl.classList.add(`color-${getColor(cellObj.mineAround)}`);
      }
    });
    gameData.flagedCells.forEach((item) => {
      const cellEl = document.getElementById(item);
      cellEl.classList.add('field-cell-flagged');
    });
  }

  setCounters();
};

createApp();

const newGameButton = document.querySelector('.new-game');
const newGameSmile = document.querySelector('.stats-smile');
const saveGameButton = document.querySelector('.save-game');
const loadGameButton = document.querySelector('.load-game');

newGameButton.addEventListener('click', () => {
  startNewGame();
});

newGameSmile.addEventListener('click', () => {
  startNewGame();
});

saveGameButton.addEventListener('click', () => {
  saveGame();
});

loadGameButton.addEventListener('click', () => {
  loadGame();
});

window.addEventListener('mouseup', (event) => {
  cellMouseupHandler(event);
});
