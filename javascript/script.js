//Select Array of sound button elements
const soundButton = document.querySelectorAll(".soundButton");

//Test if all the button can be pressed and display an alert
for (let index = 0; index < soundButton.length; index++) {
    soundButton[index].addEventListener("click", buttonTest);
}

//Test function if button is pressed
function buttonTest()
{
    alert("Button pressed");
}

//Calculator higher order function challange
function sum (number1, number2)
{
    return number1 + number2;
}

function subtract (number1, number2)
{
    return number1 - number2;
}

function multiply (number1, number2)
{
    return number1 * number2;
}

function divide (number1, number2)
{
    return number1 / number2;
}

function calculator (number1, number2, operant)
{
    return operant(number1, number2);
}

console.log(calculator(1, 2, multiply));
