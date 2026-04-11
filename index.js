// History array
const history = [];

// Function to add to history
function addToHistory(num1, operator, num2, result) {
  history.push({
    operand1: num1,
    operator: operator,
    operand2: num2,
    result: result
  });
}

// Addition
function add(num1, num2) {
  const result = num1 + num2;
  addToHistory(num1, "+", num2, result);
  return result;
}

// Subtraction
function subtract(num1, num2) {
  const result = num1 - num2;
  addToHistory(num1, "-", num2, result);
  return result;
}

// Multiplication
function multiply(num1, num2) {
  const result = num1 * num2;
  addToHistory(num1, "*", num2, result);
  return result;
}

// Division
function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  
  const result = num1 / num2;
  addToHistory(num1, "/", num2, result);
  return result;
}

// Display history
function displayHistory() {
  if (history.length === 0) {
    console.log("No calculations stored.");
    return;
  }

  console.log("Calculation History:");
  history.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.operand1} ${item.operator} ${item.operand2} = ${item.result}`
    );
  });
}
