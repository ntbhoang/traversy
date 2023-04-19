const person = {
  name: "Max Nguyen",
  age: 38,
  address: {
    street: "123 Main street",
    city: "New York",
  },
};

console.log(person);

person.role = "Manager";
person.hasChildren = true;

// lamdas function

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

console.log(person, typeof person);

person.greet();
