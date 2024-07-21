let colors = ["red", "yellow", "green"];

const light = document.getElementsByClassName("light");

let counter = 0;
let timer = 1;

function trafficLight() {
  for (let i = 0; i < light.length; i++) {
    light[i].style.background = "grey";
    light[i].innerHTML = "";
  }
  light[counter].style.background = colors[counter];

  if (counter < light.length) {
    if (timer <= 3) {
      light[counter].innerHTML = timer;
      timer++;
    }
    if (timer == 4) {
      timer = 1;
      counter = (counter + 1) % 3;
    }
  }
}

setInterval(trafficLight, 1000);
