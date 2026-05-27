let audio = document.getElementById("audio");

let playBtn = document.getElementById("play-btn");

let progress = document.getElementById("progress");

let volume = document.getElementById("volume");

function playPauseSong(){

  if(audio.paused){

    audio.play();

    playBtn.innerHTML = "⏸";

  }

  else{

    audio.pause();

    playBtn.innerHTML = "▶";

  }

}

// Progress Bar

audio.addEventListener("timeupdate", function(){

  progress.max = audio.duration;

  progress.value = audio.currentTime;

});

progress.addEventListener("input", function(){

  audio.currentTime = progress.value;

});

// Volume Control

volume.addEventListener("input", function(){

  audio.volume = volume.value;

});

// Previous Button

function previousSong(){

}

// Next Button

function nextSong(){

}
