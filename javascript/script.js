//Select Array of sound button elements
const soundButton = document.querySelectorAll(".soundButton");

//Test if all the button can be pressed and display an alert
for (let index = 0; index < soundButton.length; index++) {
    soundButton[index].addEventListener("click", playAudio);
    soundButton[index].addEventListener("click", buttonPressed);
}

//Test function if button is pressed
function buttonTest()
{
    alert("Button pressed");
}

//Play audio function
var audio = new Audio('audio/bruh.mp3');
function playAudio()
{
    //Set random playbackrate
    let playbackSpeed = Math.random() + 0.1;
    if(playbackSpeed > 1){ playbackSpeed = 1;}
    audio.playbackRate = playbackSpeed;
    
    audio.play();   
    console.log(audio.playbackRate);
}

function buttonPressed()
{
    this.style.backgroundColor = "red";
}

//Code below exist just to make an experiment
//about var objects
var car = {
    name: "Toyota",
    color: "Red",
    horseSpeed: "144 km/h",
    isAvailable: false,
    uniqueFeature: ["Fast", "Easy to drive", "Extended storage"],
    goodies: {
        name: "Sleeping bag",
        qty: 1
    }
};
console.log(car.name + " " + car.goodies.name);

//Code below exist just to make an experiment
//about constructor function
function Car(name, color, horseSpeed, isAvailable)
{
    this.name = name;
    this.color = color;
    this.horseSpeed = horseSpeed;
    this.isAvailable = isAvailable;
}

var car1 = new Car("Nissan", "Blue", "120km/h", true);
console.log(car1.color);