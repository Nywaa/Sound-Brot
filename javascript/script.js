//Select Array of sound button elements
const soundButton = document.querySelectorAll(".soundButton");

//Make the button have event listener
for (let i = 0; i < soundButton.length; i++) {
    soundButton[i].addEventListener("click", playAudio);
}

//Test function if button is pressed
function buttonTest()
{
    alert("Button pressed");
}

//Play audio function
function playAudio()
{
    //Get the innerHTML button key
    var pressedKey = this.innerHTML;
    console.log(pressedKey);

    //Check what innerHTML button key is pressed
    switch(pressedKey)
    {
        case "W":
            var bruh = new Audio("audio/bruh.mp3");
            bruh.play();
            break; 

        case "A":
            var huh = new Audio("audio/huh.mp3");
            huh.play();
            break;

        case "S":
            var vine_boom = new Audio("audio/vine_boom.mp3");
            vine_boom.play();
            break;

        case "D":
            var oof = new Audio("audio/oof.m4a");
            oof.play();
            break;

        case "J":
            var hell_kitchen = new Audio("audio/hell_kitchen.MP3");
            hell_kitchen.play();
            break;

        case "K":
            var fus_ro_dah = new Audio("audio/fus_ro_dah.mp3");
            fus_ro_dah.play();
            break;

        case "L":
            var bonk = new Audio("audio/bonk.MP3");
            bonk.play();
            break;

        default:
            console.log(pressedKey);
    }
}