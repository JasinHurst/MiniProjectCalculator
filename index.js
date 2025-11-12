const buttons = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");
let currentInput = "";
let firstValue = null;
let operator = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value)) {
      currentInput += value;
      display.textContent = currentInput;
    } 
    else if (value === "+" || value === "-") {
      firstValue = Number(currentInput);
      operator = value;
      currentInput = "";
      display.textContent = "";
    } 
    else if (value === "=") {
      const secondValue = Number(currentInput);
      let result = 0;

      if (operator === "+") result = firstValue + secondValue;
      else if (operator === "-") result = firstValue - secondValue;

      display.textContent = result;
      currentInput = result.toString(); 
      operator = null;
    } 
    else if (value.toLowerCase() === "c") {
      currentInput = "";
      firstValue = null;
      operator = null;
      display.textContent = "";
    }
  });
});
