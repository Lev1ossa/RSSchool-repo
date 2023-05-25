/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/icons/mine.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/mine.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ae675f5c9fd1b10b9b5.svg";

/***/ }),

/***/ "./src/assets/sounds/flagged.mp3":
/*!***************************************!*\
  !*** ./src/assets/sounds/flagged.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96966333aa989c794362.mp3";

/***/ }),

/***/ "./src/assets/sounds/lose.mp3":
/*!************************************!*\
  !*** ./src/assets/sounds/lose.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8814f5bfb6a1c2a0da1c.mp3";

/***/ }),

/***/ "./src/assets/sounds/push.mp3":
/*!************************************!*\
  !*** ./src/assets/sounds/push.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0298dbd6e9c3c212907.mp3";

/***/ }),

/***/ "./src/assets/sounds/win.mp3":
/*!***********************************!*\
  !*** ./src/assets/sounds/win.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ceeba6a4a8b58fc003c5.mp3";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_icons_mine_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/mine.svg */ "./src/assets/icons/mine.svg");
/* harmony import */ var _assets_sounds_win_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sounds/win.mp3 */ "./src/assets/sounds/win.mp3");
/* harmony import */ var _assets_sounds_push_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sounds/push.mp3 */ "./src/assets/sounds/push.mp3");
/* harmony import */ var _assets_sounds_lose_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sounds/lose.mp3 */ "./src/assets/sounds/lose.mp3");
/* harmony import */ var _assets_sounds_flagged_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sounds/flagged.mp3 */ "./src/assets/sounds/flagged.mp3");







const body = document.querySelector('body');

let clickedCell;
let gameTimer;

let leaderBoardArr;

if (localStorage.getItem('lev1ossa-save-leaderBoard')) {
  leaderBoardArr = JSON.parse(localStorage.getItem('lev1ossa-save-leaderBoard'));
} else {
  leaderBoardArr = [];
}

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
  soundOn: true,
  darkTheme: false,
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
  if (gameData.soundOn) {
    if (sound === 'win') {
      const winSound = new Audio(_assets_sounds_win_mp3__WEBPACK_IMPORTED_MODULE_2__);
      winSound.volume = 0.5;
      winSound.play();
    } else if (sound === 'push') {
      const pushSound = new Audio(_assets_sounds_push_mp3__WEBPACK_IMPORTED_MODULE_3__);
      pushSound.volume = 0.5;
      pushSound.play();
    } else if (sound === 'lose') {
      const loseSound = new Audio(_assets_sounds_lose_mp3__WEBPACK_IMPORTED_MODULE_4__);
      loseSound.volume = 0.5;
      loseSound.play();
    } else if (sound === 'flagged') {
      const flaggedSound = new Audio(_assets_sounds_flagged_mp3__WEBPACK_IMPORTED_MODULE_5__);
      flaggedSound.volume = 0.5;
      flaggedSound.play();
    }
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
  const timerEl = document.querySelector('.stats-timer');
  timerEl.innerHTML = 1;
  gameData.gameTime = 1;
  startTimer();
};

const showDialog = (DialogContent) => {
  const cancelButton = document.getElementById('close');
  const favDialog = document.getElementById('favDialog');
  const dialogBlock = document.getElementById('dialog-block');

  dialogBlock.innerHTML = '';

  if (Array.isArray(DialogContent)) {
    if (DialogContent.length > 0) {
      DialogContent.forEach((item) => {
        const favDialogText = document.createElement('p');
        favDialogText.innerHTML = `diff: ${item.diff}, mines: ${item.mines}, moves: ${item.moves}, time: ${item.time}`;
        dialogBlock.appendChild(favDialogText);
      });
    } else {
      const favDialogText = document.createElement('p');
      favDialogText.innerHTML = 'No scores yet!';
      dialogBlock.appendChild(favDialogText);
    }
  } else {
    const favDialogText = document.createElement('p');
    favDialogText.innerHTML = DialogContent;
    dialogBlock.appendChild(favDialogText);
  }

  favDialog.showModal();

  cancelButton.addEventListener('click', () => {
    favDialog.close();
  });
};

const addResultToLeaderBoard = (result) => {
  if (leaderBoardArr.length < 10) {
    leaderBoardArr.push(result);
  } else {
    leaderBoardArr.splice(0, 1);
    leaderBoardArr.push(result);
  }
  localStorage.setItem('lev1ossa-save-leaderBoard', JSON.stringify(leaderBoardArr));
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
      mineImg.setAttribute('src', _assets_icons_mine_svg__WEBPACK_IMPORTED_MODULE_1__);
      mineImg.alt = 'mine image';
      fieldCellEl.appendChild(mineImg);
    });
    showDialog('Game over. Try again');
    playSound('lose');
  } else if (gameResult === 'win') {
    showDialog(`Hooray! You found all mines in ${gameData.gameTime} seconds and ${gameData.moves} moves!`);
    playSound('win');
    addResultToLeaderBoard({
      diff: gameData.difficulty,
      mines: gameData.mines,
      moves: gameData.moves,
      time: gameData.gameTime,
    });
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
  if (!gameData.gamefinished && fieldCellObj.state !== 'opened') {
    clickedCell = fieldCellEl;
    if (event.which === 1 && fieldCellObj.state !== 'flagged') {
      fieldCellEl.classList.add('field-cell-active');
    }
  }
};

const cellMouseupHandler = (event) => {
  if (clickedCell) {
    const fieldCellObj = gameData.fieldMap[clickedCell.id];
    if (!gameData.gamefinished && fieldCellObj.state !== 'opened') {
      if (event.which === 1 && fieldCellObj.state !== 'flagged') {
        clickedCell.classList.remove('field-cell-active');
        changeMovesCounter();
        cellOpen(fieldCellObj.id);
        openNeighboursCells(fieldCellObj.id);
        playSound('push');
      } else if (event.which === 3) {
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
        <div class="buttons-block">
        <div class="buttons-col">
          <div class="button new-game">New game</div>
          <div class="button leaderboard">Leaderboard</div>
        </div>
        <div class="buttons-col">
          <div class="button save-game">Save</div>
          <div class="button load-game">Load</div>
        </div>
        <div class="buttons-col">
          <div class="button color-theme">Change theme</div>
          <div class="button sound">Sound: ON</div>
        </div>
      </div>
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
      </div>
    </div>
    <dialog id="favDialog">
      <form method="dialog">
        <div id='dialog-block'></div>
        <menu>
          <button id="close" type="reset">Close</button>
        </menu>
      </form>
    </dialog>
  </main>`;

  body.appendChild(app);
  createNewField();
  setCounters();
  const minesInput = document.getElementById('mines');
  minesInput.addEventListener('change', (e) => {
    if (e.target.value < 10) {
      e.target.value = 10;
    } else if (e.target.value > 99) {
      e.target.value = 99;
    }
  });
};

const toggleSound = () => {
  const soundButton = document.querySelector('.sound');
  if (gameData.soundOn) {
    soundButton.innerHTML = 'Sound: OFF';
    gameData.soundOn = false;
  } else {
    soundButton.innerHTML = 'Sound: ON';
    gameData.soundOn = true;
  }
};

const toggleColorTheme = () => {
  const bodyEl = document.querySelector('body');
  if (gameData.darkTheme) {
    bodyEl.classList.remove('body-dark');
    gameData.darkTheme = false;
  } else {
    bodyEl.classList.add('body-dark');
    gameData.darkTheme = true;
  }
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
  if (!gameData.gamefinished && !gameData.firstMove) {
    localStorage.setItem('lev1ossa-save-gameData', JSON.stringify(gameData));
    showDialog('Game saved!');
  } else if (gameData.gamefinished) {
    showDialog('You can not save finished game!');
  } else if (gameData.firstMove) {
    showDialog('You can not save not started game!');
  }
};

const loadGame = () => {
  if (localStorage.getItem('lev1ossa-save-gameData')) {
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
    if (gameData.soundOn !== loadGameData.soundOn) {
      toggleSound();
    }
    gameData.soundOn = loadGameData.soundOn;

    if (gameData.darkTheme !== loadGameData.darkTheme) {
      toggleColorTheme();
    }
    gameData.darkTheme = loadGameData.darkTheme;

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
    showDialog('Game loaded!');
  } else {
    showDialog('Save not found!');
  }
};

createApp();

const newGameButton = document.querySelector('.new-game');
const newGameSmile = document.querySelector('.stats-smile');
const saveGameButton = document.querySelector('.save-game');
const loadGameButton = document.querySelector('.load-game');
const leaderboardButton = document.querySelector('.leaderboard');
const soundButton = document.querySelector('.sound');
const colorThemeButton = document.querySelector('.color-theme');

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

leaderboardButton.addEventListener('click', () => {
  showDialog(leaderBoardArr);
});

soundButton.addEventListener('click', () => {
  toggleSound();
});

colorThemeButton.addEventListener('click', () => {
  toggleColorTheme();
});

window.addEventListener('mouseup', (event) => {
  cellMouseupHandler(event);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQjtBQUMyQjtBQUNFO0FBQ0U7QUFDQTtBQUNNOztBQUUxRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtREFBVztBQUM1QztBQUNBO0FBQ0EsTUFBTTtBQUNOLGtDQUFrQyxvREFBWTtBQUM5QztBQUNBO0FBQ0EsTUFBTTtBQUNOLGtDQUFrQyxvREFBWTtBQUM5QztBQUNBO0FBQ0EsTUFBTTtBQUNOLHFDQUFxQyx1REFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVO0FBQ3JIO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBUztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0osaURBQWlELG1CQUFtQixjQUFjLGdCQUFnQjtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGtDQUFrQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7O0FBRW5ELGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQSxxREFBcUQsTUFBTTtBQUMzRDtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBLDhEQUE4RCxNQUFNO0FBQ3BFLHdDQUF3QyxLQUFLO0FBQzdDOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDZCQUE2QjtBQUNyRTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG1pbmVJbWFnZSBmcm9tICcuL2Fzc2V0cy9pY29ucy9taW5lLnN2Zyc7XG5pbXBvcnQgd2luU291bmRzcmMgZnJvbSAnLi9hc3NldHMvc291bmRzL3dpbi5tcDMnO1xuaW1wb3J0IHB1c2hTb3VuZHNyYyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvcHVzaC5tcDMnO1xuaW1wb3J0IGxvc2VTb3VuZHNyYyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvbG9zZS5tcDMnO1xuaW1wb3J0IGZsYWdnZWRTb3VuZHNyYyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvZmxhZ2dlZC5tcDMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5sZXQgY2xpY2tlZENlbGw7XG5sZXQgZ2FtZVRpbWVyO1xuXG5sZXQgbGVhZGVyQm9hcmRBcnI7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2MW9zc2Etc2F2ZS1sZWFkZXJCb2FyZCcpKSB7XG4gIGxlYWRlckJvYXJkQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2MW9zc2Etc2F2ZS1sZWFkZXJCb2FyZCcpKTtcbn0gZWxzZSB7XG4gIGxlYWRlckJvYXJkQXJyID0gW107XG59XG5cbmNvbnN0IGdhbWVEYXRhID0ge1xuICBkaWZmaWN1bHR5OiAnZWFzeScsXG4gIHNpemU6IDEwLFxuICBtaW5lczogMTAsXG4gIGZpcnN0TW92ZTogdHJ1ZSxcbiAgbWluZUNlbGxzOiBbXSxcbiAgb3BlbmVkQ2VsbHM6IFtdLFxuICBmbGFnZWRDZWxsczogW10sXG4gIGZpZWxkTWFwOiB7fSxcbiAgZ2FtZWZpbmlzaGVkOiBmYWxzZSxcbiAgZ2FtZVRpbWU6IDAsXG4gIG1vdmVzOiAwLFxuICBtaW5lc0NvdW50ZXI6IDEwLFxuICBzb3VuZE9uOiB0cnVlLFxuICBkYXJrVGhlbWU6IGZhbHNlLFxufTtcblxuY2xhc3MgRmllbGRDZWxsIHtcbiAgY29uc3RydWN0b3Iocm93LCBjb2x1bW4sIGlkKSB7XG4gICAgdGhpcy5taW5lQXJvdW5kID0gMDtcbiAgICB0aGlzLmlzTWluZSA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUgPSAndW5vcGVuZWQnO1xuICAgIHRoaXMucm93ID0gcm93O1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxufVxuXG5jb25zdCBwbGF5U291bmQgPSAoc291bmQpID0+IHtcbiAgaWYgKGdhbWVEYXRhLnNvdW5kT24pIHtcbiAgICBpZiAoc291bmQgPT09ICd3aW4nKSB7XG4gICAgICBjb25zdCB3aW5Tb3VuZCA9IG5ldyBBdWRpbyh3aW5Tb3VuZHNyYyk7XG4gICAgICB3aW5Tb3VuZC52b2x1bWUgPSAwLjU7XG4gICAgICB3aW5Tb3VuZC5wbGF5KCk7XG4gICAgfSBlbHNlIGlmIChzb3VuZCA9PT0gJ3B1c2gnKSB7XG4gICAgICBjb25zdCBwdXNoU291bmQgPSBuZXcgQXVkaW8ocHVzaFNvdW5kc3JjKTtcbiAgICAgIHB1c2hTb3VuZC52b2x1bWUgPSAwLjU7XG4gICAgICBwdXNoU291bmQucGxheSgpO1xuICAgIH0gZWxzZSBpZiAoc291bmQgPT09ICdsb3NlJykge1xuICAgICAgY29uc3QgbG9zZVNvdW5kID0gbmV3IEF1ZGlvKGxvc2VTb3VuZHNyYyk7XG4gICAgICBsb3NlU291bmQudm9sdW1lID0gMC41O1xuICAgICAgbG9zZVNvdW5kLnBsYXkoKTtcbiAgICB9IGVsc2UgaWYgKHNvdW5kID09PSAnZmxhZ2dlZCcpIHtcbiAgICAgIGNvbnN0IGZsYWdnZWRTb3VuZCA9IG5ldyBBdWRpbyhmbGFnZ2VkU291bmRzcmMpO1xuICAgICAgZmxhZ2dlZFNvdW5kLnZvbHVtZSA9IDAuNTtcbiAgICAgIGZsYWdnZWRTb3VuZC5wbGF5KCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzdGFydFRpbWVyID0gKCkgPT4ge1xuICBjb25zdCB3cml0ZVRpbWUgPSAoKSA9PiB7XG4gICAgaWYgKCFnYW1lRGF0YS5nYW1lZmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IHRpbWUgPSBnYW1lRGF0YS5nYW1lVGltZTtcbiAgICAgIGNvbnN0IHRpbWVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtdGltZXInKTtcbiAgICAgIGdhbWVEYXRhLmdhbWVUaW1lID0gdGltZSArIDE7XG4gICAgICB0aW1lckVsLmlubmVySFRNTCA9IHRpbWUgKyAxO1xuICAgIH1cbiAgfTtcbiAgZ2FtZVRpbWVyID0gc2V0SW50ZXJ2YWwod3JpdGVUaW1lLCAxMDAwKTtcbn07XG5cbmNvbnN0IGdldE5laWdoYm91cnNJZEFyciA9IChjZWxsLCBjZWxsSUQpID0+IHtcbiAgY29uc3QgbmVpZ2hib3Vyc0lkQXJyID0gW107XG5cbiAgaWYgKGNlbGwucm93ID09PSAxICYmIGNlbGwuY29sdW1uID09PSAxKSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgKyAxLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSArIDEsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplLFxuICAgICk7XG4gIH0gZWxzZSBpZiAoY2VsbC5yb3cgPT09IDEgJiYgY2VsbC5jb2x1bW4gPT09IGdhbWVEYXRhLnNpemUpIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplIC0gMSxcbiAgICAgIGNlbGxJRCAtIDEsXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjZWxsLnJvdyA9PT0gZ2FtZURhdGEuc2l6ZSAmJiBjZWxsLmNvbHVtbiA9PT0gMSkge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUgKyAxLFxuICAgICAgY2VsbElEICsgMSxcbiAgICApO1xuICB9IGVsc2UgaWYgKGNlbGwucm93ID09PSBnYW1lRGF0YS5zaXplICYmIGNlbGwuY29sdW1uID09PSBnYW1lRGF0YS5zaXplKSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplIC0gMSxcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgLSAxLFxuICAgICk7XG4gIH0gZWxzZSBpZiAoY2VsbC5jb2x1bW4gPT09IDEpIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplICsgMSxcbiAgICAgIGNlbGxJRCArIDEsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplICsgMSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUsXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjZWxsLmNvbHVtbiA9PT0gZ2FtZURhdGEuc2l6ZSkge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSAtIDEsXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUgLSAxLFxuICAgICAgY2VsbElEIC0gMSxcbiAgICApO1xuICB9IGVsc2UgaWYgKGNlbGwucm93ID09PSAxKSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgKyAxLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSArIDEsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSAtIDEsXG4gICAgICBjZWxsSUQgLSAxLFxuICAgICk7XG4gIH0gZWxzZSBpZiAoY2VsbC5yb3cgPT09IGdhbWVEYXRhLnNpemUpIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUgLSAxLFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUgKyAxLFxuICAgICAgY2VsbElEICsgMSxcbiAgICAgIGNlbGxJRCAtIDEsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUgLSAxLFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUgKyAxLFxuICAgICAgY2VsbElEICsgMSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUgKyAxLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUgLSAxLFxuICAgICAgY2VsbElEIC0gMSxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG5laWdoYm91cnNJZEFycjtcbn07XG5cbmNvbnN0IGNvdW50TWluZXMgPSAoKSA9PiB7XG4gIGdhbWVEYXRhLm1pbmVDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWluZSA9IGdhbWVEYXRhLmZpZWxkTWFwW2l0ZW1dO1xuICAgIGNvbnN0IG5laWdoYm91cnNJZEFyciA9IGdldE5laWdoYm91cnNJZEFycihtaW5lLCBpdGVtKTtcbiAgICBuZWlnaGJvdXJzSWRBcnIuZm9yRWFjaCgobmVpZ2hib3VySWQpID0+IHtcbiAgICAgIGdhbWVEYXRhLmZpZWxkTWFwW25laWdoYm91cklkXS5taW5lQXJvdW5kICs9IDE7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkUmFuZG9tTWluZXMgPSAoKSA9PiB7XG4gIHdoaWxlIChnYW1lRGF0YS5taW5lQ2VsbHMubGVuZ3RoIDwgZ2FtZURhdGEubWluZXMpIHtcbiAgICBjb25zdCByYW5kb21JbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZ2FtZURhdGEuc2l6ZSAqIGdhbWVEYXRhLnNpemUpKSArIDE7XG4gICAgaWYgKHJhbmRvbUludCAhPT0gMCAmJiAhZ2FtZURhdGEubWluZUNlbGxzLmluY2x1ZGVzKHJhbmRvbUludClcbiAgICAmJiAhZ2FtZURhdGEub3BlbmVkQ2VsbHMuaW5jbHVkZXMocmFuZG9tSW50KSkge1xuICAgICAgZ2FtZURhdGEubWluZUNlbGxzLnB1c2gocmFuZG9tSW50KTtcbiAgICB9XG4gIH1cblxuICBnYW1lRGF0YS5taW5lQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGdhbWVEYXRhLmZpZWxkTWFwW2l0ZW1dLmlzTWluZSA9IHRydWU7XG4gIH0pO1xufTtcblxuY29uc3QgYWxsQ2VsbHNBcmVPcGVuID0gKCkgPT4ge1xuICBsZXQgcmVzdWx0O1xuICBpZiAoZ2FtZURhdGEub3BlbmVkQ2VsbHMubGVuZ3RoIDwgZ2FtZURhdGEuc2l6ZSAqIGdhbWVEYXRhLnNpemUgLSBnYW1lRGF0YS5taW5lcykge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3Qgc2V0Q291bnRlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IG1vdmVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtbW92ZXMnKTtcbiAgY29uc3QgdGltZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy10aW1lcicpO1xuICBjb25zdCBtaW5lc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLW1pbmVzJyk7XG4gIGNvbnN0IGZsYWdzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtZmxhZ3MnKTtcblxuICB0aW1lckVsLmlubmVySFRNTCA9IGdhbWVEYXRhLmdhbWVUaW1lO1xuICBtb3Zlc0VsLmlubmVySFRNTCA9IGdhbWVEYXRhLm1vdmVzO1xuICBtaW5lc0VsLmlubmVySFRNTCA9IGdhbWVEYXRhLm1pbmVzQ291bnRlcjtcbiAgZmxhZ3NFbC5pbm5lckhUTUwgPSBnYW1lRGF0YS5mbGFnZWRDZWxscy5sZW5ndGg7XG59O1xuXG5jb25zdCBjaGFuZ2VNb3Zlc0NvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1vdmVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtbW92ZXMnKTtcbiAgbW92ZXNFbC5pbm5lckhUTUwgPSArbW92ZXNFbC5pbm5lckhUTUwgKyAxO1xuICBnYW1lRGF0YS5tb3ZlcyA9IG1vdmVzRWwuaW5uZXJIVE1MO1xufTtcblxuY29uc3QgYWRkRmxhZyA9IChjZWxsSUQpID0+IHtcbiAgY29uc3QgbWluZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1taW5lcycpO1xuICBjb25zdCBmbGFnc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLWZsYWdzJyk7XG4gIGNvbnN0IGZpZWxkQ2VsbE9iaiA9IGdhbWVEYXRhLmZpZWxkTWFwW2NlbGxJRF07XG4gIGNvbnN0IGZpZWxkQ2VsbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbElEKTtcblxuICBnYW1lRGF0YS5mbGFnZWRDZWxscy5wdXNoKGNlbGxJRCk7XG4gIGZpZWxkQ2VsbE9iai5zdGF0ZSA9ICdmbGFnZ2VkJztcbiAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1mbGFnZ2VkJyk7XG4gIG1pbmVzRWwuaW5uZXJIVE1MID0gK21pbmVzRWwuaW5uZXJIVE1MIC0gMTtcbiAgZmxhZ3NFbC5pbm5lckhUTUwgPSArZmxhZ3NFbC5pbm5lckhUTUwgKyAxO1xuXG4gIGdhbWVEYXRhLm1pbmVzQ291bnRlciA9IG1pbmVzRWwuaW5uZXJIVE1MO1xuXG4gIHBsYXlTb3VuZCgnZmxhZ2dlZCcpO1xufTtcblxuY29uc3QgcmVtb3ZlRmxhZyA9IChjZWxsSUQpID0+IHtcbiAgY29uc3QgbWluZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1taW5lcycpO1xuICBjb25zdCBmbGFnc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLWZsYWdzJyk7XG4gIGNvbnN0IGZpZWxkQ2VsbE9iaiA9IGdhbWVEYXRhLmZpZWxkTWFwW2NlbGxJRF07XG4gIGNvbnN0IGZpZWxkQ2VsbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbElEKTtcblxuICBjb25zdCBjZWxsSWR4ID0gZ2FtZURhdGEuZmxhZ2VkQ2VsbHMuaW5kZXhPZihjZWxsSUQpO1xuICBpZiAoY2VsbElkeCAhPT0gLTEpIHtcbiAgICBnYW1lRGF0YS5mbGFnZWRDZWxscy5zcGxpY2UoY2VsbElkeCwgMSk7XG4gIH1cbiAgZmllbGRDZWxsT2JqLnN0YXRlID0gJ3Vub3BlbmVkJztcbiAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LnJlbW92ZSgnZmllbGQtY2VsbC1mbGFnZ2VkJyk7XG4gIG1pbmVzRWwuaW5uZXJIVE1MID0gK21pbmVzRWwuaW5uZXJIVE1MICsgMTtcbiAgZmxhZ3NFbC5pbm5lckhUTUwgPSArZmxhZ3NFbC5pbm5lckhUTUwgLSAxO1xuICBwbGF5U291bmQoJ2ZsYWdnZWQnKTtcbn07XG5cbmNvbnN0IGdhbWVTdGFydCA9IChjZWxsSUQpID0+IHtcbiAgY29uc3QgZmllbGRDZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbY2VsbElEXTtcbiAgZ2FtZURhdGEub3BlbmVkQ2VsbHMucHVzaChmaWVsZENlbGxPYmouaWQpO1xuICBmaWVsZENlbGxPYmouc3RhdGUgPSAnb3BlbmVkJztcbiAgYWRkUmFuZG9tTWluZXMoKTtcbiAgY291bnRNaW5lcygpO1xuICBnYW1lRGF0YS5maXJzdE1vdmUgPSBmYWxzZTtcbiAgY29uc3QgdGltZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy10aW1lcicpO1xuICB0aW1lckVsLmlubmVySFRNTCA9IDE7XG4gIGdhbWVEYXRhLmdhbWVUaW1lID0gMTtcbiAgc3RhcnRUaW1lcigpO1xufTtcblxuY29uc3Qgc2hvd0RpYWxvZyA9IChEaWFsb2dDb250ZW50KSA9PiB7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpO1xuICBjb25zdCBmYXZEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmF2RGlhbG9nJyk7XG4gIGNvbnN0IGRpYWxvZ0Jsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1ibG9jaycpO1xuXG4gIGRpYWxvZ0Jsb2NrLmlubmVySFRNTCA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KERpYWxvZ0NvbnRlbnQpKSB7XG4gICAgaWYgKERpYWxvZ0NvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgRGlhbG9nQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGZhdkRpYWxvZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGZhdkRpYWxvZ1RleHQuaW5uZXJIVE1MID0gYGRpZmY6ICR7aXRlbS5kaWZmfSwgbWluZXM6ICR7aXRlbS5taW5lc30sIG1vdmVzOiAke2l0ZW0ubW92ZXN9LCB0aW1lOiAke2l0ZW0udGltZX1gO1xuICAgICAgICBkaWFsb2dCbG9jay5hcHBlbmRDaGlsZChmYXZEaWFsb2dUZXh0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmYXZEaWFsb2dUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZmF2RGlhbG9nVGV4dC5pbm5lckhUTUwgPSAnTm8gc2NvcmVzIHlldCEnO1xuICAgICAgZGlhbG9nQmxvY2suYXBwZW5kQ2hpbGQoZmF2RGlhbG9nVGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZhdkRpYWxvZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmF2RGlhbG9nVGV4dC5pbm5lckhUTUwgPSBEaWFsb2dDb250ZW50O1xuICAgIGRpYWxvZ0Jsb2NrLmFwcGVuZENoaWxkKGZhdkRpYWxvZ1RleHQpO1xuICB9XG5cbiAgZmF2RGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmYXZEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRSZXN1bHRUb0xlYWRlckJvYXJkID0gKHJlc3VsdCkgPT4ge1xuICBpZiAobGVhZGVyQm9hcmRBcnIubGVuZ3RoIDwgMTApIHtcbiAgICBsZWFkZXJCb2FyZEFyci5wdXNoKHJlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgbGVhZGVyQm9hcmRBcnIuc3BsaWNlKDAsIDEpO1xuICAgIGxlYWRlckJvYXJkQXJyLnB1c2gocmVzdWx0KTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2MW9zc2Etc2F2ZS1sZWFkZXJCb2FyZCcsIEpTT04uc3RyaW5naWZ5KGxlYWRlckJvYXJkQXJyKSk7XG59O1xuXG5jb25zdCBnYW1lRW5kID0gKGdhbWVSZXN1bHQsIGNlbGxJRCkgPT4ge1xuICBpZiAoZ2FtZVJlc3VsdCA9PT0gJ2xvc2UnKSB7XG4gICAgZ2FtZURhdGEubWluZUNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkQ2VsbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gICAgICBpZiAoaXRlbSA9PT0gY2VsbElEKSB7XG4gICAgICAgIGZpZWxkQ2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWNlbGwtb3BlbmVkJywgJ2ZpZWxkLWNlbGwtbWluZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1vcGVuZWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1pbmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIG1pbmVJbWcuY2xhc3NMaXN0LmFkZCgnZmllbGQtaW1nLW1pbmUnKTtcbiAgICAgIG1pbmVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBtaW5lSW1hZ2UpO1xuICAgICAgbWluZUltZy5hbHQgPSAnbWluZSBpbWFnZSc7XG4gICAgICBmaWVsZENlbGxFbC5hcHBlbmRDaGlsZChtaW5lSW1nKTtcbiAgICB9KTtcbiAgICBzaG93RGlhbG9nKCdHYW1lIG92ZXIuIFRyeSBhZ2FpbicpO1xuICAgIHBsYXlTb3VuZCgnbG9zZScpO1xuICB9IGVsc2UgaWYgKGdhbWVSZXN1bHQgPT09ICd3aW4nKSB7XG4gICAgc2hvd0RpYWxvZyhgSG9vcmF5ISBZb3UgZm91bmQgYWxsIG1pbmVzIGluICR7Z2FtZURhdGEuZ2FtZVRpbWV9IHNlY29uZHMgYW5kICR7Z2FtZURhdGEubW92ZXN9IG1vdmVzIWApO1xuICAgIHBsYXlTb3VuZCgnd2luJyk7XG4gICAgYWRkUmVzdWx0VG9MZWFkZXJCb2FyZCh7XG4gICAgICBkaWZmOiBnYW1lRGF0YS5kaWZmaWN1bHR5LFxuICAgICAgbWluZXM6IGdhbWVEYXRhLm1pbmVzLFxuICAgICAgbW92ZXM6IGdhbWVEYXRhLm1vdmVzLFxuICAgICAgdGltZTogZ2FtZURhdGEuZ2FtZVRpbWUsXG4gICAgfSk7XG4gIH1cblxuICBnYW1lRGF0YS5nYW1lZmluaXNoZWQgPSB0cnVlO1xuICBjbGVhckludGVydmFsKGdhbWVUaW1lcik7XG59O1xuXG5jb25zdCBnZXRDb2xvciA9IChudW1iZXJPZk1pbmVzKSA9PiB7XG4gIGxldCBjb2xvcjtcbiAgaWYgKG51bWJlck9mTWluZXMgPT09IDEpIHtcbiAgICBjb2xvciA9ICdibHVlJztcbiAgfSBlbHNlIGlmIChudW1iZXJPZk1pbmVzID09PSAyKSB7XG4gICAgY29sb3IgPSAnZ3JlZW4nO1xuICB9IGVsc2UgaWYgKG51bWJlck9mTWluZXMgPT09IDMpIHtcbiAgICBjb2xvciA9ICdyZWQnO1xuICB9IGVsc2UgaWYgKG51bWJlck9mTWluZXMgPT09IDQpIHtcbiAgICBjb2xvciA9ICdkYXJrYmx1ZSc7XG4gIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gNSkge1xuICAgIGNvbG9yID0gJ2Jyb3duJztcbiAgfSBlbHNlIGlmIChudW1iZXJPZk1pbmVzID09PSA2KSB7XG4gICAgY29sb3IgPSAnYXF1YSc7XG4gIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gNykge1xuICAgIGNvbG9yID0gJ2dyYXknO1xuICB9IGVsc2UgaWYgKG51bWJlck9mTWluZXMgPT09IDgpIHtcbiAgICBjb2xvciA9ICdkYXJrZ3JheSc7XG4gIH1cblxuICByZXR1cm4gY29sb3I7XG59O1xuXG5jb25zdCBjZWxsT3BlbiA9IChjZWxsSUQpID0+IHtcbiAgY29uc3QgZmllbGRDZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbY2VsbElEXTtcbiAgY29uc3QgZmllbGRDZWxsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZENlbGxPYmouaWQpO1xuICBpZiAoZ2FtZURhdGEuZmlyc3RNb3ZlKSB7XG4gICAgZ2FtZVN0YXJ0KGZpZWxkQ2VsbE9iai5pZCk7XG4gIH1cbiAgaWYgKGZpZWxkQ2VsbE9iai5pc01pbmUpIHtcbiAgICBnYW1lRW5kKCdsb3NlJywgY2VsbElEKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZmllbGRDZWxsT2JqLnN0YXRlICE9PSAnb3BlbmVkJykge1xuICAgICAgZ2FtZURhdGEub3BlbmVkQ2VsbHMucHVzaChmaWVsZENlbGxPYmouaWQpO1xuICAgICAgZmllbGRDZWxsT2JqLnN0YXRlID0gJ29wZW5lZCc7XG4gICAgfVxuICAgIGZpZWxkQ2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWNlbGwtb3BlbmVkJyk7XG4gICAgaWYgKGZpZWxkQ2VsbE9iai5taW5lQXJvdW5kICE9PSAwKSB7XG4gICAgICBmaWVsZENlbGxFbC5pbm5lckhUTUwgPSBmaWVsZENlbGxPYmoubWluZUFyb3VuZDtcbiAgICAgIGZpZWxkQ2VsbEVsLmNsYXNzTGlzdC5hZGQoYGNvbG9yLSR7Z2V0Q29sb3IoZmllbGRDZWxsT2JqLm1pbmVBcm91bmQpfWApO1xuICAgIH1cbiAgICBpZiAoYWxsQ2VsbHNBcmVPcGVuKCkgJiYgIWdhbWVEYXRhLmdhbWVmaW5pc2hlZCkge1xuICAgICAgZ2FtZUVuZCgnd2luJywgY2VsbElEKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5OZWlnaGJvdXJzQ2VsbHMgPSAoY3VycmVudENlbGxJRCkgPT4ge1xuICBjb25zdCBuZWlnaGJvdXJzQXJyID0gZ2V0TmVpZ2hib3Vyc0lkQXJyKGdhbWVEYXRhLmZpZWxkTWFwW2N1cnJlbnRDZWxsSURdLCBjdXJyZW50Q2VsbElEKTtcbiAgbmVpZ2hib3Vyc0Fyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgdGhpc0NlbGwgPSBnYW1lRGF0YS5maWVsZE1hcFtpdGVtXTtcbiAgICBpZiAoIXRoaXNDZWxsLmlzTWluZSAmJiB0aGlzQ2VsbC5zdGF0ZSAhPT0gJ29wZW5lZCcgJiYgdGhpc0NlbGwuc3RhdGUgIT09ICdmbGFnZ2VkJykge1xuICAgICAgY2VsbE9wZW4oaXRlbSk7XG4gICAgICBpZiAodGhpc0NlbGwubWluZUFyb3VuZCA9PT0gMCkge1xuICAgICAgICBvcGVuTmVpZ2hib3Vyc0NlbGxzKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjZWxsTW91c2Vkb3duSGFuZGxlciA9IChldmVudCwgZmllbGRDZWxsRWwpID0+IHtcbiAgY29uc3QgZmllbGRDZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbZmllbGRDZWxsRWwuaWRdO1xuICBpZiAoIWdhbWVEYXRhLmdhbWVmaW5pc2hlZCAmJiBmaWVsZENlbGxPYmouc3RhdGUgIT09ICdvcGVuZWQnKSB7XG4gICAgY2xpY2tlZENlbGwgPSBmaWVsZENlbGxFbDtcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEgJiYgZmllbGRDZWxsT2JqLnN0YXRlICE9PSAnZmxhZ2dlZCcpIHtcbiAgICAgIGZpZWxkQ2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWNlbGwtYWN0aXZlJyk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjZWxsTW91c2V1cEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGNsaWNrZWRDZWxsKSB7XG4gICAgY29uc3QgZmllbGRDZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbY2xpY2tlZENlbGwuaWRdO1xuICAgIGlmICghZ2FtZURhdGEuZ2FtZWZpbmlzaGVkICYmIGZpZWxkQ2VsbE9iai5zdGF0ZSAhPT0gJ29wZW5lZCcpIHtcbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gMSAmJiBmaWVsZENlbGxPYmouc3RhdGUgIT09ICdmbGFnZ2VkJykge1xuICAgICAgICBjbGlja2VkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZC1jZWxsLWFjdGl2ZScpO1xuICAgICAgICBjaGFuZ2VNb3Zlc0NvdW50ZXIoKTtcbiAgICAgICAgY2VsbE9wZW4oZmllbGRDZWxsT2JqLmlkKTtcbiAgICAgICAgb3Blbk5laWdoYm91cnNDZWxscyhmaWVsZENlbGxPYmouaWQpO1xuICAgICAgICBwbGF5U291bmQoJ3B1c2gnKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDMpIHtcbiAgICAgICAgaWYgKGZpZWxkQ2VsbE9iai5zdGF0ZSA9PT0gJ3Vub3BlbmVkJyAmJiAhZ2FtZURhdGEuZmlyc3RNb3ZlKSB7XG4gICAgICAgICAgYWRkRmxhZyhmaWVsZENlbGxPYmouaWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkQ2VsbE9iai5zdGF0ZSA9PT0gJ2ZsYWdnZWQnKSB7XG4gICAgICAgICAgcmVtb3ZlRmxhZyhmaWVsZENlbGxPYmouaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNsaWNrZWRDZWxsID0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVOZXdGaWVsZCA9ICgpID0+IHtcbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQnKTtcblxuICBmaWVsZC5pbm5lckhUTUwgPSAnJztcbiAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZmllbGQtZWFzeScpO1xuICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZC1tZWRpdW0nKTtcbiAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZmllbGQtaGFyZCcpO1xuICBmaWVsZC5jbGFzc0xpc3QuYWRkKGBmaWVsZC0ke2dhbWVEYXRhLmRpZmZpY3VsdHl9YCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lRGF0YS5zaXplOyBpICs9IDEpIHtcbiAgICBjb25zdCBmaWVsZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpZWxkUm93LmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLXJvdycsIGBmaWVsZC1yb3ctJHtpICsgMX1gKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChmaWVsZFJvdyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lRGF0YS5zaXplOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGZpZWxkQ2VsbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBlbElEID0gaSAqIGdhbWVEYXRhLnNpemUgKyBqICsgMTtcbiAgICAgIGZpZWxkQ2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWNlbGwnLCBgZmllbGQtY29sdW1uLSR7aiArIDF9YCk7XG4gICAgICBmaWVsZENlbGxFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7ZWxJRH1gKTtcbiAgICAgIGZpZWxkUm93LmFwcGVuZENoaWxkKGZpZWxkQ2VsbEVsKTtcblxuICAgICAgZmllbGRDZWxsRWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNlbGxNb3VzZWRvd25IYW5kbGVyKGV2ZW50LCBmaWVsZENlbGxFbCk7XG4gICAgICB9KTtcblxuICAgICAgZmllbGRDZWxsRWwuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBnYW1lRGF0YS5maWVsZE1hcFtlbElEXSA9IG5ldyBGaWVsZENlbGwoaSArIDEsIGogKyAxLCBlbElEKTtcbiAgICB9XG4gIH1cblxuICBnYW1lRGF0YS5maXJzdE1vdmUgPSB0cnVlO1xufTtcblxuY29uc3QgY3JlYXRlQXBwID0gKCkgPT4ge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYXBwLmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xuICBhcHAuaW5uZXJIVE1MID0gYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+TWluZXN3ZWVwZXI8L2gxPlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbiAgPG1haW4gY2xhc3M9XCJtYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLWJsb2NrXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gbmV3LWdhbWVcIj5OZXcgZ2FtZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gbGVhZGVyYm9hcmRcIj5MZWFkZXJib2FyZDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBzYXZlLWdhbWVcIj5TYXZlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBsb2FkLWdhbWVcIj5Mb2FkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIGNvbG9yLXRoZW1lXCI+Q2hhbmdlIHRoZW1lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBzb3VuZFwiPlNvdW5kOiBPTjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1ibG9ja1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwic3RhdHMtdGV4dFwiPk1vdmVzOiA8c3BhbiBjbGFzcz1cInN0YXRzLW1vdmVzXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInN0YXRzLXRleHRcIj5UaW1lOiA8c3BhbiBjbGFzcz1cInN0YXRzLXRpbWVyXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1ibG9jayBzdGF0cy1uZXdnYW1lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXNtaWxlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtYmxvY2tcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInN0YXRzLXRleHRcIj5NaW5lczogPHNwYW4gY2xhc3M9XCJzdGF0cy1taW5lc1wiPjwvc3Bhbj48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJzdGF0cy10ZXh0XCI+RmxhZ3M6IDxzcGFuIGNsYXNzPVwic3RhdHMtZmxhZ3NcIj48L3NwYW4+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nc1wiPlxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZXR0aW5ncy1maWVsZHNldFwiPlxuICAgICAgICAgIDxsZWdlbmQgY2xhc3M9XCJzZXR0aW5ncy1sZWdlbmRcIj5TZWxlY3QgYSBkaWZmaWN1bHR5IGxldmVsOjwvbGVnZW5kPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZWFzeVwiIG5hbWU9XCJkaWZmaWN1bHR5XCIgdmFsdWU9XCJlYXN5XCIgY2hlY2tlZD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlYXN5XCI+RWFzeTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtZWRpdW1cIiBuYW1lPVwiZGlmZmljdWx0eVwiIHZhbHVlPVwibWVkaXVtXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImhhcmRcIiBuYW1lPVwiZGlmZmljdWx0eVwiIHZhbHVlPVwiaGFyZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhhcmRcIj5IYXJkPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtaW5lc1wiIG5hbWU9XCJtaW5lc1wiIG1pbj1cIjEwXCIgbWF4PVwiOTlcIiB2YWx1ZT1cIjEwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWluZXNcIj5OdW1iZXIgb2YgbWluZXMgKDEwLTk5KTo8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpYWxvZyBpZD1cImZhdkRpYWxvZ1wiPlxuICAgICAgPGZvcm0gbWV0aG9kPVwiZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgaWQ9J2RpYWxvZy1ibG9jayc+PC9kaXY+XG4gICAgICAgIDxtZW51PlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZVwiIHR5cGU9XCJyZXNldFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvbWVudT5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2RpYWxvZz5cbiAgPC9tYWluPmA7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChhcHApO1xuICBjcmVhdGVOZXdGaWVsZCgpO1xuICBzZXRDb3VudGVycygpO1xuICBjb25zdCBtaW5lc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmVzJyk7XG4gIG1pbmVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPCAxMCkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSAxMDtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlID4gOTkpIHtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gOTk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZVNvdW5kID0gKCkgPT4ge1xuICBjb25zdCBzb3VuZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VuZCcpO1xuICBpZiAoZ2FtZURhdGEuc291bmRPbikge1xuICAgIHNvdW5kQnV0dG9uLmlubmVySFRNTCA9ICdTb3VuZDogT0ZGJztcbiAgICBnYW1lRGF0YS5zb3VuZE9uID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgc291bmRCdXR0b24uaW5uZXJIVE1MID0gJ1NvdW5kOiBPTic7XG4gICAgZ2FtZURhdGEuc291bmRPbiA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZ2dsZUNvbG9yVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgaWYgKGdhbWVEYXRhLmRhcmtUaGVtZSkge1xuICAgIGJvZHlFbC5jbGFzc0xpc3QucmVtb3ZlKCdib2R5LWRhcmsnKTtcbiAgICBnYW1lRGF0YS5kYXJrVGhlbWUgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBib2R5RWwuY2xhc3NMaXN0LmFkZCgnYm9keS1kYXJrJyk7XG4gICAgZ2FtZURhdGEuZGFya1RoZW1lID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICBjb25zdCBkaWZmaWN1bHR5U2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGlmZmljdWx0eVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGNvbnN0IG51bWJlck9mTWluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWluZXNcIl0nKS52YWx1ZTtcblxuICBnYW1lRGF0YS5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eVNldHRpbmdzO1xuICBpZiAoZGlmZmljdWx0eVNldHRpbmdzID09PSAnZWFzeScpIHtcbiAgICBnYW1lRGF0YS5zaXplID0gMTA7XG4gIH0gZWxzZSBpZiAoZGlmZmljdWx0eVNldHRpbmdzID09PSAnbWVkaXVtJykge1xuICAgIGdhbWVEYXRhLnNpemUgPSAxNTtcbiAgfSBlbHNlIGlmIChkaWZmaWN1bHR5U2V0dGluZ3MgPT09ICdoYXJkJykge1xuICAgIGdhbWVEYXRhLnNpemUgPSAyNTtcbiAgfVxuICBnYW1lRGF0YS5taW5lcyA9IG51bWJlck9mTWluZXM7XG4gIGdhbWVEYXRhLmZpcnN0TW92ZSA9IHRydWU7XG4gIGdhbWVEYXRhLm1pbmVDZWxscyA9IFtdO1xuICBnYW1lRGF0YS5vcGVuZWRDZWxscyA9IFtdO1xuICBnYW1lRGF0YS5mbGFnZWRDZWxscyA9IFtdO1xuICBnYW1lRGF0YS5maWVsZE1hcCA9IHt9O1xuICBnYW1lRGF0YS5nYW1lZmluaXNoZWQgPSBmYWxzZTtcbiAgZ2FtZURhdGEuZ2FtZVRpbWUgPSAwO1xuICBnYW1lRGF0YS5tb3ZlcyA9IDA7XG4gIGdhbWVEYXRhLm1pbmVzQ291bnRlciA9IG51bWJlck9mTWluZXM7XG5cbiAgc2V0Q291bnRlcnMoKTtcbiAgY3JlYXRlTmV3RmllbGQoKTtcbiAgY2xlYXJJbnRlcnZhbChnYW1lVGltZXIpO1xufTtcblxuY29uc3Qgc2F2ZUdhbWUgPSAoKSA9PiB7XG4gIGlmICghZ2FtZURhdGEuZ2FtZWZpbmlzaGVkICYmICFnYW1lRGF0YS5maXJzdE1vdmUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2MW9zc2Etc2F2ZS1nYW1lRGF0YScsIEpTT04uc3RyaW5naWZ5KGdhbWVEYXRhKSk7XG4gICAgc2hvd0RpYWxvZygnR2FtZSBzYXZlZCEnKTtcbiAgfSBlbHNlIGlmIChnYW1lRGF0YS5nYW1lZmluaXNoZWQpIHtcbiAgICBzaG93RGlhbG9nKCdZb3UgY2FuIG5vdCBzYXZlIGZpbmlzaGVkIGdhbWUhJyk7XG4gIH0gZWxzZSBpZiAoZ2FtZURhdGEuZmlyc3RNb3ZlKSB7XG4gICAgc2hvd0RpYWxvZygnWW91IGNhbiBub3Qgc2F2ZSBub3Qgc3RhcnRlZCBnYW1lIScpO1xuICB9XG59O1xuXG5jb25zdCBsb2FkR2FtZSA9ICgpID0+IHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXYxb3NzYS1zYXZlLWdhbWVEYXRhJykpIHtcbiAgICBjbGVhckludGVydmFsKGdhbWVUaW1lcik7XG4gICAgY29uc3QgbG9hZEdhbWVEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2MW9zc2Etc2F2ZS1nYW1lRGF0YScpKTtcbiAgICBnYW1lRGF0YS5kaWZmaWN1bHR5ID0gbG9hZEdhbWVEYXRhLmRpZmZpY3VsdHk7XG4gICAgZ2FtZURhdGEuc2l6ZSA9IGxvYWRHYW1lRGF0YS5zaXplO1xuICAgIGdhbWVEYXRhLm1pbmVzID0gbG9hZEdhbWVEYXRhLm1pbmVzO1xuICAgIGdhbWVEYXRhLm1pbmVDZWxscyA9IGxvYWRHYW1lRGF0YS5taW5lQ2VsbHM7XG4gICAgZ2FtZURhdGEub3BlbmVkQ2VsbHMgPSBsb2FkR2FtZURhdGEub3BlbmVkQ2VsbHM7XG4gICAgZ2FtZURhdGEuZmxhZ2VkQ2VsbHMgPSBsb2FkR2FtZURhdGEuZmxhZ2VkQ2VsbHM7XG4gICAgZ2FtZURhdGEuZ2FtZWZpbmlzaGVkID0gbG9hZEdhbWVEYXRhLmdhbWVmaW5pc2hlZDtcbiAgICBnYW1lRGF0YS5nYW1lVGltZSA9IGxvYWRHYW1lRGF0YS5nYW1lVGltZTtcbiAgICBnYW1lRGF0YS5tb3ZlcyA9IGxvYWRHYW1lRGF0YS5tb3ZlcztcbiAgICBnYW1lRGF0YS5taW5lc0NvdW50ZXIgPSBsb2FkR2FtZURhdGEubWluZXNDb3VudGVyO1xuICAgIGlmIChnYW1lRGF0YS5zb3VuZE9uICE9PSBsb2FkR2FtZURhdGEuc291bmRPbikge1xuICAgICAgdG9nZ2xlU291bmQoKTtcbiAgICB9XG4gICAgZ2FtZURhdGEuc291bmRPbiA9IGxvYWRHYW1lRGF0YS5zb3VuZE9uO1xuXG4gICAgaWYgKGdhbWVEYXRhLmRhcmtUaGVtZSAhPT0gbG9hZEdhbWVEYXRhLmRhcmtUaGVtZSkge1xuICAgICAgdG9nZ2xlQ29sb3JUaGVtZSgpO1xuICAgIH1cbiAgICBnYW1lRGF0YS5kYXJrVGhlbWUgPSBsb2FkR2FtZURhdGEuZGFya1RoZW1lO1xuXG4gICAgY3JlYXRlTmV3RmllbGQoKTtcblxuICAgIGdhbWVEYXRhLmZpcnN0TW92ZSA9IGxvYWRHYW1lRGF0YS5maXJzdE1vdmU7XG4gICAgZ2FtZURhdGEuZmllbGRNYXAgPSBsb2FkR2FtZURhdGEuZmllbGRNYXA7XG5cbiAgICBpZiAoIWdhbWVEYXRhLmZpcnN0TW92ZSkge1xuICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgZ2FtZURhdGEub3BlbmVkQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbaXRlbV07XG4gICAgICAgIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1vcGVuZWQnKTtcbiAgICAgICAgaWYgKGNlbGxPYmoubWluZUFyb3VuZCAhPT0gMCkge1xuICAgICAgICAgIGNlbGxFbC5pbm5lckhUTUwgPSBjZWxsT2JqLm1pbmVBcm91bmQ7XG4gICAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoYGNvbG9yLSR7Z2V0Q29sb3IoY2VsbE9iai5taW5lQXJvdW5kKX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBnYW1lRGF0YS5mbGFnZWRDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1mbGFnZ2VkJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRDb3VudGVycygpO1xuICAgIHNob3dEaWFsb2coJ0dhbWUgbG9hZGVkIScpO1xuICB9IGVsc2Uge1xuICAgIHNob3dEaWFsb2coJ1NhdmUgbm90IGZvdW5kIScpO1xuICB9XG59O1xuXG5jcmVhdGVBcHAoKTtcblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZScpO1xuY29uc3QgbmV3R2FtZVNtaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLXNtaWxlJyk7XG5jb25zdCBzYXZlR2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWdhbWUnKTtcbmNvbnN0IGxvYWRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWQtZ2FtZScpO1xuY29uc3QgbGVhZGVyYm9hcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhZGVyYm9hcmQnKTtcbmNvbnN0IHNvdW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdW5kJyk7XG5jb25zdCBjb2xvclRoZW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yLXRoZW1lJyk7XG5cbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHN0YXJ0TmV3R2FtZSgpO1xufSk7XG5cbm5ld0dhbWVTbWlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc3RhcnROZXdHYW1lKCk7XG59KTtcblxuc2F2ZUdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNhdmVHYW1lKCk7XG59KTtcblxubG9hZEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxvYWRHYW1lKCk7XG59KTtcblxubGVhZGVyYm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNob3dEaWFsb2cobGVhZGVyQm9hcmRBcnIpO1xufSk7XG5cbnNvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0b2dnbGVTb3VuZCgpO1xufSk7XG5cbmNvbG9yVGhlbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRvZ2dsZUNvbG9yVGhlbWUoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICBjZWxsTW91c2V1cEhhbmRsZXIoZXZlbnQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=