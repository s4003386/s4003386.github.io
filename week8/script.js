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

const progressBarFill = document.querySelector("#progress-bar-fill");

function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    console.log(progress);
    progressBarFill.style.width = progress + "%";
}



myVideo.addEventListener("dbclick", goFullscreen);

const fullscreenButton = document.querySelector("#full-screen-button")
console.log(fullscreenButton)

fullscreenButton.addEventListener("click", goFullscreen)

function goFullscreen() {
    if(!document.fullscreenElement) {
        myVideo.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}



//step

const step1Button = document.querySelector("#step1");
console.log(step1Button);
step1Button.addEventListener("click", gotostep1);

function gotostep1() {
    myVideo.currentTime = 53.0;
}

//i;m suppose to add a volume button right now but i'm like bored out of my mind. 
//nyaaaaaaan nyannyanmeow nya n