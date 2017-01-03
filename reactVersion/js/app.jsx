// import React from 'react';
// import ReactDOM from 'react-dom';

const VictoryMessage = props => (
  <div className="message">Player {props.player} wins!</div>
);

const Tile = props => (
  <div className="tile" onClick={props.clickHandler}>{props.value}</div>
);

const Board = props => (
  <div className="board">
    {
      props.board.map((row, rowIndex) => (
        <div className="row">
          {
            row.map((value, colIndex) => (
              <Tile clickHandler={() => { props.clickHandler(rowIndex, colIndex); }} value={value} />
            ))
          }
        </div>
      ))
    }
  </div>
);

const rowSame = (row, board) => board[row].every(letter => (letter !== '') && (letter === board[row][0]));
const colSame = (col, board) => board.every(row => (row[col] !== '') && (row[col] === board[0][col]));
const majorDiagSame = board => (board[0][0] !== '') && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2]);
const minorDiagSame = board => (board[0][2] !== '') && (board[0][2] === board[1][1]) && (board[1][1] === board[2][0]);

const hasWinner = (row, col, board) => {
  if (rowSame(row, board) || colSame(col, board) ||
      majorDiagSame(board) || minorDiagSame(board)) {
    return true;
  }
  return false;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: 1,
      gameOver: false,
    };
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(row, col) {
    if (this.board[row][col] === '' && !this.state.gameOver) {
      this.board[row][col] = this.state.player === 1 ? 'X' : 'O';
      if (hasWinner(row, col, this.board)) {
        this.setState({ gameOver: true });
      } else {
        const newPlayer = this.state.player === 1 ? 2 : 1;
        this.setState({ player: newPlayer });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Board board={this.board} clickHandler={this.clickHandler} />
        {
          this.state.gameOver ? <VictoryMessage player={this.state.player} /> : null
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// VictoryMessage.propTypes = {
//   player: React.propType.number,
// };

// Tile.propTypes = {
//   clickHandler: React.propTypes.func,
//   value: React.propTypes.number,
// };

// Board.propTypes = {
//   board: React.propTypes.arrayOf(React.propTypes.arrayOf(React.propTypes.string)),
// };
