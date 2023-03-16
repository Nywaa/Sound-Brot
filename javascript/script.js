//Select Array of button elements
const wButton = document.querySelectorAll(".soundButton");

//Test if all the button can be pressed and display an alert
for (let index = 0; index < wButton.length; index++) {
    wButton[index].addEventListener("click", buttonTest);
}

//Test function if button is pressed
function buttonTest()
{
    alert("Button Pressed");
}