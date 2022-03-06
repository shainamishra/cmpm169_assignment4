// CMPM 169
// Week 4: Sound
// Shaina Mishra

let song;

function preload (){
  song = loadSound('G.mp3');
  bgw = loadImage('white.jpg');
  bgb = loadImage('black.jpg');
}

function setup() {
  createCanvas(400, 400);
  background(bgb);
  song = loadSound("G.mp3");
}

function mousePressed() {
  if (song.isPlaying() == true) {
    song.stop();
    background(bgb);
  } else {
    song.play();
    background(bgw);
  }
}