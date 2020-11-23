//Checkerboard project.
function checkerBoard(number) {

  for (var i = 1; i <= number; i++) {
    var rowArray = [];

    if (i % 2 === 0) {
      for (var j = 1; j <= number; j++) {
        if (j % 2 === 0) {
          rowArray.push(" ");
        } else {
          rowArray.push("x");
        }
      }
    } else {
        for (var j = 1; j <= number; j++) {
          if (j % 2 === 0) {
            rowArray.push("x");
        } else {
          rowArray.push(" ");
        }
      }
    }
    console.log(rowArray.join(""));
  }
}
checkerBoard(12);
// note test
