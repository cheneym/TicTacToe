const app = angular.module('TicTacToe', []);

app.controller('MainController', ['$scope', ($scope) => {
  $scope.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  $scope.player = 'Player 1';
  $scope.hasWinner = false;

  const rowSame = (row, chr, board) => board[row].every(letter => letter === chr);
  const colSame = (col, chr, board) => board.every((row) => row[col] === chr);
  const majorDiagSame = (chr, board) => board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === chr;
  const minorDiagSame = (chr, board) =>  board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] === chr;

  const hasWinner = (row, col, board) => {
    const letter = $scope.player === 'Player 1' ? 'X' : 'O';
    if (rowSame(row, letter, board) || colSame(col, letter, board) ||
        majorDiagSame(letter, board) || minorDiagSame(letter, board)) {
      return true;
    }
    return false;
  }

  $scope.placeItem = (row, col) => {
    if ($scope.board[row][col] === '' && !$scope.hasWinner) {
      $scope.board[row][col] = $scope.player === 'Player 1' ? 'X' : 'O';
      if (hasWinner(row, col, $scope.board)) {
        $scope.hasWinner = true;
      } else {
        $scope.player = $scope.player === 'Player 1' ? 'Player 2' : 'Player 1';      
      }
    }
  };
}]);
