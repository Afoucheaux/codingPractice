// Lg. Palindrome project.

function lgPalindrome(num) {

  var numbArray = [1];

  for (var i = num; i > 0; i--) {
    for (var j = num; j > 0; j--) {
      var product = i * j;
      if (product.toString() === product.toString().split("").reverse().join("") && product > numbArray[0]) {
        numbArray.splice(0, 1, product);
      }
    }
  }
  console.log(numbArray);
}
lgPalindrome(999);

/*
var test = 123;
console.log(test.toString().split("").reverse().join(""));
*/
