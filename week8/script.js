const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", playPauseVideo);
function playPauseVideo(){
    if (myVideo.paused || myVideo.ended) {
        myVideo.play();
        playPauseButton.src="https://img.icons8.com/ios-glyphs/30/play--v2.png";
    } else {
        myVideo.pause();
        playPauseImg.src="https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    }
}


const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound(){
    if(myVideo.muted){
        muteUnmuteButton.style.backgroundColor = "red";
        myVideo.muted = false;
    } else {
        muteUnmuteButton.style.backgroundColor = "blue";
        myVideo.muted = true;
    }
}

//--
// the following code block smthnsmthn honkshu mimi

myVideo.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    console.log(progress);
}
