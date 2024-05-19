
//song arrays
const songList = [
    { name: "Erokia ambient waves", 
      link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/erokia_ambient-wave-56-msfxp7-78.mp3" },

    { name: "Regret", 
      link: "media/Regret.mp3" },

    { name: "Group velocity", 
      link: "media/groupVelocity.mp3",},
  ];


const myAudio = document.querySelector("#my-audio");
const audioName = document.querySelector("#audio-name");



// background video controls. Added controls are for people who may have trouble focusing when there are moving objects on the screen
const backgroundVideo = document.querySelector("#background-Video");
videoAutoPlay = backgroundVideo.play();
console.log(backgroundVideo);



backgroundVideo.addEventListener("click", playPauseVideo);
function playPauseVideo(){
    if (backgroundVideo.paused) {
        backgroundVideo.play();
        
    } else {
        backgroundVideo.pause();
    }
}








//play function

const playPauseButton = document.querySelector("#play-pause-button");
playPauseButton.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");

//video will be played if it is currently paused or ended
//otherwise the same function will pause the video
function togglePlay() {
    if (myAudio.paused || myAudio.ended) {
      myAudio.play();
      playPauseImg.src = "https://img.icons8.com/ios/50/FFFFFF/pause--v1.png";
    } else {
      myAudio.pause();
      playPauseImg.src = "https://img.icons8.com/ios/50/FFFFFF/play--v1.png";
    }
  }






//depending on the number, it will fetch the right video and its name
//from the VideoList array, see at the top.
function playAudio(no) {
    myAudio.pause();
    myAudio.src = songList[no].link;
    videoName.textContent = songList[no].name;
    myAudio.load();
    myAudio.play();
  }
  
  
let currentIndex = 0;

const prevTrackPress = document.getElementById("prev-button");
console.log(prevTrack);
prevTrackPress.addEventListener("click", prevTrack)

  function prevTrack() {
    console.log("previous track loading");
    currentIndex = (currentIndex - 1 + songList.length) % songList.length;
    console.log(currentIndex);
    playAudioAtIndex(currentIndex);
  }
  
const nextTrackpress = document.getElementById("next-button");
console.log(nextTrack);
nextTrackpress.addEventListener("click", nextTrack)


//next track
function nextTrack() {
    console.log("next track loading");
    currentIndex = (currentIndex + 1) % songList.length;
    console.log(currentIndex);
    playAudioAtIndex(currentIndex);
  }
  
  // Function to play video at a specific index
  function playAudioAtIndex(index) {
    myAudio.pause(); // Pause the video before changing source
    console.log(songList[index].link);
    myAudio.src = songList[index].link;
    myAudio.load(); // Load the new source
    myAudio.play(); // Play the video
  }
  






  

//song 1
const song1 = document.querySelector("#song1");
console.log(song1);

const buttonSong1 = document.querySelector("#button-song1");
console.log(buttonSong1)

buttonSong1.addEventListener("click", playSong1);
function playSong1(){
    myAudio.pause();
    myAudio.currentTime = 0;
    currentIndex = 0;
    myAudio.src = songList[0].link;
    myAudio.play();
    playPauseImg.src = "https://img.icons8.com/ios/50/FFFFFF/pause--v1.png";

}

//song 2
const song2 = document.querySelector("#song2");
console.log(song2);

const buttonSong2 = document.querySelector("#button-song2");
console.log(buttonSong2)

buttonSong2.addEventListener("click", playSong2);
function playSong2(){
    myAudio.pause();
    myAudio.currentTime = 0;
    currentIndex = 0;
    myAudio.src = songList[1].link;
    myAudio.play();
    playPauseImg.src = "https://img.icons8.com/ios/50/FFFFFF/pause--v1.png";

}


//song 3
const song3 = document.querySelector("#song3");
console.log(song2);

const buttonSong3 = document.querySelector("#button-song3");
console.log(buttonSong3)

buttonSong3.addEventListener("click", playSong3);
function playSong3(){
    myAudio.pause();
    myAudio.currentTime = 0;
    currentIndex = 0;
    myAudio.src = songList[2].link;
    myAudio.play();
    playPauseImg.src = "https://img.icons8.com/ios/50/FFFFFF/pause--v1.png";

}










// goofy text effect for enhancing the weird computer vibes
// I wont lie, there is probably definetely a better way to do this but I cant think of one right now
//I couldnt think of a way to have this play when you use the arrow keys in time, sorry :(

var i = 0;
var txt = 'Welcome to the aquarium. Click play to start, Shift to hide songs and click the screen to stop the video.'; 
var speed = 30; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//

var i2 = 0
var txtSong1 = "Now playing: Erokia ambient wave";
var speed2 = 30

function typeWriterSong1() {
    if (i2 < txtSong1.length) {
        document.getElementById("song-name-print2").innerHTML = "";
        document.getElementById("song-name-print3").innerHTML = ""; 
      document.getElementById("song-name-print1").innerHTML += txtSong1.charAt(i2);
      i2++;
      setTimeout(typeWriterSong1, speed2);
    }
  }
//

var i3 = 0
var txtSong2 = "Now playing: #8 Regret - From Splatoon 2";
var speed3 = 30
function typeWriterSong2() {
    if (i3 < txtSong2.length) {
      document.getElementById("song-name-print1").innerHTML = "";
      document.getElementById("song-name-print3").innerHTML = "";     
      document.getElementById("song-name-print2").innerHTML += txtSong2.charAt(i3);
      i3++;
      setTimeout(typeWriterSong2, speed3);
    }
  }
//


var i4 = 0
var txtSong3 = "Now playing: Group Velocity - From Little Alchemy 2";
var speed4 = 30
function typeWriterSong3() {
    if (i4 < txtSong3.length) {
        document.getElementById("song-name-print1").innerHTML = "";
        document.getElementById("song-name-print2").innerHTML = "";  
      
        document.getElementById("song-name-print3").innerHTML += txtSong3.charAt(i4);
      i4++;
      setTimeout(typeWriterSong3, speed4);
    }
  }


//you're going to have to forgive me for this but I have no idea how to add href into an inner html string
  var i5 = 0;
  var txtFoot = "Kai Susanto's media player. All icons sourced from 'Icon8 - IOS white' and audio from their respective owners (#8 Regret - Splatoon 2)(Group Velocity - Little Alchemy2)" ; 
  var speed5 = 30; 
  
  function typeWriterFoot() {
    if (i5 < txtFoot.length) {
      
        document.getElementById("demo2").innerHTML += txtFoot.charAt(i5);
      i5++;
      setTimeout(typeWriterFoot, speed5);
    }
  }







//hide functionality of the song buttons if people wanted to see more of the screen or just thought the buttons were messy
var modal = document.querySelector('.modal')

window.addEventListener('keydown', function (event) {
  if (event.key === 'Shift') {
      var x = document.getElementById("boxcontainer2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
})


