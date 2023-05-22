import './style.css';
import mineImage from './assets/icons/mine.svg';

const body = document.querySelector('body');
const defaultDifficulty = 'easy';
const defaultMines = 10;

let clickedCell;

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
    const randomInt = Math.floor(Math.random() * (gameData.size * gameData.size));
    if (!gameData.mineCells.includes(randomInt) && !gameData.openedCells.includes(randomInt)) {
      gameData.mineCells.push(randomInt);
    }
  }

  gameData.mineCells.forEach((item) => {
    gameData.fieldMap[item].isMine = true;
  });
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

const gameStart = (cellID) => {
  const fieldCellObj = gameData.fieldMap[cellID];
  gameData.openedCells.push(fieldCellObj.id);
  fieldCellObj.state = 'opened';
  addRandomMines();
  countMines();
  gameData.firstMove = false;
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
      // TODO show lose message
    });
  } else if (gameResult === 'win') {
    // TODO show lose message
  }

  gameData.gamefinished = true;
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
    if (allCellsAreOpen()) {
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
      } else if (event.which === 3) {
        console.log('rightMouseUp');
      }
    }
    clickedCell = undefined;
  }
};

const createNewField = () => {
  const field = document.querySelector('.field');

  field.innerHTML = '';

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
          <p class="stats-text">Moves:</p>
          <p class="stats-text">Time:</p>
        </div>
        <div class="stats-block stats-newgame">
          <p class="stats-text">New</p>
          <div class="stats-smile"></div>
          <p class="stats-text">game</p>
        </div>
        <div class="stats-block">
          <p class="stats-text">Mines:</p>
          <p class="stats-text">Flags:</p>
        </div>
      </div>
      <div class="field">
      </div>
      <div class="settings"></div>
    </div>
  </main>`;

  body.appendChild(app);
  createNewField();
};

createApp();

window.addEventListener('mouseup', (event) => {
  cellMouseupHandler(event);
});
