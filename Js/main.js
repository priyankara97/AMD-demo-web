var calculation = "";

function numbers(number) {
  if (calculation.length < 16) {
    calculation += number;
    document.getElementById("answer").textContent = calculation;
  }
}

function calculate() {
  var result = eval(calculation);
// The eval function is used here to evaluate the value of the
// calculation variable. The calculation variable should
// contain a string representing a mathematical expression.
// The eval function parses and evaluates the expression and assigns the result to the result variable.

  var truncatedResult = String(result).slice(0, 16);
  
//The result is converted to a string using the String constructor. 
//Then, the slice method is used to extract the first 16 characters of the string and assign it to the truncatedResult variable.
// This is done to limit the length of the result to a maximum 
//of 16 characters.

  document.getElementById("answer").textContent = truncatedResult;
  calculation = "";
  //The calculation variable is reset to an empty string, possibly to clear any previously 
  //entered calculations before performing a new calculation.
}


//delete 

function del() {
  var button = document.getElementById("answer");
  var buttonText = button.innerHTML;
  //The current content of the HTML element,
  // stored within the button variable, is extracted using the
  // innerHTML property and assigned to the buttonText variable.

  // Check if there are any numbers left
  if (buttonText.length > 0) {
    // Remove the last number from the text
    var newButtonText = buttonText.substring(0, buttonText.length - 1);
    //If there is content in the button, this line creates a new string, newButtonText, by removing the last character from buttonText. It uses the substring method,
    // passing the starting index as 0 and the ending index as
    // buttonText.length - 1, effectively excluding the last 
    //character.
    button.innerHTML = newButtonText;

    //For example, let's say the original HTML content inside the button element was <button>Click Me</button>, and after removing the last character, the newButtonText becomes "Click M". After executing the line button.innerHTML = newButtonText;, the HTML
    // content of the button element will be updated to
    // "Click M"
  }
}


// on off


function turnOff() {
  var switchElement = document.getElementById("answer");
  switchElement.style.backgroundColor = "black";
  switchElement.textContent = "****CANON****";
}


function resetAndTurnOn() {
  var switchElement = document.getElementById("answer");
  switchElement.textContent = "****CANON****";
  switchElement.style.backgroundColor = "";
  calculation = ""; // Reset the calculation expression
}

function reset() {
  var switchElement = document.getElementById("answer");
  switchElement.textContent = "****CANON****";
 
  calculation = ""; // Reset the calculation expression
}


