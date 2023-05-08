// expose.js

//import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById("horn-select");
  selectHorn.addEventListener("change", (event) => {
    switch(event.target.value){
      case "air-horn":
        document.querySelector("[alt='No image selected']").src="assets/images/air-horn.svg";
        document.querySelector("[class='hidden']").src="assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        document.querySelector("[alt='No image selected']").src="assets/images/car-horn.svg";
        document.querySelector("[class='hidden']").src="assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        document.querySelector("[alt='No image selected']").src="assets/images/party-horn.svg";
        document.querySelector("[class='hidden']").src="assets/audio/party-horn.mp3";
        break;
    }
  });
  const volumeSelect = document.getElementById("volume-controls");
  volumeSelect.addEventListener("change", (event) =>{

    if(event.target.value == 0){
      document.querySelector("[alt='Volume level 2']").src="assets/icons/volume-level-0.svg";
    } else if(event.target.value < 33){
      document.querySelector("[alt='Volume level 2']").src="assets/icons/volume-level-1.svg";
    } else if((event.target.value > 33) && (event.target.value < 67)){
      document.querySelector("[alt='Volume level 2']").src="assets/icons/volume-level-2.svg";
    } else if(event.target.value > 67){
      document.querySelector("[alt='Volume level 2']").src="assets/icons/volume-level-3.svg";
    }
  });
  const buttonClick = document.querySelector("button");
  buttonClick.addEventListener("click", (event) => {
    let vol = document.getElementById("volume").value;
    let music = document.querySelector("audio");
    music.volume = (vol * .01);
    const horn = document.getElementById("horn-select");
    if(horn.value == "party-horn"){
      jsConfetti.addConfetti();
    }
    music.play();
  });
}