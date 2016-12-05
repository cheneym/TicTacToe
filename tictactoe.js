const prompt = require('prompt');

const board = [];
for (let i = 0; i < 3; i++) {
  board[i] = [];
  for (let j = 0; j < 3; j++) {
    board[i][j] = ' ';
  }
}

let p1Turn = true;

const promptUser = () => {
  if (p1Turn) {
    console.log('It is player 1\'s turn');
  } else {
    console.log('It is player 2\'s turn');
  }
  prompt.start();
  prompt.get(['xPosition', 'yPosition'], (err, result) => {
    if (err) { return err; }
    const x = +result.xPosition;
    const y = +result.yPosition;
    if (x > 2 || x < 0 || y > 2 || y < 0) {
      console.log('Invalid coordinates');
      promptUser();
    } else if (!positionChecker(x, y)) {
      console.log('Coordinates are taken');
      promptUser();
    } else {
      updateBoard(x, y);
    }
  });
}

const startGame = () => {
  displayBoard();
  promptUser();
};

const positionChecker = (x, y) => {
  if (board[2-y][x] === ' ') {
    return true;
  } else {
    return false;
  }
}

const existWinner = () => {
  let numX = 0;
  let numO = 0;
  for (let i = 0; i < 3; i++) {
    numX = 0;
    numO = 0;
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'X') { numX++; }
      if (board[i][j] === 'O') { numO++; }
      if (numX === 3) { return 'Player1'; }
      if (numO === 3) { return 'Player2'; }
    }
  }
  for (let j = 0; j < 3; j++) {
    numX = 0;
    numO = 0;
    for (let i = 0; i < 3; i++) {
      if (board[i][j] === 'X') { numX++; }
      if (board[i][j] === 'O') { numO++; }
      if (numX === 3) { return 'Player1'; }
      if (numO === 3) { return 'Player2'; }
    }
  }
  if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] === 'X')) {
    return 'Player1';
  }
  if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] === 'X')) {
    return 'Player1';
  }
  if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] === 'Y')) {
    return 'Player2';
  }
  if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] === 'Y')) {
    return 'Player2';
  }
  return false;
}

const updateBoard = (x, y) => {
  if (p1Turn) {
    board[2-y][x] = 'X';
    p1Turn = false;
  } else {
    board[2-y][x] = 'O';
    p1Turn = true;
  }
  if (existWinner() === 'Player1') {
    displayBoard();
    console.log('Player1 Wins');
  } else if (existWinner() === 'Player2') {
    displayBoard();
    console.log('Player2 Wins');
  } else {
    startGame();
  }
};

const displayBoard = () => {
  const boardDisplay = `-------
|${board[0][0]}|${board[0][1]}|${board[0][2]}|
-------
|${board[1][0]}|${board[1][1]}|${board[1][2]}|
-------
|${board[2][0]}|${board[2][1]}|${board[2][2]}|
-------`;
  console.log(boardDisplay);

};

startGame();
