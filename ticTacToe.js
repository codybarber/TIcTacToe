$(document).ready(function() {
  var turn = 0;
  $('.box').click(function() {
    turn++;
    var boxText = $(this).text();
      if (turn % 2 !== 0 && boxText === "") {
        $(this).text("X");
      } else if (turn % 2 === 0 && boxText === "") {
        $(this).text("O");
      }
  });
});
