var winningCombos = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2]
];
//function takes the board and returns the winner X, O, or null
function checkWinner(board) {
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (playerOccupiesCircles('X', combo, board)) {
      updateScoreboard();
      return 'X';
    }
    if (playerOccupiesCircles('O', combo, board)) {
      updateScoreboard();
      return 'O';
    }
  }
  return null;
}


//function takes a player, a winning combo
function playerOccupiesCircles(player, circles, board) {
  for (var i = 0; i < circles.length; i++) {
    var idx = circles[i]
    var value = board[idx];
    if (value !== player) {
      return false;
    }
  }
  return true;
}

//function that returns an array consisting of the current moves on the board
function getCurrentBoard() {
  var boxes = $('.box');
  var moves = [];
  for (var i = 0; i < boxes.length; i++) {
    var box = $(boxes[i]);
    moves.push(box.text());
  }
  return moves;
}

var winsO = 0;
var winsX = 0;
var draws = 0;
var turn = 0;


$(document).ready(function() {
  $('.box').click(function() {
    var boxText = $(this).text();
      if (turn % 2 !== 0 && boxText === "") {
        $(this).text("X").addClass("text");
        turn++;
      } else if (turn % 2 === 0 && boxText === "") {
        $(this).text("O").addClass("text");
        turn++;
      }
      var board = getCurrentBoard();
      var winner = checkWinner(board);
      if (winner) {
        if (winner === "O") {
          winsO++;
        } else {
          winsX++;
        }
        $('.winner')
          .text("The winner is " + winner + "!")
          .show();
        updateScoreboard();
        $('.box').prop("disabled", true)
      } else if (turn >= 9) {
        draws++;
        $('.draw')
          .text("The match is a draw!")
          .show();
        $('.box').prop("disabled", true)
      }
  });
  $('.button').click(function() {
    resetGame();
  })
});

function updateScoreboard() {
  $('.scoreboard1').text('SCOREBOARD');
  $('.scoreboard').text('X: ' + winsX + ' || O: ' + winsO + ' || Draws: ' + draws);
}

function resetGame() {
  turn = 0;
  $('.box').prop("disabled", false)
  $('.box').text("");
  $('.winner').hide();
  $('.hide').hide();
}
