import './style.css';

const body = document.querySelector('body');
// const defaultDifficulty = 'easy';
// const defaultMines = 10;

// const fieldMap;
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
};

const createField = () => {
  const field = document.querySelector('.field');
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
    }
  }
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
  createField();
};

createApp();
