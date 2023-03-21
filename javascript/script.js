//Select Array of sound button elements
const soundButton = document.querySelectorAll(".soundButton");

//Make the button have event listener while clicked
for (let i = 0; i < soundButton.length; i++) {
    soundButton[i].addEventListener("click", playAudio);
}

//Test function if button is clicked
function buttonTest()
{
    alert("Button clicked");
}

//Play audio function if button is clicked
function playAudio()
{
    //Get the innerHTML button key
    var pressedKey = this.innerHTML;
    console.log("InnerHTML : " + pressedKey);

    //Check what innerHTML button key is clicked
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
            var metal_pipe = new Audio("audio/metal_pipe.mp3");
            metal_pipe.play();
            break;

        case "L":
            var bonk = new Audio("audio/bonk.MP3");
            bonk.play();
            break;

        default:
            console.log("Button innerHTML not registered");
    }
}


//Event listener for keyboard using anonymous function
document.addEventListener("keydown", function(event){
    switch(event.key)
    {
        case "w":
        case "W":
            var bruh = new Audio("audio/bruh.mp3");
            bruh.play();
            break;

        case "a":
        case "A":
            var huh = new Audio("audio/huh.mp3");
            huh.play();
            break;
        
        case "s":
        case "S":
            var vine_boom = new Audio("audio/vine_boom.mp3");
            vine_boom.play();
            break;
        
        case "d":
        case "D":
            var oof = new Audio("audio/oof.m4a");
            oof.play();
            break;

        case "j":
        case "J":
            var hell_kitchen = new Audio("audio/hell_kitchen.MP3");
            hell_kitchen.play();
            break;

        case "k":
        case "K":
            var metal_pipe = new Audio("audio/metal_pipe.mp3");
            metal_pipe.play();
            break;
        
        case "l":
        case "L":
            var bonk = new Audio("audio/bonk.MP3");
            bonk.play();
            break;

        default:
            console.log("Key button not registered");
    }
});