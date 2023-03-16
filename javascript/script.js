//Select Array of sound button elements
const soundButton = document.querySelectorAll(".soundButton");

//Test if all the button can be pressed and display an alert
for (let index = 0; index < soundButton.length; index++) {
    soundButton[index].addEventListener("click", playAudio);
}

//Test function if button is pressed
function buttonTest()
{
    alert("Button pressed");
}

var audio = new Audio('audio/bruh.mp3');
function playAudio()
{
    let playbackSpeed = Math.random() + 0.1;
    if(playbackSpeed > 1){ playbackSpeed = 1;}
    audio.playbackRate = playbackSpeed;
    audio.play();   
    console.log(audio.playbackRate);
}