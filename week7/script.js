const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

const playButton = document.querySelector("play-button");
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
