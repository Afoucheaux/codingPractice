
function multiples(number) {
  add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
  };

  var threeOrFive = [];

  for (var i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      threeOrFive.push(i);
    }
  }

  var sum = add(threeOrFive);
  console.log(sum);
}
multiples(1000);
