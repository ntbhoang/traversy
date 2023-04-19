const firstName = "Max";
const lastName = "Nguyen";
const age = 38;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person);

// Destructing
const todo = {
  id: 1,
  title: "Take out thrash",
  user: {
    name: "Max",
  },
};

const {
  id,
  title,
  user: { name },
} = todo; // take the name property from the user

console.log(`${id} - ${title}`);
console.log(user);

// Destructing an array
const numbers = [124, 4534, 543, 35];
const [firstNumber, secondNumber, ...remainingNumbers] = numbers;
