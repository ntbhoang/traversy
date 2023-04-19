// usage exmaple - you have a list of items need to purchased
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (previousValue, currrentValue) {
  return previousValue + currrentValue;
}, 0); // 0 is initial value, start at 0

// Using the for loop
const sumUsingFor = () => {
  let accumulator = 0;
  for (const current of numbers) accumulator += current;
  return accumulator;
};

// shopping cart
const cart = [
  { id: 1, name: "Product 1", price: 1130 },
  { id: 2, name: "Product 2", price: 500 },
  { id: 3, name: "Product 3", price: 6789 },
];

const totalPrice = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);
console.log(totalPrice);
