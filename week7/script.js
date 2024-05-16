const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);
//airportAudio.removeAttribute("controls")

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAirportAudio);

function playAirportAudio()
{
    airportAudio.play();
}






const pauseButton = document.querySelector("#shut-button")
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAirportAudio);

function pauseAirportAudio()
{
    airportAudio.pause();
}




const popButton = document.querySelector("#pop-button")
console.log(popButton)

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

popButton.addEventListener("click", playPop);

function playPop()
{
    console.log("owo?");
    popSound.play();
    
}


