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







alert('Убедительная просьба не проверять работу в первый день. Болел, доделываю задачу!');

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
    const randomInt = Math.floor(Math.random() * (gameData.size * gameData.size));
    if (randomInt !== 0 && !gameData.mineCells.includes(randomInt)
    && !gameData.openedCells.includes(randomInt)) {
      gameData.mineCells.push(randomInt);
    }
  }

  gameData.mineCells.forEach((item) => {
    console.log(gameData.mineCells);
    console.log(item);
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
  minesEl.innerHTML = gameData.mines;
  flagsEl.innerHTML = gameData.flagedCells.length;
};

const changeMovesCounter = () => {
  const movesEl = document.querySelector('.stats-moves');
  movesEl.innerHTML = +movesEl.innerHTML + 1;
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
      mineImg.setAttribute('src', _assets_icons_mine_svg__WEBPACK_IMPORTED_MODULE_1__);
      mineImg.alt = 'mine image';
      fieldCellEl.appendChild(mineImg);
    });
    // TODO show lose message
    alert(`you lose`);
    playSound('lose');
  } else if (gameResult === 'win') {
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
          <p class="stats-text">New</p>
          <div class="stats-smile"></div>
          <p class="stats-text">game</p>
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
            <input type="number" id="mines" name="mines" min="10" max="100" value="10">
            <label for="mines">Number of mines (10-100):</label>
          </div>
        </fieldset>
        <div class="save-game">Save</div>
        <div class="load-game">Load</div>
      </div>
    </div>
  </main>`;

  body.appendChild(app);
  createNewField();
  setCounters();
  // if (gameLoaded) {
  //   startTimer();
  // }
};

createApp();

window.addEventListener('mouseup', (event) => {
  cellMouseupHandler(event);
});

const minesInput = document.getElementById('mines');
minesInput.addEventListener('change', (e) => {
  console.log(e.target.value);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQjtBQUMyQjtBQUNFO0FBQ0U7QUFDQTtBQUNNOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQVc7QUFDMUM7QUFDQTtBQUNBLElBQUk7QUFDSixnQ0FBZ0Msb0RBQVk7QUFDNUM7QUFDQTtBQUNBLElBQUk7QUFDSixnQ0FBZ0Msb0RBQVk7QUFDNUM7QUFDQTtBQUNBLElBQUk7QUFDSixtQ0FBbUMsdURBQWU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFTO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNENBQTRDLG1CQUFtQixjQUFjLGdCQUFnQjtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrQ0FBa0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLCtCQUErQixvQkFBb0I7O0FBRW5ELGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQSxxREFBcUQsTUFBTTtBQUMzRDtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBLDhEQUE4RCxNQUFNO0FBQ3BFLHdDQUF3QyxLQUFLO0FBQzdDOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG1pbmVJbWFnZSBmcm9tICcuL2Fzc2V0cy9pY29ucy9taW5lLnN2Zyc7XG5pbXBvcnQgd2luU291bmRzcmMgZnJvbSAnLi9hc3NldHMvc291bmRzL3dpbi5tcDMnO1xuaW1wb3J0IHB1c2hTb3VuZHNyYyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvcHVzaC5tcDMnO1xuaW1wb3J0IGxvc2VTb3VuZHNyYyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvbG9zZS5tcDMnO1xuaW1wb3J0IGZsYWdnZWRTb3VuZHNyYyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvZmxhZ2dlZC5tcDMnO1xuXG5hbGVydCgn0KPQsdC10LTQuNGC0LXQu9GM0L3QsNGPINC/0YDQvtGB0YzQsdCwINC90LUg0L/RgNC+0LLQtdGA0Y/RgtGMINGA0LDQsdC+0YLRgyDQsiDQv9C10YDQstGL0Lkg0LTQtdC90YwuINCR0L7Qu9C10LssINC00L7QtNC10LvRi9Cy0LDRjiDQt9Cw0LTQsNGH0YMhJyk7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBkZWZhdWx0RGlmZmljdWx0eSA9ICdlYXN5JztcbmNvbnN0IGRlZmF1bHRNaW5lcyA9IDEwO1xuXG5sZXQgY2xpY2tlZENlbGw7XG5cbmxldCBnYW1lVGltZXI7XG5cbmxldCBnYW1lTG9hZGVkID0gZmFsc2U7XG5cbi8vIFRvZG86IGltcGxlbWVudCBkaWZmaWN1bHR5IGx2bCBhbmQgZ2FtZSBsb2FkXG4vLyBsZXQgY3VycmVudFNpemUgPSAxMDtcbi8vIGxldCBjdXJyZW50TWluZXMgPSAxMDtcbi8vIGxldCBjdXJyZW50RGlmZmljdWx0eSA9ICdlYXN5Jztcbi8vIGxldCBmaXJzdE1vdmUgPSB0cnVlO1xuXG5jb25zdCBnYW1lRGF0YSA9IHtcbiAgZGlmZmljdWx0eTogJ2Vhc3knLFxuICBzaXplOiAxMCxcbiAgbWluZXM6IDEwLFxuICBmaXJzdE1vdmU6IHRydWUsXG4gIG1pbmVDZWxsczogW10sXG4gIG9wZW5lZENlbGxzOiBbXSxcbiAgZmxhZ2VkQ2VsbHM6IFtdLFxuICBmaWVsZE1hcDoge30sXG4gIGdhbWVmaW5pc2hlZDogZmFsc2UsXG4gIGdhbWVUaW1lOiAwLFxuICBtb3ZlczogMCxcbn07XG5cbmNsYXNzIEZpZWxkQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHJvdywgY29sdW1uLCBpZCkge1xuICAgIHRoaXMubWluZUFyb3VuZCA9IDA7XG4gICAgdGhpcy5pc01pbmUgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlID0gJ3Vub3BlbmVkJztcbiAgICB0aGlzLnJvdyA9IHJvdztcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn1cblxuY29uc3QgcGxheVNvdW5kID0gKHNvdW5kKSA9PiB7XG4gIGlmIChzb3VuZCA9PT0gJ3dpbicpIHtcbiAgICBjb25zdCB3aW5Tb3VuZCA9IG5ldyBBdWRpbyh3aW5Tb3VuZHNyYyk7XG4gICAgd2luU291bmQudm9sdW1lID0gMC41O1xuICAgIHdpblNvdW5kLnBsYXkoKTtcbiAgfSBlbHNlIGlmIChzb3VuZCA9PT0gJ3B1c2gnKSB7XG4gICAgY29uc3QgcHVzaFNvdW5kID0gbmV3IEF1ZGlvKHB1c2hTb3VuZHNyYyk7XG4gICAgcHVzaFNvdW5kLnZvbHVtZSA9IDAuNTtcbiAgICBwdXNoU291bmQucGxheSgpO1xuICB9IGVsc2UgaWYgKHNvdW5kID09PSAnbG9zZScpIHtcbiAgICBjb25zdCBsb3NlU291bmQgPSBuZXcgQXVkaW8obG9zZVNvdW5kc3JjKTtcbiAgICBsb3NlU291bmQudm9sdW1lID0gMC41O1xuICAgIGxvc2VTb3VuZC5wbGF5KCk7XG4gIH0gZWxzZSBpZiAoc291bmQgPT09ICdmbGFnZ2VkJykge1xuICAgIGNvbnN0IGZsYWdnZWRTb3VuZCA9IG5ldyBBdWRpbyhmbGFnZ2VkU291bmRzcmMpO1xuICAgIGZsYWdnZWRTb3VuZC52b2x1bWUgPSAwLjU7XG4gICAgZmxhZ2dlZFNvdW5kLnBsYXkoKTtcbiAgfVxufTtcblxuY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcbiAgY29uc3Qgd3JpdGVUaW1lID0gKCkgPT4ge1xuICAgIGlmICghZ2FtZURhdGEuZ2FtZWZpbmlzaGVkKSB7XG4gICAgICBjb25zdCB0aW1lID0gZ2FtZURhdGEuZ2FtZVRpbWU7XG4gICAgICBjb25zdCB0aW1lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLXRpbWVyJyk7XG4gICAgICBnYW1lRGF0YS5nYW1lVGltZSA9IHRpbWUgKyAxO1xuICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSB0aW1lICsgMTtcbiAgICB9XG4gIH07XG4gIGdhbWVUaW1lciA9IHNldEludGVydmFsKHdyaXRlVGltZSwgMTAwMCk7XG59O1xuXG5jb25zdCBnZXROZWlnaGJvdXJzSWRBcnIgPSAoY2VsbCwgY2VsbElEKSA9PiB7XG4gIGNvbnN0IG5laWdoYm91cnNJZEFyciA9IFtdO1xuXG4gIGlmIChjZWxsLnJvdyA9PT0gMSAmJiBjZWxsLmNvbHVtbiA9PT0gMSkge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEICsgMSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUgKyAxLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSxcbiAgICApO1xuICB9IGVsc2UgaWYgKGNlbGwucm93ID09PSAxICYmIGNlbGwuY29sdW1uID09PSBnYW1lRGF0YS5zaXplKSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSAtIDEsXG4gICAgICBjZWxsSUQgLSAxLFxuICAgICk7XG4gIH0gZWxzZSBpZiAoY2VsbC5yb3cgPT09IGdhbWVEYXRhLnNpemUgJiYgY2VsbC5jb2x1bW4gPT09IDEpIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplICsgMSxcbiAgICAgIGNlbGxJRCArIDEsXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjZWxsLnJvdyA9PT0gZ2FtZURhdGEuc2l6ZSAmJiBjZWxsLmNvbHVtbiA9PT0gZ2FtZURhdGEuc2l6ZSkge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSAtIDEsXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEIC0gMSxcbiAgICApO1xuICB9IGVsc2UgaWYgKGNlbGwuY29sdW1uID09PSAxKSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplLFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSArIDEsXG4gICAgICBjZWxsSUQgKyAxLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSArIDEsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplLFxuICAgICk7XG4gIH0gZWxzZSBpZiAoY2VsbC5jb2x1bW4gPT09IGdhbWVEYXRhLnNpemUpIHtcbiAgICBuZWlnaGJvdXJzSWRBcnIucHVzaChcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUgLSAxLFxuICAgICAgY2VsbElEIC0gZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplIC0gMSxcbiAgICAgIGNlbGxJRCAtIDEsXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjZWxsLnJvdyA9PT0gMSkge1xuICAgIG5laWdoYm91cnNJZEFyci5wdXNoKFxuICAgICAgY2VsbElEICsgMSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUgKyAxLFxuICAgICAgY2VsbElEICsgZ2FtZURhdGEuc2l6ZSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUgLSAxLFxuICAgICAgY2VsbElEIC0gMSxcbiAgICApO1xuICB9IGVsc2UgaWYgKGNlbGwucm93ID09PSBnYW1lRGF0YS5zaXplKSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplIC0gMSxcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplICsgMSxcbiAgICAgIGNlbGxJRCArIDEsXG4gICAgICBjZWxsSUQgLSAxLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLnB1c2goXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplIC0gMSxcbiAgICAgIGNlbGxJRCAtIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgLSBnYW1lRGF0YS5zaXplICsgMSxcbiAgICAgIGNlbGxJRCArIDEsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplICsgMSxcbiAgICAgIGNlbGxJRCArIGdhbWVEYXRhLnNpemUsXG4gICAgICBjZWxsSUQgKyBnYW1lRGF0YS5zaXplIC0gMSxcbiAgICAgIGNlbGxJRCAtIDEsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBuZWlnaGJvdXJzSWRBcnI7XG59O1xuXG5jb25zdCBjb3VudE1pbmVzID0gKCkgPT4ge1xuICBnYW1lRGF0YS5taW5lQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1pbmUgPSBnYW1lRGF0YS5maWVsZE1hcFtpdGVtXTtcbiAgICBjb25zdCBuZWlnaGJvdXJzSWRBcnIgPSBnZXROZWlnaGJvdXJzSWRBcnIobWluZSwgaXRlbSk7XG4gICAgbmVpZ2hib3Vyc0lkQXJyLmZvckVhY2goKG5laWdoYm91cklkKSA9PiB7XG4gICAgICBnYW1lRGF0YS5maWVsZE1hcFtuZWlnaGJvdXJJZF0ubWluZUFyb3VuZCArPSAxO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFJhbmRvbU1pbmVzID0gKCkgPT4ge1xuICB3aGlsZSAoZ2FtZURhdGEubWluZUNlbGxzLmxlbmd0aCA8IGdhbWVEYXRhLm1pbmVzKSB7XG4gICAgY29uc3QgcmFuZG9tSW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGdhbWVEYXRhLnNpemUgKiBnYW1lRGF0YS5zaXplKSk7XG4gICAgaWYgKHJhbmRvbUludCAhPT0gMCAmJiAhZ2FtZURhdGEubWluZUNlbGxzLmluY2x1ZGVzKHJhbmRvbUludClcbiAgICAmJiAhZ2FtZURhdGEub3BlbmVkQ2VsbHMuaW5jbHVkZXMocmFuZG9tSW50KSkge1xuICAgICAgZ2FtZURhdGEubWluZUNlbGxzLnB1c2gocmFuZG9tSW50KTtcbiAgICB9XG4gIH1cblxuICBnYW1lRGF0YS5taW5lQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGdhbWVEYXRhLm1pbmVDZWxscyk7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgZ2FtZURhdGEuZmllbGRNYXBbaXRlbV0uaXNNaW5lID0gdHJ1ZTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZ2FtZURhdGEubWluZUNlbGxzKTtcbn07XG5cbmNvbnN0IGFsbENlbGxzQXJlT3BlbiA9ICgpID0+IHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKGdhbWVEYXRhLm9wZW5lZENlbGxzLmxlbmd0aCA8IGdhbWVEYXRhLnNpemUgKiBnYW1lRGF0YS5zaXplIC0gZ2FtZURhdGEubWluZXMpIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHNldENvdW50ZXJzID0gKCkgPT4ge1xuICBjb25zdCBtb3Zlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLW1vdmVzJyk7XG4gIGNvbnN0IHRpbWVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtdGltZXInKTtcbiAgY29uc3QgbWluZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1taW5lcycpO1xuICBjb25zdCBmbGFnc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLWZsYWdzJyk7XG5cbiAgdGltZXJFbC5pbm5lckhUTUwgPSBnYW1lRGF0YS5nYW1lVGltZTtcbiAgbW92ZXNFbC5pbm5lckhUTUwgPSBnYW1lRGF0YS5tb3ZlcztcbiAgbWluZXNFbC5pbm5lckhUTUwgPSBnYW1lRGF0YS5taW5lcztcbiAgZmxhZ3NFbC5pbm5lckhUTUwgPSBnYW1lRGF0YS5mbGFnZWRDZWxscy5sZW5ndGg7XG59O1xuXG5jb25zdCBjaGFuZ2VNb3Zlc0NvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1vdmVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHMtbW92ZXMnKTtcbiAgbW92ZXNFbC5pbm5lckhUTUwgPSArbW92ZXNFbC5pbm5lckhUTUwgKyAxO1xufTtcblxuY29uc3QgYWRkRmxhZyA9IChjZWxsSUQpID0+IHtcbiAgY29uc3QgbWluZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1taW5lcycpO1xuICBjb25zdCBmbGFnc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLWZsYWdzJyk7XG4gIGNvbnN0IGZpZWxkQ2VsbE9iaiA9IGdhbWVEYXRhLmZpZWxkTWFwW2NlbGxJRF07XG4gIGNvbnN0IGZpZWxkQ2VsbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbElEKTtcblxuICBnYW1lRGF0YS5mbGFnZWRDZWxscy5wdXNoKGNlbGxJRCk7XG4gIGZpZWxkQ2VsbE9iai5zdGF0ZSA9ICdmbGFnZ2VkJztcbiAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1mbGFnZ2VkJyk7XG4gIG1pbmVzRWwuaW5uZXJIVE1MID0gK21pbmVzRWwuaW5uZXJIVE1MIC0gMTtcbiAgZmxhZ3NFbC5pbm5lckhUTUwgPSArZmxhZ3NFbC5pbm5lckhUTUwgKyAxO1xuXG4gIHBsYXlTb3VuZCgnZmxhZ2dlZCcpO1xufTtcblxuY29uc3QgcmVtb3ZlRmxhZyA9IChjZWxsSUQpID0+IHtcbiAgY29uc3QgbWluZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0cy1taW5lcycpO1xuICBjb25zdCBmbGFnc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzLWZsYWdzJyk7XG4gIGNvbnN0IGZpZWxkQ2VsbE9iaiA9IGdhbWVEYXRhLmZpZWxkTWFwW2NlbGxJRF07XG4gIGNvbnN0IGZpZWxkQ2VsbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbElEKTtcblxuICBjb25zdCBjZWxsSWR4ID0gZ2FtZURhdGEuZmxhZ2VkQ2VsbHMuaW5kZXhPZihjZWxsSUQpO1xuICBpZiAoY2VsbElkeCAhPT0gLTEpIHtcbiAgICBnYW1lRGF0YS5mbGFnZWRDZWxscy5zcGxpY2UoY2VsbElkeCwgMSk7XG4gIH1cbiAgZmllbGRDZWxsT2JqLnN0YXRlID0gJ3Vub3BlbmVkJztcbiAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LnJlbW92ZSgnZmllbGQtY2VsbC1mbGFnZ2VkJyk7XG4gIG1pbmVzRWwuaW5uZXJIVE1MID0gK21pbmVzRWwuaW5uZXJIVE1MICsgMTtcbiAgZmxhZ3NFbC5pbm5lckhUTUwgPSArZmxhZ3NFbC5pbm5lckhUTUwgLSAxO1xuICBwbGF5U291bmQoJ2ZsYWdnZWQnKTtcbn07XG5cbmNvbnN0IGdhbWVTdGFydCA9IChjZWxsSUQpID0+IHtcbiAgY29uc3QgZmllbGRDZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbY2VsbElEXTtcbiAgZ2FtZURhdGEub3BlbmVkQ2VsbHMucHVzaChmaWVsZENlbGxPYmouaWQpO1xuICBmaWVsZENlbGxPYmouc3RhdGUgPSAnb3BlbmVkJztcbiAgYWRkUmFuZG9tTWluZXMoKTtcbiAgY291bnRNaW5lcygpO1xuICBnYW1lRGF0YS5maXJzdE1vdmUgPSBmYWxzZTtcbiAgc3RhcnRUaW1lcigpO1xufTtcblxuY29uc3QgZ2FtZUVuZCA9IChnYW1lUmVzdWx0LCBjZWxsSUQpID0+IHtcbiAgaWYgKGdhbWVSZXN1bHQgPT09ICdsb3NlJykge1xuICAgIGdhbWVEYXRhLm1pbmVDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZENlbGxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgICAgaWYgKGl0ZW0gPT09IGNlbGxJRCkge1xuICAgICAgICBmaWVsZENlbGxFbC5jbGFzc0xpc3QuYWRkKCdmaWVsZC1jZWxsLW9wZW5lZCcsICdmaWVsZC1jZWxsLW1pbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkQ2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWNlbGwtb3BlbmVkJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBtaW5lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBtaW5lSW1nLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWltZy1taW5lJyk7XG4gICAgICBtaW5lSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbWluZUltYWdlKTtcbiAgICAgIG1pbmVJbWcuYWx0ID0gJ21pbmUgaW1hZ2UnO1xuICAgICAgZmllbGRDZWxsRWwuYXBwZW5kQ2hpbGQobWluZUltZyk7XG4gICAgfSk7XG4gICAgLy8gVE9ETyBzaG93IGxvc2UgbWVzc2FnZVxuICAgIGFsZXJ0KGB5b3UgbG9zZWApO1xuICAgIHBsYXlTb3VuZCgnbG9zZScpO1xuICB9IGVsc2UgaWYgKGdhbWVSZXN1bHQgPT09ICd3aW4nKSB7XG4gICAgLy8gVE9ETyBzaG93IGxvc2UgbWVzc2FnZVxuICAgIGFsZXJ0KGBIb29yYXkhIFlvdSBmb3VuZCBhbGwgbWluZXMgaW4gJHtnYW1lRGF0YS5nYW1lVGltZX0gc2Vjb25kcyBhbmQgJHtnYW1lRGF0YS5tb3Zlc30gbW92ZXMhYCk7XG4gICAgcGxheVNvdW5kKCd3aW4nKTtcbiAgfVxuXG4gIGdhbWVEYXRhLmdhbWVmaW5pc2hlZCA9IHRydWU7XG4gIGNsZWFySW50ZXJ2YWwoZ2FtZVRpbWVyKTtcbn07XG5cbmNvbnN0IGdldENvbG9yID0gKG51bWJlck9mTWluZXMpID0+IHtcbiAgbGV0IGNvbG9yO1xuICBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gMSkge1xuICAgIGNvbG9yID0gJ2JsdWUnO1xuICB9IGVsc2UgaWYgKG51bWJlck9mTWluZXMgPT09IDIpIHtcbiAgICBjb2xvciA9ICdncmVlbic7XG4gIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gMykge1xuICAgIGNvbG9yID0gJ3JlZCc7XG4gIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gNCkge1xuICAgIGNvbG9yID0gJ2RhcmtibHVlJztcbiAgfSBlbHNlIGlmIChudW1iZXJPZk1pbmVzID09PSA1KSB7XG4gICAgY29sb3IgPSAnYnJvd24nO1xuICB9IGVsc2UgaWYgKG51bWJlck9mTWluZXMgPT09IDYpIHtcbiAgICBjb2xvciA9ICdhcXVhJztcbiAgfSBlbHNlIGlmIChudW1iZXJPZk1pbmVzID09PSA3KSB7XG4gICAgY29sb3IgPSAnZ3JheSc7XG4gIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW5lcyA9PT0gOCkge1xuICAgIGNvbG9yID0gJ2RhcmtncmF5JztcbiAgfVxuXG4gIHJldHVybiBjb2xvcjtcbn07XG5cbmNvbnN0IGNlbGxPcGVuID0gKGNlbGxJRCkgPT4ge1xuICBjb25zdCBmaWVsZENlbGxPYmogPSBnYW1lRGF0YS5maWVsZE1hcFtjZWxsSURdO1xuICBjb25zdCBmaWVsZENlbGxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkQ2VsbE9iai5pZCk7XG4gIGlmIChnYW1lRGF0YS5maXJzdE1vdmUpIHtcbiAgICBnYW1lU3RhcnQoZmllbGRDZWxsT2JqLmlkKTtcbiAgfVxuICBpZiAoZmllbGRDZWxsT2JqLmlzTWluZSkge1xuICAgIGdhbWVFbmQoJ2xvc2UnLCBjZWxsSUQpO1xuICB9IGVsc2Uge1xuICAgIGlmIChmaWVsZENlbGxPYmouc3RhdGUgIT09ICdvcGVuZWQnKSB7XG4gICAgICBnYW1lRGF0YS5vcGVuZWRDZWxscy5wdXNoKGZpZWxkQ2VsbE9iai5pZCk7XG4gICAgICBmaWVsZENlbGxPYmouc3RhdGUgPSAnb3BlbmVkJztcbiAgICB9XG4gICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1vcGVuZWQnKTtcbiAgICBpZiAoZmllbGRDZWxsT2JqLm1pbmVBcm91bmQgIT09IDApIHtcbiAgICAgIGZpZWxkQ2VsbEVsLmlubmVySFRNTCA9IGZpZWxkQ2VsbE9iai5taW5lQXJvdW5kO1xuICAgICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZChgY29sb3ItJHtnZXRDb2xvcihmaWVsZENlbGxPYmoubWluZUFyb3VuZCl9YCk7XG4gICAgfVxuICAgIGlmIChhbGxDZWxsc0FyZU9wZW4oKSkge1xuICAgICAgZ2FtZUVuZCgnd2luJywgY2VsbElEKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5OZWlnaGJvdXJzQ2VsbHMgPSAoY3VycmVudENlbGxJRCkgPT4ge1xuICBjb25zdCBuZWlnaGJvdXJzQXJyID0gZ2V0TmVpZ2hib3Vyc0lkQXJyKGdhbWVEYXRhLmZpZWxkTWFwW2N1cnJlbnRDZWxsSURdLCBjdXJyZW50Q2VsbElEKTtcbiAgbmVpZ2hib3Vyc0Fyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgdGhpc0NlbGwgPSBnYW1lRGF0YS5maWVsZE1hcFtpdGVtXTtcbiAgICBpZiAoIXRoaXNDZWxsLmlzTWluZSAmJiB0aGlzQ2VsbC5zdGF0ZSAhPT0gJ29wZW5lZCcgJiYgdGhpc0NlbGwuc3RhdGUgIT09ICdmbGFnZ2VkJykge1xuICAgICAgY2VsbE9wZW4oaXRlbSk7XG4gICAgICBpZiAodGhpc0NlbGwubWluZUFyb3VuZCA9PT0gMCkge1xuICAgICAgICBvcGVuTmVpZ2hib3Vyc0NlbGxzKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjZWxsTW91c2Vkb3duSGFuZGxlciA9IChldmVudCwgZmllbGRDZWxsRWwpID0+IHtcbiAgY29uc3QgZmllbGRDZWxsT2JqID0gZ2FtZURhdGEuZmllbGRNYXBbZmllbGRDZWxsRWwuaWRdO1xuICAvLyBjb25zb2xlLmxvZyhmaWVsZENlbGxPYmouc3RhdGUgIT09ICdvcGVuZWQnKTtcbiAgaWYgKCFnYW1lRGF0YS5nYW1lZmluaXNoZWQgJiYgZmllbGRDZWxsT2JqLnN0YXRlICE9PSAnb3BlbmVkJykge1xuICAgIGNsaWNrZWRDZWxsID0gZmllbGRDZWxsRWw7XG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAxICYmIGZpZWxkQ2VsbE9iai5zdGF0ZSAhPT0gJ2ZsYWdnZWQnKSB7XG4gICAgICBjb25zb2xlLmxvZygnbGVmdE1vdXNlRG93bicpO1xuICAgICAgZmllbGRDZWxsRWwuY2xhc3NMaXN0LmFkZCgnZmllbGQtY2VsbC1hY3RpdmUnKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSAzKSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHRNb3VzZURvd24nKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNlbGxNb3VzZXVwSGFuZGxlciA9IChldmVudCkgPT4ge1xuICBpZiAoY2xpY2tlZENlbGwpIHtcbiAgICBjb25zdCBmaWVsZENlbGxPYmogPSBnYW1lRGF0YS5maWVsZE1hcFtjbGlja2VkQ2VsbC5pZF07XG4gICAgaWYgKCFnYW1lRGF0YS5nYW1lZmluaXNoZWQgJiYgZmllbGRDZWxsT2JqLnN0YXRlICE9PSAnb3BlbmVkJykge1xuICAgICAgLy8gY29uc29sZS5sb2coZmllbGRDZWxsT2JqKTtcbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gMSAmJiBmaWVsZENlbGxPYmouc3RhdGUgIT09ICdmbGFnZ2VkJykge1xuICAgICAgICBjb25zb2xlLmxvZygnbGVmdE1vdXNlVXAnKTtcbiAgICAgICAgY2xpY2tlZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZmllbGQtY2VsbC1hY3RpdmUnKTtcbiAgICAgICAgY2VsbE9wZW4oZmllbGRDZWxsT2JqLmlkKTtcbiAgICAgICAgb3Blbk5laWdoYm91cnNDZWxscyhmaWVsZENlbGxPYmouaWQpO1xuICAgICAgICBjaGFuZ2VNb3Zlc0NvdW50ZXIoKTtcbiAgICAgICAgcGxheVNvdW5kKCdwdXNoJyk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyaWdodE1vdXNlVXAnKTtcbiAgICAgICAgaWYgKGZpZWxkQ2VsbE9iai5zdGF0ZSA9PT0gJ3Vub3BlbmVkJyAmJiAhZ2FtZURhdGEuZmlyc3RNb3ZlKSB7XG4gICAgICAgICAgYWRkRmxhZyhmaWVsZENlbGxPYmouaWQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkQ2VsbE9iai5zdGF0ZSA9PT0gJ2ZsYWdnZWQnKSB7XG4gICAgICAgICAgcmVtb3ZlRmxhZyhmaWVsZENlbGxPYmouaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNsaWNrZWRDZWxsID0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVOZXdGaWVsZCA9ICgpID0+IHtcbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQnKTtcblxuICBmaWVsZC5pbm5lckhUTUwgPSAnJztcblxuICBmaWVsZC5jbGFzc0xpc3QuYWRkKGBmaWVsZC0ke2dhbWVEYXRhLmRpZmZpY3VsdHl9YCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lRGF0YS5zaXplOyBpICs9IDEpIHtcbiAgICBjb25zdCBmaWVsZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpZWxkUm93LmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLXJvdycsIGBmaWVsZC1yb3ctJHtpICsgMX1gKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChmaWVsZFJvdyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lRGF0YS5zaXplOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGZpZWxkQ2VsbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBlbElEID0gaSAqIGdhbWVEYXRhLnNpemUgKyBqICsgMTtcbiAgICAgIGZpZWxkQ2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWNlbGwnLCBgZmllbGQtY29sdW1uLSR7aiArIDF9YCk7XG4gICAgICBmaWVsZENlbGxFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7ZWxJRH1gKTtcbiAgICAgIGZpZWxkUm93LmFwcGVuZENoaWxkKGZpZWxkQ2VsbEVsKTtcblxuICAgICAgZmllbGRDZWxsRWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNlbGxNb3VzZWRvd25IYW5kbGVyKGV2ZW50LCBmaWVsZENlbGxFbCk7XG4gICAgICB9KTtcblxuICAgICAgZmllbGRDZWxsRWwuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBnYW1lRGF0YS5maWVsZE1hcFtlbElEXSA9IG5ldyBGaWVsZENlbGwoaSArIDEsIGogKyAxLCBlbElEKTtcbiAgICB9XG4gIH1cblxuICBnYW1lRGF0YS5maXJzdE1vdmUgPSB0cnVlO1xufTtcblxuY29uc3QgY3JlYXRlQXBwID0gKCkgPT4ge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYXBwLmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xuICBhcHAuaW5uZXJIVE1MID0gYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+TWluZXN3ZWVwZXI8L2gxPlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbiAgPG1haW4gY2xhc3M9XCJtYWluXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4td3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1ibG9ja1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwic3RhdHMtdGV4dFwiPk1vdmVzOiA8c3BhbiBjbGFzcz1cInN0YXRzLW1vdmVzXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInN0YXRzLXRleHRcIj5UaW1lOiA8c3BhbiBjbGFzcz1cInN0YXRzLXRpbWVyXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1ibG9jayBzdGF0cy1uZXdnYW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJzdGF0cy10ZXh0XCI+TmV3PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1zbWlsZVwiPjwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwic3RhdHMtdGV4dFwiPmdhbWU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtYmxvY2tcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInN0YXRzLXRleHRcIj5NaW5lczogPHNwYW4gY2xhc3M9XCJzdGF0cy1taW5lc1wiPjwvc3Bhbj48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJzdGF0cy10ZXh0XCI+RmxhZ3M6IDxzcGFuIGNsYXNzPVwic3RhdHMtZmxhZ3NcIj48L3NwYW4+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nc1wiPlxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZXR0aW5ncy1maWVsZHNldFwiPlxuICAgICAgICAgIDxsZWdlbmQgY2xhc3M9XCJzZXR0aW5ncy1sZWdlbmRcIj5TZWxlY3QgYSBkaWZmaWN1bHR5IGxldmVsOjwvbGVnZW5kPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1pbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZWFzeVwiIG5hbWU9XCJkaWZmaWN1bHR5XCIgdmFsdWU9XCJlYXN5XCIgY2hlY2tlZD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlYXN5XCI+RWFzeTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtZWRpdW1cIiBuYW1lPVwiZGlmZmljdWx0eVwiIHZhbHVlPVwibWVkaXVtXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImhhcmRcIiBuYW1lPVwiZGlmZmljdWx0eVwiIHZhbHVlPVwiaGFyZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhhcmRcIj5IYXJkPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtaW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtaW5lc1wiIG5hbWU9XCJtaW5lc1wiIG1pbj1cIjEwXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCIxMFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1pbmVzXCI+TnVtYmVyIG9mIG1pbmVzICgxMC0xMDApOjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYXZlLWdhbWVcIj5TYXZlPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkLWdhbWVcIj5Mb2FkPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9tYWluPmA7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChhcHApO1xuICBjcmVhdGVOZXdGaWVsZCgpO1xuICBzZXRDb3VudGVycygpO1xuICAvLyBpZiAoZ2FtZUxvYWRlZCkge1xuICAvLyAgIHN0YXJ0VGltZXIoKTtcbiAgLy8gfVxufTtcblxuY3JlYXRlQXBwKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gIGNlbGxNb3VzZXVwSGFuZGxlcihldmVudCk7XG59KTtcblxuY29uc3QgbWluZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5lcycpO1xubWluZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==