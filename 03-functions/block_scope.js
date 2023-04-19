const x = 100;

if (true) {
  // y belong to this block of code
  const y = 200;
  console.log(x + y);
}

// console.log(x + y);

// var keyword belong to the legacy JS - var is a fucntion code - do not use var

if (true) {
  // we define a var in the block
  var c = 100;
}

console.log(c);
