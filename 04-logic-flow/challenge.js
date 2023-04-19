const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => {
  if (n2 != 0) return n1 / n2;
  else console.log("cannot divide for 0");
};

function calculator(number1, number2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
    default:
      console.log("Operators must be ['+', '-', '*', '/']");
  }
  return result;
}

//calculator(1, 2, "#");
const res = calculator(1, 0, "/");
