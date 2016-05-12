$(document).ready(function() {
  var turn = 0;
  $('.box').click(function() {
    var boxText = $(this).text();
      if (turn % 2 !== 0 && boxText === "") {
        $(this).text("X").addClass("text");
        turn++;
      } else if (turn % 2 === 0 && boxText === "") {
        $(this).text("O").addClass("text");
        turn++;
      }
  });
});
