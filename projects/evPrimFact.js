// prime factor

function evPrimFact(number) {
  var numbArray = [];

  for (var i = 2; i <= number; i++) {
    if (number % i === 0) {
      numbArray.push(i);
      number = number / i;
      i = 1;
    }
  }
  console.log(numbArray);
}
evPrimFact(600851475143);
