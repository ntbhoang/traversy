const todo = new Object();

todo.id = 1;
todo.name = "Buy Milks";
todo.completed = false;

const person = {
  address: {
    street: "123 Main Street",
    city: "New York",
  },
};

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
