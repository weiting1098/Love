// Pure CSS dance animation (no graphics included)

// Designed by Gustavo Viselner
// https://dribbble.com/shots/3979515-It-s-not-unusual

// Thanks for Una Kravets for Sass Pixel Art technique
// https://una.im/sass-pixel-art/

// Making time ~ 7 hours

// Some Js for audio toggle

var music = document.getElementById("music");
var isPlaying = false;
music.volume = 0.2;
var button = document.getElementById("toggle");
$("body").click(function () {
  if (isPlaying) {
    button.innerHTML = button.getAttribute("data-text-original");
    music.pause();
  } else {
    button.innerHTML = button.getAttribute("data-text-swap");
    music.play();
  }
});
music.onplaying = function () {
  isPlaying = true;
  document.getElementById("music-animation").classList.add("on");
};
music.onpause = function () {
  isPlaying = false;
  document.getElementById("music-animation").classList.remove("on");
};