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
        cellOpen(fieldCellObj.id);
        openNeighboursCells(fieldCellObj.id);
        changeMovesCounter();
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
    showDialog('Game saved!');
  } else {
    showDialog('You can not save finished game!');
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

const toggleColorTheme = () => {
  const bodyEl = document.querySelector('body');
  bodyEl.classList.toggle('body-dark');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQjtBQUMyQjtBQUNFO0FBQ0U7QUFDQTtBQUNNOztBQUUxRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbURBQVc7QUFDNUM7QUFDQTtBQUNBLE1BQU07QUFDTixrQ0FBa0Msb0RBQVk7QUFDOUM7QUFDQTtBQUNBLE1BQU07QUFDTixrQ0FBa0Msb0RBQVk7QUFDOUM7QUFDQTtBQUNBLE1BQU07QUFDTixxQ0FBcUMsdURBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVTtBQUNySDtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbURBQVM7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKLGlEQUFpRCxtQkFBbUIsY0FBYyxnQkFBZ0I7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrQ0FBa0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9COztBQUVuRCxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0EscURBQXFELE1BQU07QUFDM0Q7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSw4REFBOEQsTUFBTTtBQUNwRSx3Q0FBd0MsS0FBSztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNkJBQTZCO0FBQ3JFO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbWluZUltYWdlIGZyb20gJy4vYXNzZXRzL2ljb25zL21pbmUuc3ZnJztcbmltcG9ydCB3aW5Tb3VuZHNyYyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvd2luLm1wMyc7XG5pbXBvcnQgcHVzaFNvdW5kc3JjIGZyb20gJy4vYXNzZXRzL3NvdW5kcy9wdXNoLm1wMyc7XG5pbXBvcnQgbG9zZVNvdW5kc3JjIGZyb20gJy4vYXNzZXRzL3NvdW5kcy9sb3NlLm1wMyc7XG5pbXBvcnQgZmxhZ2dlZFNvdW5kc3JjIGZyb20gJy4vYXNzZXRzL3NvdW5kcy9mbGFnZ2VkLm1wMyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBjbGlja2VkQ2VsbDtcbmxldCBnYW1lVGltZXI7XG5cbmxldCBsZWFkZXJCb2FyZEFycjtcblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXYxb3NzYS1zYXZlLWxlYWRlckJvYXJkJykpIHtcbiAgbGVhZGVyQm9hcmRBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXYxb3NzYS1zYXZlLWxlYWRlckJvYXJkJykpO1xufSBlbHNlIHtcbiAgbGVhZGVyQm9hcmRBcnIgPSBbXTtcbn1cblxuY29uc3QgZ2FtZURhdGEgPSB7XG4gIGRpZmZpY3VsdHk6ICdlYXN5JyxcbiAgc2l6ZTogMTAsXG4gIG1pbmVzOiAxMCxcbiAgZmlyc3RNb3ZlOiB0cnVlLFxuICBtaW5lQ2VsbHM6IFtdLFxuICBvcGVuZWRDZWxsczogW10sXG4gIGZsYWdlZENlbGxzOiBbXSxcbiAgZmllbGRNYXA6IHt9LFxuICBnYW1lZmluaXNoZWQ6IGZhbHNlLFxuICBnYW1lVGltZTogMCxcbiAgbW92ZXM6IDAsXG4gIG1pbmVzQ291bnRlcjogMTAsXG4gIHNvdW5kT246IHRydWUsXG59O1xuXG5jbGFzcyBGaWVsZENlbGwge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbHVtbiwgaWQpIHtcbiAgICB0aGlzLm1pbmVBcm91bmQgPSAwO1xuICAgIHRoaXMuaXNNaW5lID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZSA9ICd1bm9wZW5lZCc7XG4gICAgdGhpcy5yb3cgPSByb3c7XG4gICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG59XG5cbmNvbnN0IHBsYXlTb3VuZCA9IChzb3VuZCkgPT4ge1xuICBpZiAoZ2FtZURhdGEuc291bmRPbikge1xuICAgIGlmIChzb3VuZCA9PT0gJ3dpbicpIHtcbiAgICAgIGNvbnN0IHdpblNvdW5kID0gbmV3IEF1ZGlvKHdpblNvdW5kc3JjKTtcbiAgICAgIHdpblNvdW5kLnZvbHVtZSA9IDAuNTtcbiAgICAgIHdpblNvdW5kLnBsYXkoKTtcbiAgICB9IGVsc2UgaWYgKHNvdW5kID09PSAncHVzaCcpIHtcbiAgICAgIGNvbnN0IHB1c2hTb3VuZCA9IG5ldyBBdWRpbyhwdXNoU291bmRzcmMpO1xuICAgICAgcHVzaFNvdW5kLnZvbHVtZSA9IDAuNTtcbiAgICAgIHB1c2hTb3VuZC5wbGF5KCk7XG4gICAgfSBlbHNlIGlmIChzb3VuZCA9PT0gJ2xvc2UnKSB7XG4gICAgICBjb25zdCBsb3NlU291bmQgPSBuZXcgQXVkaW8obG9zZVNvdW5kc3JjKTtcbiAgICAgIGxvc2VTb3VuZC52b2x1bWUgPSAwLjU7XG4gICAgICBsb3NlU291bmQucGxheSgpO1xuICAgIH0gZWxzZSBpZiAoc291bmQgPT09ICdmbGFnZ2VkJykge1xuICAgICAgY29uc3QgZmxhZ2dlZFNvdW5kID0gbmV3IEF1ZGlvKGZsYWdnZWRTb3VuZHNyYyk7XG4gICAgICBmbGFnZ2VkU291bmQudm9sdW1lID0gMC41O1xuICAgICAgZmxhZ2dlZFNvdW5kLnBsYXkoKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHdyaXRlVGltZSA9ICgpID0+IHtcbiAgICBpZiAoIWdhbWVEYXRhLmdhbWVmaW5pc2hlZCkge1xuICAgICAgY29uc3QgdGltZSA9IGdhbWVEYXRhLmdhbWVUaW1lO1xuICAgICAgY29uc3QgdGltZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy10aW1lcicpO1xuICAgICAgZ2FtZURhdGEuZ2FtZVRpbWUgPSB0aW1lICsgMTtcbiAgICAgIHRpbWVyRWwuaW5uZXJIVE1MID0gdGltZSArIDE7XG4gICAgfVxuICB9O1xuICBnYW1lVGltZXIgPSBzZXRJbnRlcnZhbCh3cml0ZVRpbWUsIDEwMDApO1xufTtcblxuY29uc3QgZ2V0TmVpZ2hib3Vyc0lkQXJyID0gKGNlbGwsIGNlbGxJRCkgPT4ge1xuICBjb25zdCBuZWlnaGJvdXJzSWRBcnIgPSBbXTtcblxuICBpZiAoY2VsbC5yb3cgPT09IDEgJiYgY2VsbC5jb2x1bW4gPT09IDEpIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCArIDEsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplICsgMSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUsXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjZWxsLnJvdyA9PT0gMSAmJiBjZWxsLmNvbHVtbiA9PT0gZ2FtZURhdGEuc2l6ZSkge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUgLSAxLFxuICAgICAgY2VsbElEIC0gMSxcbiAgICApO1xuICB9IGVsc2UgaWYgKGNlbGwucm93ID09PSBnYW1lRGF0YS5zaXplICYmIGNlbGwuY29sdW1uID09PSAxKSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSArIDEsXG4gICAgICBjZWxsSUQgKyAxLFxuICAgICk7XG4gIH0gZWxzZSBpZiAoY2VsbC5yb3cgPT09IGdhbWVEYXRhLnNpemUgJiYgY2VsbC5jb2x1bW4gPT09IGdhbWVEYXRhLnNpemUpIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUgLSAxLFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCAtIDEsXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjZWxsLmNvbHVtbiA9PT0gMSkge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUgKyAxLFxuICAgICAgY2VsbElEICsgMSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUgKyAxLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSxcbiAgICApO1xuICB9IGVsc2UgaWYgKGNlbGwuY29sdW1uID09PSBnYW1lRGF0YS5zaXplKSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplIC0gMSxcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSAtIDEsXG4gICAgICBjZWxsSUQgLSAxLFxuICAgICk7XG4gIH0gZWxzZSBpZiAoY2VsbC5yb3cgPT09IDEpIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCArIDEsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplICsgMSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplIC0gMSxcbiAgICAgIGNlbGxJRCAtIDEsXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjZWxsLnJvdyA9PT0gZ2FtZURhdGEuc2l6ZSkge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSAtIDEsXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSArIDEsXG4gICAgICBjZWxsSUQgKyAxLFxuICAgICAgY2VsbElEIC0gMSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSAtIDEsXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSArIDEsXG4gICAgICBjZWxsSUQgKyAxLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSArIDEsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSAtIDEsXG4gICAgICBjZWxsSUQgLSAxLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbmVpZ2hib3Vyc0lkQXJyO1xufTtcblxuY29uc3QgY291bnRNaW5lcyA9ICgpID0+IHtcbiAgZ2FtZURhdGEubWluZUNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtaW5lID0gZ2FtZURhdGEuZmllbGRNYXBbaXRlbV07XG4gICAgY29uc3QgbmVpZ2hib3Vyc0lkQXJyID0gZ2V0TmVpZ2hib3Vyc0lkQXJyKG1pbmUsIGl0ZW0pO1xuICAgIG5laWdoYm91cnNJZEFyci5mb3JFYWNoKChuZWlnaGJvdXJJZCkgPT4ge1xuICAgICAgZ2FtZURhdGEuZmllbGRNYXBbbmVpZ2hib3VySWRdLm1pbmVBcm91bmQgKz0gMTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRSYW5kb21NaW5lcyA9ICgpID0+IHtcbiAgd2hpbGUgKGdhbWVEYXRhLm1pbmVDZWxscy5sZW5ndGggPCBnYW1lRGF0YS5taW5lcykge1xuICAgIGNvbnN0IHJhbmRvbUludCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChnYW1lRGF0YS5zaXplICogZ2FtZURhdGEuc2l6ZSkpICsgMTtcbiAgICBpZiAocmFuZG9tSW50ICE9PSAwICYmICFnYW1lRGF0YS5taW5lQ2VsbHMuaW5jbHVkZXMocmFuZG9tSW50KVxuICAgICYmICFnYW1lRGF0YS5vcGVuZWRDZWxscy5pbmNsdWRlcyhyYW5kb21JbnQpKSB7XG4gICAgICBnYW1lRGF0YS5taW5lQ2VsbHMucHVzaChyYW5kb21JbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVEYXRhLm1pbmVDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgZ2FtZURhdGEuZmllbGRNYXBbaXRlbV0uaXNNaW5lID0gdHJ1ZTtcbiAgfSk7XG59O1xuXG5jb25zdCBhbGxDZWxsc0FyZU9wZW4gPSAoKSA9PiB7XG4gIGxldCByZXN1bHQ7XG4gIGlmIChnYW1lRGF0YS5vcGVuZWRDZWxscy5sZW5ndGggPCBnYW1lRGF0YS5zaXplICogZ2FtZURhdGEuc2l6ZSAtIGdhbWVEYXRhLm1pbmVzKSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBzZXRDb3VudGVycyA9ICgpID0+IHtcbiAgY29uc3QgbW92ZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1tb3ZlcycpO1xuICBjb25zdCB0aW1lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLXRpbWVyJyk7XG4gIGNvbnN0IG1pbmVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtbWluZXMnKTtcbiAgY29uc3QgZmxhZ3NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1mbGFncycpO1xuXG4gIHRpbWVyRWwuaW5uZXJIVE1MID0gZ2FtZURhdGEuZ2FtZVRpbWU7XG4gIG1vdmVzRWwuaW5uZXJIVE1MID0gZ2FtZURhdGEubW92ZXM7XG4gIG1pbmVzRWwuaW5uZXJIVE1MID0gZ2FtZURhdGEubWluZXNDb3VudGVyO1xuICBmbGFnc0VsLmlubmVySFRNTCA9IGdhbWVEYXRhLmZsYWdlZENlbGxzLmxlbmd0aDtcbn07XG5cbmNvbnN0IGNoYW5nZU1vdmVzQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgbW92ZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1tb3ZlcycpO1xuICBtb3Zlc0VsLmlubmVySFRNTCA9ICttb3Zlc0VsLmlubmVySFRNTCArIDE7XG4gIGdhbWVEYXRhLm1vdmVzID0gbW92ZXNFbC5pbm5lckhUTUw7XG59O1xuXG5jb25zdCBhZGRGbGFnID0gKGNlbGxJRCkgPT4ge1xuICBjb25zdCBtaW5lc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLW1pbmVzJyk7XG4gIGNvbnN0IGZsYWdzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtZmxhZ3MnKTtcbiAgY29uc3QgZmllbGRDZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbY2VsbElEXTtcbiAgY29uc3QgZmllbGRDZWxsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsSUQpO1xuXG4gIGdhbWVEYXRhLmZsYWdlZENlbGxzLnB1c2goY2VsbElEKTtcbiAgZmllbGRDZWxsT2JqLnN0YXRlID0gJ2ZsYWdnZWQnO1xuICBmaWVsZENlbGxFbC5jbGFzc0xpc3QuYWRkKCdmaWVsZC1jZWxsLWZsYWdnZWQnKTtcbiAgbWluZXNFbC5pbm5lckhUTUwgPSArbWluZXNFbC5pbm5lckhUTUwgLSAxO1xuICBmbGFnc0VsLmlubmVySFRNTCA9ICtmbGFnc0VsLmlubmVySFRNTCArIDE7XG5cbiAgZ2FtZURhdGEubWluZXNDb3VudGVyID0gbWluZXNFbC5pbm5lckhUTUw7XG5cbiAgcGxheVNvdW5kKCdmbGFnZ2VkJyk7XG59O1xuXG5jb25zdCByZW1vdmVGbGFnID0gKGNlbGxJRCkgPT4ge1xuICBjb25zdCBtaW5lc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLW1pbmVzJyk7XG4gIGNvbnN0IGZsYWdzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtZmxhZ3MnKTtcbiAgY29uc3QgZmllbGRDZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbY2VsbElEXTtcbiAgY29uc3QgZmllbGRDZWxsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsSUQpO1xuXG4gIGNvbnN0IGNlbGxJZHggPSBnYW1lRGF0YS5mbGFnZWRDZWxscy5pbmRleE9mKGNlbGxJRCk7XG4gIGlmIChjZWxsSWR4ICE9PSAtMSkge1xuICAgIGdhbWVEYXRhLmZsYWdlZENlbGxzLnNwbGljZShjZWxsSWR4LCAxKTtcbiAgfVxuICBmaWVsZENlbGxPYmouc3RhdGUgPSAndW5vcGVuZWQnO1xuICBmaWVsZENlbGxFbC5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZC1jZWxsLWZsYWdnZWQnKTtcbiAgbWluZXNFbC5pbm5lckhUTUwgPSArbWluZXNFbC5pbm5lckhUTUwgKyAxO1xuICBmbGFnc0VsLmlubmVySFRNTCA9ICtmbGFnc0VsLmlubmVySFRNTCAtIDE7XG4gIHBsYXlTb3VuZCgnZmxhZ2dlZCcpO1xufTtcblxuY29uc3QgZ2FtZVN0YXJ0ID0gKGNlbGxJRCkgPT4ge1xuICBjb25zdCBmaWVsZENlbGxPYmogPSBnYW1lRGF0YS5maWVsZE1hcFtjZWxsSURdO1xuICBnYW1lRGF0YS5vcGVuZWRDZWxscy5wdXNoKGZpZWxkQ2VsbE9iai5pZCk7XG4gIGZpZWxkQ2VsbE9iai5zdGF0ZSA9ICdvcGVuZWQnO1xuICBhZGRSYW5kb21NaW5lcygpO1xuICBjb3VudE1pbmVzKCk7XG4gIGdhbWVEYXRhLmZpcnN0TW92ZSA9IGZhbHNlO1xuICBzdGFydFRpbWVyKCk7XG59O1xuXG5jb25zdCBzaG93RGlhbG9nID0gKERpYWxvZ0NvbnRlbnQpID0+IHtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJyk7XG4gIGNvbnN0IGZhdkRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZEaWFsb2cnKTtcbiAgY29uc3QgZGlhbG9nQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWJsb2NrJyk7XG5cbiAgZGlhbG9nQmxvY2suaW5uZXJIVE1MID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoRGlhbG9nQ29udGVudCkpIHtcbiAgICBpZiAoRGlhbG9nQ29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICBEaWFsb2dDb250ZW50LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgZmF2RGlhbG9nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZmF2RGlhbG9nVGV4dC5pbm5lckhUTUwgPSBgZGlmZjogJHtpdGVtLmRpZmZ9LCBtaW5lczogJHtpdGVtLm1pbmVzfSwgbW92ZXM6ICR7aXRlbS5tb3Zlc30sIHRpbWU6ICR7aXRlbS50aW1lfWA7XG4gICAgICAgIGRpYWxvZ0Jsb2NrLmFwcGVuZENoaWxkKGZhdkRpYWxvZ1RleHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZhdkRpYWxvZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBmYXZEaWFsb2dUZXh0LmlubmVySFRNTCA9ICdObyBzY29yZXMgeWV0ISc7XG4gICAgICBkaWFsb2dCbG9jay5hcHBlbmRDaGlsZChmYXZEaWFsb2dUZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmF2RGlhbG9nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYXZEaWFsb2dUZXh0LmlubmVySFRNTCA9IERpYWxvZ0NvbnRlbnQ7XG4gICAgZGlhbG9nQmxvY2suYXBwZW5kQ2hpbGQoZmF2RGlhbG9nVGV4dCk7XG4gIH1cblxuICBmYXZEaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZhdkRpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFJlc3VsdFRvTGVhZGVyQm9hcmQgPSAocmVzdWx0KSA9PiB7XG4gIGlmIChsZWFkZXJCb2FyZEFyci5sZW5ndGggPCAxMCkge1xuICAgIGxlYWRlckJvYXJkQXJyLnB1c2gocmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBsZWFkZXJCb2FyZEFyci5zcGxpY2UoMCwgMSk7XG4gICAgbGVhZGVyQm9hcmRBcnIucHVzaChyZXN1bHQpO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXYxb3NzYS1zYXZlLWxlYWRlckJvYXJkJywgSlNPTi5zdHJpbmdpZnkobGVhZGVyQm9hcmRBcnIpKTtcbn07XG5cbmNvbnN0IGdhbWVFbmQgPSAoZ2FtZVJlc3VsdCwgY2VsbElEKSA9PiB7XG4gIGlmIChnYW1lUmVzdWx0ID09PSAnbG9zZScpIHtcbiAgICBnYW1lRGF0YS5taW5lQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZmllbGRDZWxsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKTtcbiAgICAgIGlmIChpdGVtID09PSBjZWxsSUQpIHtcbiAgICAgICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1vcGVuZWQnLCAnZmllbGQtY2VsbC1taW5lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZENlbGxFbC5jbGFzc0xpc3QuYWRkKCdmaWVsZC1jZWxsLW9wZW5lZCcpO1xuICAgICAgfVxuICAgICAgY29uc3QgbWluZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgbWluZUltZy5jbGFzc0xpc3QuYWRkKCdmaWVsZC1pbWctbWluZScpO1xuICAgICAgbWluZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIG1pbmVJbWFnZSk7XG4gICAgICBtaW5lSW1nLmFsdCA9ICdtaW5lIGltYWdlJztcbiAgICAgIGZpZWxkQ2VsbEVsLmFwcGVuZENoaWxkKG1pbmVJbWcpO1xuICAgIH0pO1xuICAgIHNob3dEaWFsb2coJ0dhbWUgb3Zlci4gVHJ5IGFnYWluJyk7XG4gICAgcGxheVNvdW5kKCdsb3NlJyk7XG4gIH0gZWxzZSBpZiAoZ2FtZVJlc3VsdCA9PT0gJ3dpbicpIHtcbiAgICBzaG93RGlhbG9nKGBIb29yYXkhIFlvdSBmb3VuZCBhbGwgbWluZXMgaW4gJHtnYW1lRGF0YS5nYW1lVGltZX0gc2Vjb25kcyBhbmQgJHtnYW1lRGF0YS5tb3Zlc30gbW92ZXMhYCk7XG4gICAgcGxheVNvdW5kKCd3aW4nKTtcbiAgICBhZGRSZXN1bHRUb0xlYWRlckJvYXJkKHtcbiAgICAgIGRpZmY6IGdhbWVEYXRhLmRpZmZpY3VsdHksXG4gICAgICBtaW5lczogZ2FtZURhdGEubWluZXMsXG4gICAgICBtb3ZlczogZ2FtZURhdGEubW92ZXMsXG4gICAgICB0aW1lOiBnYW1lRGF0YS5nYW1lVGltZSxcbiAgICB9KTtcbiAgfVxuXG4gIGdhbWVEYXRhLmdhbWVmaW5pc2hlZCA9IHRydWU7XG4gIGNsZWFySW50ZXJ2YWwoZ2FtZVRpbWVyKTtcbn07XG5cbmNvbnN0IGdldENvbG9yID0gKG51bWJlck9mTWluZXMpID0+IHtcbiAgbGV0IGNvbG9yO1xuICBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gMSkge1xuICAgIGNvbG9yID0gJ2JsdWUnO1xuICB9IGVsc2UgaWYgKG51bWJlck9mTWluZXMgPT09IDIpIHtcbiAgICBjb2xvciA9ICdncmVlbic7XG4gIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gMykge1xuICAgIGNvbG9yID0gJ3JlZCc7XG4gIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gNCkge1xuICAgIGNvbG9yID0gJ2RhcmtibHVlJztcbiAgfSBlbHNlIGlmIChudW1iZXJPZk1pbmVzID09PSA1KSB7XG4gICAgY29sb3IgPSAnYnJvd24nO1xuICB9IGVsc2UgaWYgKG51bWJlck9mTWluZXMgPT09IDYpIHtcbiAgICBjb2xvciA9ICdhcXVhJztcbiAgfSBlbHNlIGlmIChudW1iZXJPZk1pbmVzID09PSA3KSB7XG4gICAgY29sb3IgPSAnZ3JheSc7XG4gIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gOCkge1xuICAgIGNvbG9yID0gJ2RhcmtncmF5JztcbiAgfVxuXG4gIHJldHVybiBjb2xvcjtcbn07XG5cbmNvbnN0IGNlbGxPcGVuID0gKGNlbGxJRCkgPT4ge1xuICBjb25zdCBmaWVsZENlbGxPYmogPSBnYW1lRGF0YS5maWVsZE1hcFtjZWxsSURdO1xuICBjb25zdCBmaWVsZENlbGxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkQ2VsbE9iai5pZCk7XG4gIGlmIChnYW1lRGF0YS5maXJzdE1vdmUpIHtcbiAgICBnYW1lU3RhcnQoZmllbGRDZWxsT2JqLmlkKTtcbiAgfVxuICBpZiAoZmllbGRDZWxsT2JqLmlzTWluZSkge1xuICAgIGdhbWVFbmQoJ2xvc2UnLCBjZWxsSUQpO1xuICB9IGVsc2Uge1xuICAgIGlmIChmaWVsZENlbGxPYmouc3RhdGUgIT09ICdvcGVuZWQnKSB7XG4gICAgICBnYW1lRGF0YS5vcGVuZWRDZWxscy5wdXNoKGZpZWxkQ2VsbE9iai5pZCk7XG4gICAgICBmaWVsZENlbGxPYmouc3RhdGUgPSAnb3BlbmVkJztcbiAgICB9XG4gICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1vcGVuZWQnKTtcbiAgICBpZiAoZmllbGRDZWxsT2JqLm1pbmVBcm91bmQgIT09IDApIHtcbiAgICAgIGZpZWxkQ2VsbEVsLmlubmVySFRNTCA9IGZpZWxkQ2VsbE9iai5taW5lQXJvdW5kO1xuICAgICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZChgY29sb3ItJHtnZXRDb2xvcihmaWVsZENlbGxPYmoubWluZUFyb3VuZCl9YCk7XG4gICAgfVxuICAgIGlmIChhbGxDZWxsc0FyZU9wZW4oKSAmJiAhZ2FtZURhdGEuZ2FtZWZpbmlzaGVkKSB7XG4gICAgICBnYW1lRW5kKCd3aW4nLCBjZWxsSUQpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgb3Blbk5laWdoYm91cnNDZWxscyA9IChjdXJyZW50Q2VsbElEKSA9PiB7XG4gIGNvbnN0IG5laWdoYm91cnNBcnIgPSBnZXROZWlnaGJvdXJzSWRBcnIoZ2FtZURhdGEuZmllbGRNYXBbY3VycmVudENlbGxJRF0sIGN1cnJlbnRDZWxsSUQpO1xuICBuZWlnaGJvdXJzQXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCB0aGlzQ2VsbCA9IGdhbWVEYXRhLmZpZWxkTWFwW2l0ZW1dO1xuICAgIGlmICghdGhpc0NlbGwuaXNNaW5lICYmIHRoaXNDZWxsLnN0YXRlICE9PSAnb3BlbmVkJyAmJiB0aGlzQ2VsbC5zdGF0ZSAhPT0gJ2ZsYWdnZWQnKSB7XG4gICAgICBjZWxsT3BlbihpdGVtKTtcbiAgICAgIGlmICh0aGlzQ2VsbC5taW5lQXJvdW5kID09PSAwKSB7XG4gICAgICAgIG9wZW5OZWlnaGJvdXJzQ2VsbHMoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNlbGxNb3VzZWRvd25IYW5kbGVyID0gKGV2ZW50LCBmaWVsZENlbGxFbCkgPT4ge1xuICBjb25zdCBmaWVsZENlbGxPYmogPSBnYW1lRGF0YS5maWVsZE1hcFtmaWVsZENlbGxFbC5pZF07XG4gIGlmICghZ2FtZURhdGEuZ2FtZWZpbmlzaGVkICYmIGZpZWxkQ2VsbE9iai5zdGF0ZSAhPT0gJ29wZW5lZCcpIHtcbiAgICBjbGlja2VkQ2VsbCA9IGZpZWxkQ2VsbEVsO1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMSAmJiBmaWVsZENlbGxPYmouc3RhdGUgIT09ICdmbGFnZ2VkJykge1xuICAgICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1hY3RpdmUnKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNlbGxNb3VzZXVwSGFuZGxlciA9IChldmVudCkgPT4ge1xuICBpZiAoY2xpY2tlZENlbGwpIHtcbiAgICBjb25zdCBmaWVsZENlbGxPYmogPSBnYW1lRGF0YS5maWVsZE1hcFtjbGlja2VkQ2VsbC5pZF07XG4gICAgaWYgKCFnYW1lRGF0YS5nYW1lZmluaXNoZWQgJiYgZmllbGRDZWxsT2JqLnN0YXRlICE9PSAnb3BlbmVkJykge1xuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAxICYmIGZpZWxkQ2VsbE9iai5zdGF0ZSAhPT0gJ2ZsYWdnZWQnKSB7XG4gICAgICAgIGNsaWNrZWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpZWxkLWNlbGwtYWN0aXZlJyk7XG4gICAgICAgIGNlbGxPcGVuKGZpZWxkQ2VsbE9iai5pZCk7XG4gICAgICAgIG9wZW5OZWlnaGJvdXJzQ2VsbHMoZmllbGRDZWxsT2JqLmlkKTtcbiAgICAgICAgY2hhbmdlTW92ZXNDb3VudGVyKCk7XG4gICAgICAgIHBsYXlTb3VuZCgncHVzaCcpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC53aGljaCA9PT0gMykge1xuICAgICAgICBpZiAoZmllbGRDZWxsT2JqLnN0YXRlID09PSAndW5vcGVuZWQnICYmICFnYW1lRGF0YS5maXJzdE1vdmUpIHtcbiAgICAgICAgICBhZGRGbGFnKGZpZWxkQ2VsbE9iai5pZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRDZWxsT2JqLnN0YXRlID09PSAnZmxhZ2dlZCcpIHtcbiAgICAgICAgICByZW1vdmVGbGFnKGZpZWxkQ2VsbE9iai5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2xpY2tlZENlbGwgPSB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU5ld0ZpZWxkID0gKCkgPT4ge1xuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZCcpO1xuXG4gIGZpZWxkLmlubmVySFRNTCA9ICcnO1xuICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZC1lYXN5Jyk7XG4gIGZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpZWxkLW1lZGl1bScpO1xuICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZC1oYXJkJyk7XG4gIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLSR7Z2FtZURhdGEuZGlmZmljdWx0eX1gKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVEYXRhLnNpemU7IGkgKz0gMSkge1xuICAgIGNvbnN0IGZpZWxkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmllbGRSb3cuY2xhc3NMaXN0LmFkZCgnZmllbGQtcm93JywgYGZpZWxkLXJvdy0ke2kgKyAxfWApO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKGZpZWxkUm93KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVEYXRhLnNpemU7IGogKz0gMSkge1xuICAgICAgY29uc3QgZmllbGRDZWxsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGVsSUQgPSBpICogZ2FtZURhdGEuc2l6ZSArIGogKyAxO1xuICAgICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbCcsIGBmaWVsZC1jb2x1bW4tJHtqICsgMX1gKTtcbiAgICAgIGZpZWxkQ2VsbEVsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtlbElEfWApO1xuICAgICAgZmllbGRSb3cuYXBwZW5kQ2hpbGQoZmllbGRDZWxsRWwpO1xuXG4gICAgICBmaWVsZENlbGxFbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY2VsbE1vdXNlZG93bkhhbmRsZXIoZXZlbnQsIGZpZWxkQ2VsbEVsKTtcbiAgICAgIH0pO1xuXG4gICAgICBmaWVsZENlbGxFbC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGdhbWVEYXRhLmZpZWxkTWFwW2VsSURdID0gbmV3IEZpZWxkQ2VsbChpICsgMSwgaiArIDEsIGVsSUQpO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVEYXRhLmZpcnN0TW92ZSA9IHRydWU7XG59O1xuXG5jb25zdCBjcmVhdGVBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhcHAuY2xhc3NMaXN0LmFkZCgnYXBwJyk7XG4gIGFwcC5pbm5lckhUTUwgPSBgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5NaW5lc3dlZXBlcjwvaDE+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuICA8bWFpbiBjbGFzcz1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtYmxvY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBuZXctZ2FtZVwiPk5ldyBnYW1lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBsZWFkZXJib2FyZFwiPkxlYWRlcmJvYXJkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIHNhdmUtZ2FtZVwiPlNhdmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIGxvYWQtZ2FtZVwiPkxvYWQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gY29sb3ItdGhlbWVcIj5DaGFuZ2UgdGhlbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIHNvdW5kXCI+U291bmQ6IE9OPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLWJsb2NrXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJzdGF0cy10ZXh0XCI+TW92ZXM6IDxzcGFuIGNsYXNzPVwic3RhdHMtbW92ZXNcIj48L3NwYW4+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwic3RhdHMtdGV4dFwiPlRpbWU6IDxzcGFuIGNsYXNzPVwic3RhdHMtdGltZXJcIj48L3NwYW4+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLWJsb2NrIHN0YXRzLW5ld2dhbWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtc21pbGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1ibG9ja1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwic3RhdHMtdGV4dFwiPk1pbmVzOiA8c3BhbiBjbGFzcz1cInN0YXRzLW1pbmVzXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInN0YXRzLXRleHRcIj5GbGFnczogPHNwYW4gY2xhc3M9XCJzdGF0cy1mbGFnc1wiPjwvc3Bhbj48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzXCI+XG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZpZWxkc2V0XCI+XG4gICAgICAgICAgPGxlZ2VuZCBjbGFzcz1cInNldHRpbmdzLWxlZ2VuZFwiPlNlbGVjdCBhIGRpZmZpY3VsdHkgbGV2ZWw6PC9sZWdlbmQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJlYXN5XCIgbmFtZT1cImRpZmZpY3VsdHlcIiB2YWx1ZT1cImVhc3lcIiBjaGVja2VkPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVhc3lcIj5FYXN5PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1lZGl1bVwiIG5hbWU9XCJkaWZmaWN1bHR5XCIgdmFsdWU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NZWRpdW08L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiaGFyZFwiIG5hbWU9XCJkaWZmaWN1bHR5XCIgdmFsdWU9XCJoYXJkXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGFyZFwiPkhhcmQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1pbmVzXCIgbmFtZT1cIm1pbmVzXCIgbWluPVwiMTBcIiBtYXg9XCI5OVwiIHZhbHVlPVwiMTBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtaW5lc1wiPk51bWJlciBvZiBtaW5lcyAoMTAtOTkpOjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGlhbG9nIGlkPVwiZmF2RGlhbG9nXCI+XG4gICAgICA8Zm9ybSBtZXRob2Q9XCJkaWFsb2dcIj5cbiAgICAgICAgPGRpdiBpZD0nZGlhbG9nLWJsb2NrJz48L2Rpdj5cbiAgICAgICAgPG1lbnU+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlXCIgdHlwZT1cInJlc2V0XCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9tZW51PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGlhbG9nPlxuICA8L21haW4+YDtcblxuICBib2R5LmFwcGVuZENoaWxkKGFwcCk7XG4gIGNyZWF0ZU5ld0ZpZWxkKCk7XG4gIHNldENvdW50ZXJzKCk7XG4gIGNvbnN0IG1pbmVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluZXMnKTtcbiAgbWluZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDEwKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IDEwO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgPiA5OSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSA5OTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlU291bmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNvdW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdW5kJyk7XG4gIGlmIChnYW1lRGF0YS5zb3VuZE9uKSB7XG4gICAgc291bmRCdXR0b24uaW5uZXJIVE1MID0gJ1NvdW5kOiBPRkYnO1xuICAgIGdhbWVEYXRhLnNvdW5kT24gPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBzb3VuZEJ1dHRvbi5pbm5lckhUTUwgPSAnU291bmQ6IE9OJztcbiAgICBnYW1lRGF0YS5zb3VuZE9uID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICBjb25zdCBkaWZmaWN1bHR5U2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGlmZmljdWx0eVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGNvbnN0IG51bWJlck9mTWluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWluZXNcIl0nKS52YWx1ZTtcblxuICBnYW1lRGF0YS5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eVNldHRpbmdzO1xuICBpZiAoZGlmZmljdWx0eVNldHRpbmdzID09PSAnZWFzeScpIHtcbiAgICBnYW1lRGF0YS5zaXplID0gMTA7XG4gIH0gZWxzZSBpZiAoZGlmZmljdWx0eVNldHRpbmdzID09PSAnbWVkaXVtJykge1xuICAgIGdhbWVEYXRhLnNpemUgPSAxNTtcbiAgfSBlbHNlIGlmIChkaWZmaWN1bHR5U2V0dGluZ3MgPT09ICdoYXJkJykge1xuICAgIGdhbWVEYXRhLnNpemUgPSAyNTtcbiAgfVxuICBnYW1lRGF0YS5taW5lcyA9IG51bWJlck9mTWluZXM7XG4gIGdhbWVEYXRhLmZpcnN0TW92ZSA9IHRydWU7XG4gIGdhbWVEYXRhLm1pbmVDZWxscyA9IFtdO1xuICBnYW1lRGF0YS5vcGVuZWRDZWxscyA9IFtdO1xuICBnYW1lRGF0YS5mbGFnZWRDZWxscyA9IFtdO1xuICBnYW1lRGF0YS5maWVsZE1hcCA9IHt9O1xuICBnYW1lRGF0YS5nYW1lZmluaXNoZWQgPSBmYWxzZTtcbiAgZ2FtZURhdGEuZ2FtZVRpbWUgPSAwO1xuICBnYW1lRGF0YS5tb3ZlcyA9IDA7XG4gIGdhbWVEYXRhLm1pbmVzQ291bnRlciA9IG51bWJlck9mTWluZXM7XG5cbiAgc2V0Q291bnRlcnMoKTtcbiAgY3JlYXRlTmV3RmllbGQoKTtcbiAgY2xlYXJJbnRlcnZhbChnYW1lVGltZXIpO1xufTtcblxuY29uc3Qgc2F2ZUdhbWUgPSAoKSA9PiB7XG4gIGlmICghZ2FtZURhdGEuZ2FtZWZpbmlzaGVkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xldjFvc3NhLXNhdmUtZ2FtZURhdGEnLCBKU09OLnN0cmluZ2lmeShnYW1lRGF0YSkpO1xuICAgIHNob3dEaWFsb2coJ0dhbWUgc2F2ZWQhJyk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0RpYWxvZygnWW91IGNhbiBub3Qgc2F2ZSBmaW5pc2hlZCBnYW1lIScpO1xuICB9XG59O1xuXG5jb25zdCBsb2FkR2FtZSA9ICgpID0+IHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXYxb3NzYS1zYXZlLWdhbWVEYXRhJykpIHtcbiAgICBjbGVhckludGVydmFsKGdhbWVUaW1lcik7XG4gICAgY29uc3QgbG9hZEdhbWVEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2MW9zc2Etc2F2ZS1nYW1lRGF0YScpKTtcbiAgICBnYW1lRGF0YS5kaWZmaWN1bHR5ID0gbG9hZEdhbWVEYXRhLmRpZmZpY3VsdHk7XG4gICAgZ2FtZURhdGEuc2l6ZSA9IGxvYWRHYW1lRGF0YS5zaXplO1xuICAgIGdhbWVEYXRhLm1pbmVzID0gbG9hZEdhbWVEYXRhLm1pbmVzO1xuICAgIGdhbWVEYXRhLm1pbmVDZWxscyA9IGxvYWRHYW1lRGF0YS5taW5lQ2VsbHM7XG4gICAgZ2FtZURhdGEub3BlbmVkQ2VsbHMgPSBsb2FkR2FtZURhdGEub3BlbmVkQ2VsbHM7XG4gICAgZ2FtZURhdGEuZmxhZ2VkQ2VsbHMgPSBsb2FkR2FtZURhdGEuZmxhZ2VkQ2VsbHM7XG4gICAgZ2FtZURhdGEuZ2FtZWZpbmlzaGVkID0gbG9hZEdhbWVEYXRhLmdhbWVmaW5pc2hlZDtcbiAgICBnYW1lRGF0YS5nYW1lVGltZSA9IGxvYWRHYW1lRGF0YS5nYW1lVGltZTtcbiAgICBnYW1lRGF0YS5tb3ZlcyA9IGxvYWRHYW1lRGF0YS5tb3ZlcztcbiAgICBnYW1lRGF0YS5taW5lc0NvdW50ZXIgPSBsb2FkR2FtZURhdGEubWluZXNDb3VudGVyO1xuICAgIGlmIChnYW1lRGF0YS5zb3VuZE9uICE9PSBsb2FkR2FtZURhdGEuc291bmRPbikge1xuICAgICAgdG9nZ2xlU291bmQoKTtcbiAgICB9XG4gICAgZ2FtZURhdGEuc291bmRPbiA9IGxvYWRHYW1lRGF0YS5zb3VuZE9uO1xuXG4gICAgY3JlYXRlTmV3RmllbGQoKTtcblxuICAgIGdhbWVEYXRhLmZpcnN0TW92ZSA9IGxvYWRHYW1lRGF0YS5maXJzdE1vdmU7XG4gICAgZ2FtZURhdGEuZmllbGRNYXAgPSBsb2FkR2FtZURhdGEuZmllbGRNYXA7XG5cbiAgICBpZiAoIWdhbWVEYXRhLmZpcnN0TW92ZSkge1xuICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgZ2FtZURhdGEub3BlbmVkQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbaXRlbV07XG4gICAgICAgIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1vcGVuZWQnKTtcbiAgICAgICAgaWYgKGNlbGxPYmoubWluZUFyb3VuZCAhPT0gMCkge1xuICAgICAgICAgIGNlbGxFbC5pbm5lckhUTUwgPSBjZWxsT2JqLm1pbmVBcm91bmQ7XG4gICAgICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoYGNvbG9yLSR7Z2V0Q29sb3IoY2VsbE9iai5taW5lQXJvdW5kKX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBnYW1lRGF0YS5mbGFnZWRDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1mbGFnZ2VkJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRDb3VudGVycygpO1xuICAgIHNob3dEaWFsb2coJ0dhbWUgbG9hZGVkIScpO1xuICB9IGVsc2Uge1xuICAgIHNob3dEaWFsb2coJ1NhdmUgbm90IGZvdW5kIScpO1xuICB9XG59O1xuXG5jb25zdCB0b2dnbGVDb2xvclRoZW1lID0gKCkgPT4ge1xuICBjb25zdCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHlFbC5jbGFzc0xpc3QudG9nZ2xlKCdib2R5LWRhcmsnKTtcbn07XG5cbmNyZWF0ZUFwcCgpO1xuXG5jb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lJyk7XG5jb25zdCBuZXdHYW1lU21pbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtc21pbGUnKTtcbmNvbnN0IHNhdmVHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtZ2FtZScpO1xuY29uc3QgbG9hZEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZC1nYW1lJyk7XG5jb25zdCBsZWFkZXJib2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWFkZXJib2FyZCcpO1xuY29uc3Qgc291bmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291bmQnKTtcbmNvbnN0IGNvbG9yVGhlbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItdGhlbWUnKTtcblxubmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc3RhcnROZXdHYW1lKCk7XG59KTtcblxubmV3R2FtZVNtaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzdGFydE5ld0dhbWUoKTtcbn0pO1xuXG5zYXZlR2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2F2ZUdhbWUoKTtcbn0pO1xuXG5sb2FkR2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbG9hZEdhbWUoKTtcbn0pO1xuXG5sZWFkZXJib2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2hvd0RpYWxvZyhsZWFkZXJCb2FyZEFycik7XG59KTtcblxuc291bmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRvZ2dsZVNvdW5kKCk7XG59KTtcblxuY29sb3JUaGVtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdG9nZ2xlQ29sb3JUaGVtZSgpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gIGNlbGxNb3VzZXVwSGFuZGxlcihldmVudCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==