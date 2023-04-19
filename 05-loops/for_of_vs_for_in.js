const items = ["book", "table", "chair", "painting", "calendar"]; // array
const users = [{ name: "Max" }, { name: "Rita" }, { name: "John" }];

for (let item of items) console.log(item);

for (const user of users) {
  console.log(user.name);
}

// loop thru a string
const aString = "Hello World";
for (const letter of aString) console.log(letter);

// loop thru a map
const aMap = new Map();
aMap.set("name", "Messi");
aMap.set("age", 36);

// For in

const colors = {
  color1: "red",
  color2: "blue",
  color3: "orange",
};

for (const key in colors) {
  console.log(colors[key]);
}
