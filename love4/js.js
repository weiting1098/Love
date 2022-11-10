(function() {
    var audio = new Audio(
      "music.mp3"
    );
    audio.loop = true;
    audio.play();
    var controlBtn = document.querySelector("control");
    document.addEventListener(
      "click",
      e => (audio.paused ? audio.play() : audio.pause())
    );
  })();
  
  (function fadeInDiv() {
    var divs = $(".svg");
    var divsize = (Math.random() * 100 + 50).toFixed();
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    var maxSize = 30;
    var minSize = 8;
    var size = Math.random() * maxSize + minSize;
  
    var elem = divs.eq(Math.floor(Math.random() * divs.length));
  
    if (!elem.is(":visible")) {
      elem.fadeIn(Math.floor(Math.random() * 1000), fadeInDiv);
      elem.css({
        position: "absolute",
        left: posx + "px",
        top: posy + "px",
        display: "block"
      });
    } else {
      elem.fadeOut(Math.floor(Math.random() * 1000), fadeInDiv);
    }
  })();
  