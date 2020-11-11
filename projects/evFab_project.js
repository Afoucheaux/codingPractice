// Even fibonacci numbers

function evFibNum() {
  var a = 1;
  var b = 2;
  var numbArray = [];

  for (var i = 0; i <= 30; i++) {

     var c = a + b;
     var a = b;
     var b = c;
     if (c % 2 === 0) {
     numbArray.push(c);
   }
  }

   console.log(numbArray);
}

evFibNum();
