const email = "test@test.com";

if (email) console.log("You passed in an email!");

console.log(typeof email);
console.log(Boolean(email)); // True - this is because a string with value is considered as trusty value

// Falsy

const x = false;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}
