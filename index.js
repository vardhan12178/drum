let len = document.querySelectorAll(".drum").length;
for (let i = 0; i < len; i++) {
  let btn = document.querySelectorAll("button")[i];
  btn.addEventListener('click', function(){
    let sound=btn.textContent;
    makesound(sound);
  });
}

document.addEventListener("keydown",function(event){
  console.log(event.key);
  let sound=event.key;
  makesound(sound);
})

function makesound(sound){
  switch (sound) {
    case (sound="w"):
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
      break;
      case "a":
        var audio = new Audio('sounds/kick.mp3');
        audio.play();
        break;
      case "s":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
      case "d":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
      case "j":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
      case "k":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
      case "l":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
        default:
        console.log(sound);
  }
}
