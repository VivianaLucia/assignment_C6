const operator = prompt("Type the operation you want to perform:");
if ((operator != "+") || (operator != "-") || (operator != "*") || (operator != "/")){
    alert("This is not a valid operation!");
  }  
let firstNumber = prompt("What is the first number?");
if (isNaN(firstNumber)) {
    alert("This is not a number!");
  } 
let secondNumber = prompt("What is the second number?");
if (isNaN(secondNumber)) {
    alert("This is not a number!");
  }
let result;

switch (operator) {
  case "+":
    result = Number(firstNumber) + Number(secondNumber);
    console.log(`${firstNumber}${operator}${secondNumber}=${result}`);
  case "-":
    result = Number(firstNumber) - Number(secondNumber);
    console.log(`${firstNumber}${operator}${secondNumber}=${result}`);
  case "*":
    result = Number(firstNumber) * Number(secondNumber);
    console.log(`${firstNumber}${operator}${secondNumber}=${result}`);
  case "/":
    result = Number(firstNumber) / Number(secondNumber);
    console.log(`${firstNumber}${operator}${secondNumber}=${result}`);
}
