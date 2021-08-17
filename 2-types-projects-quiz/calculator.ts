/**
 * Let's make a calculator 🧮
 */

type Calculation = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(command: Calculation, a: number, b: number): number {
  /*
    if (command === "add") {
      return a + b;
    } else if (command === "substract") {
      return a - b;
    } else if (command === "multiply") {
      return a * b;
    } else if (command === "divide") {
      return a / b;
    } else if (command === "remainder") {
      return a % b;
    } else {
      throw new Error("Can't calculate");
    }
    */
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw new Error("unknown command");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
