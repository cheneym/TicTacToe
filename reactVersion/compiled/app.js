"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import ReactDOM from 'react-dom';

var VictoryMessage = function VictoryMessage(props) {
  return React.createElement(
    "div",
    { className: "message" },
    "Player ",
    props.player,
    " wins!"
  );
};

var Tile = function Tile(props) {
  return React.createElement(
    "div",
    { className: "tile", onClick: props.clickHandler },
    props.value
  );
};

var Board = function Board(props) {
  return React.createElement(
    "div",
    { className: "board" },
    props.board.map(function (row, rowIndex) {
      return React.createElement(
        "div",
        { className: "row" },
        row.map(function (value, colIndex) {
          return React.createElement(Tile, { clickHandler: function clickHandler() {
              props.clickHandler(rowIndex, colIndex);
            }, value: value });
        })
      );
    })
  );
};

var rowSame = function rowSame(row, board) {
  return board[row].every(function (letter) {
    return letter !== '' && letter === board[row][0];
  });
};
var colSame = function colSame(col, board) {
  return board.every(function (row) {
    return row[col] !== '' && row[col] === board[0][col];
  });
};
var majorDiagSame = function majorDiagSame(board) {
  return board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2];
};
var minorDiagSame = function minorDiagSame(board) {
  return board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0];
};

var hasWinner = function hasWinner(row, col, board) {
  if (rowSame(row, board) || colSame(col, board) || majorDiagSame(board) || minorDiagSame(board)) {
    return true;
  }
  return false;
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      player: 1,
      gameOver: false
    };
    _this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    _this.clickHandler = _this.clickHandler.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "clickHandler",
    value: function clickHandler(row, col) {
      if (this.board[row][col] === '' && !this.state.gameOver) {
        this.board[row][col] = this.state.player === 1 ? 'X' : 'O';
        if (hasWinner(row, col, this.board)) {
          this.setState({ gameOver: true });
        } else {
          var newPlayer = this.state.player === 1 ? 2 : 1;
          this.setState({ player: newPlayer });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(Board, { board: this.board, clickHandler: this.clickHandler }),
        this.state.gameOver ? React.createElement(VictoryMessage, { player: this.state.player }) : null
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL2FwcC5qc3giXSwibmFtZXMiOlsiVmljdG9yeU1lc3NhZ2UiLCJwcm9wcyIsInBsYXllciIsIlRpbGUiLCJjbGlja0hhbmRsZXIiLCJ2YWx1ZSIsIkJvYXJkIiwiYm9hcmQiLCJtYXAiLCJyb3ciLCJyb3dJbmRleCIsImNvbEluZGV4Iiwicm93U2FtZSIsImV2ZXJ5IiwibGV0dGVyIiwiY29sU2FtZSIsImNvbCIsIm1ham9yRGlhZ1NhbWUiLCJtaW5vckRpYWdTYW1lIiwiaGFzV2lubmVyIiwiQXBwIiwic3RhdGUiLCJnYW1lT3ZlciIsImJpbmQiLCJzZXRTdGF0ZSIsIm5ld1BsYXllciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FDckI7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQUE7QUFBaUNDLFVBQU1DLE1BQXZDO0FBQUE7QUFBQSxHQURxQjtBQUFBLENBQXZCOztBQUlBLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBVSxNQUFmLEVBQXNCLFNBQVNGLE1BQU1HLFlBQXJDO0FBQW9ESCxVQUFNSTtBQUExRCxHQURXO0FBQUEsQ0FBYjs7QUFJQSxJQUFNQyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVUsT0FBZjtBQUVJTCxVQUFNTSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsR0FBRCxFQUFNQyxRQUFOO0FBQUEsYUFDZDtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFFSUQsWUFBSUQsR0FBSixDQUFRLFVBQUNILEtBQUQsRUFBUU0sUUFBUjtBQUFBLGlCQUNOLG9CQUFDLElBQUQsSUFBTSxjQUFjLHdCQUFNO0FBQUVWLG9CQUFNRyxZQUFO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LEtBQUwsQ0FBV25CLE1BQVgsS0FBc0IsQ0FBdEIsR0FBMEIsQ0FBMUIsR0FBOEIsQ0FBaEQ7QUFDQSxlQUFLc0IsUUFBTCxDQUFjLEVBQUV0QixRQUFRdUIsU0FBVixFQUFkO0FBQ0Q7QUFDRjtBQUNGOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFLDRCQUFDLEtBQUQsSUFBTyxPQUFPLEtBQUtsQixLQUFuQixFQUEwQixjQUFjLEtBQUtILFlBQTdDLEdBREY7QUFHSSxhQUFLaUIsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLG9CQUFDLGNBQUQsSUFBZ0IsUUFBUSxLQUFLRCxLQUFMLENBQVduQixNQUFuQyxHQUF0QixHQUFzRTtBQUgxRSxPQURGO0FBUUQ7Ozs7RUFwQ2V3QixNQUFNQyxTOztBQXVDeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgVmljdG9yeU1lc3NhZ2UgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlBsYXllciB7cHJvcHMucGxheWVyfSB3aW5zITwvZGl2PlxuKTtcblxuY29uc3QgVGlsZSA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlXCIgb25DbGljaz17cHJvcHMuY2xpY2tIYW5kbGVyfT57cHJvcHMudmFsdWV9PC9kaXY+XG4pO1xuXG5jb25zdCBCb2FyZCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgIHtcbiAgICAgIHByb3BzLmJvYXJkLm1hcCgocm93LCByb3dJbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvdy5tYXAoKHZhbHVlLCBjb2xJbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8VGlsZSBjbGlja0hhbmRsZXI9eygpID0+IHsgcHJvcHMuY2xpY2tIYW5kbGVyKHJvd0luZGV4LCBjb2xJbmRleCk7IH19IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpXG4gICAgfVxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IHJvd1NhbWUgPSAocm93LCBib2FyZCkgPT4gYm9hcmRbcm93XS5ldmVyeShsZXR0ZXIgPT4gKGxldHRlciAhPT0gJycpICYmIChsZXR0ZXIgPT09IGJvYXJkW3Jvd11bMF0pKTtcbmNvbnN0IGNvbFNhbWUgPSAoY29sLCBib2FyZCkgPT4gYm9hcmQuZXZlcnkocm93ID0+IChyb3dbY29sXSAhPT0gJycpICYmIChyb3dbY29sXSA9PT0gYm9hcmRbMF1bY29sXSkpO1xuY29uc3QgbWFqb3JEaWFnU2FtZSA9IGJvYXJkID0+IChib2FyZFswXVswXSAhPT0gJycpICYmIChib2FyZFswXVswXSA9PT0gYm9hcmRbMV1bMV0pICYmIChib2FyZFsxXVsxXSA9PT0gYm9hcmRbMl1bMl0pO1xuY29uc3QgbWlub3JEaWFnU2FtZSA9IGJvYXJkID0+IChib2FyZFswXVsyXSAhPT0gJycpICYmIChib2FyZFswXVsyXSA9PT0gYm9hcmRbMV1bMV0pICYmIChib2FyZFsxXVsxXSA9PT0gYm9hcmRbMl1bMF0pO1xuXG5jb25zdCBoYXNXaW5uZXIgPSAocm93LCBjb2wsIGJvYXJkKSA9PiB7XG4gIGlmIChyb3dTYW1lKHJvdywgYm9hcmQpIHx8IGNvbFNhbWUoY29sLCBib2FyZCkgfHxcbiAgICAgIG1ham9yRGlhZ1NhbWUoYm9hcmQpIHx8IG1pbm9yRGlhZ1NhbWUoYm9hcmQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWVyOiAxLFxuICAgICAgZ2FtZU92ZXI6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgIFsnJywgJycsICcnXSxcbiAgICAgIFsnJywgJycsICcnXSxcbiAgICAgIFsnJywgJycsICcnXSxcbiAgICBdO1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihyb3csIGNvbCkge1xuICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PT0gJycgJiYgIXRoaXMuc3RhdGUuZ2FtZU92ZXIpIHtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gdGhpcy5zdGF0ZS5wbGF5ZXIgPT09IDEgPyAnWCcgOiAnTyc7XG4gICAgICBpZiAoaGFzV2lubmVyKHJvdywgY29sLCB0aGlzLmJvYXJkKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2FtZU92ZXI6IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdQbGF5ZXIgPSB0aGlzLnN0YXRlLnBsYXllciA9PT0gMSA/IDIgOiAxO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGxheWVyOiBuZXdQbGF5ZXIgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Qm9hcmQgYm9hcmQ9e3RoaXMuYm9hcmR9IGNsaWNrSGFuZGxlcj17dGhpcy5jbGlja0hhbmRsZXJ9IC8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmdhbWVPdmVyID8gPFZpY3RvcnlNZXNzYWdlIHBsYXllcj17dGhpcy5zdGF0ZS5wbGF5ZXJ9IC8+IDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4vLyBWaWN0b3J5TWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4vLyAgIHBsYXllcjogUmVhY3QucHJvcFR5cGUubnVtYmVyLFxuLy8gfTtcblxuLy8gVGlsZS5wcm9wVHlwZXMgPSB7XG4vLyAgIGNsaWNrSGFuZGxlcjogUmVhY3QucHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHZhbHVlOiBSZWFjdC5wcm9wVHlwZXMubnVtYmVyLFxuLy8gfTtcblxuLy8gQm9hcmQucHJvcFR5cGVzID0ge1xuLy8gICBib2FyZDogUmVhY3QucHJvcFR5cGVzLmFycmF5T2YoUmVhY3QucHJvcFR5cGVzLmFycmF5T2YoUmVhY3QucHJvcFR5cGVzLnN0cmluZykpLFxuLy8gfTtcbiJdfQ==