let player = document.getElementById("player");
let points = document.getElementById("points");
let time = document.getElementById("time");
let ned = document.getElementById("ned");

let counter = 0;
let timeTotal = 60;
let win = 30;

function addPoints() {
  counter++;
  points.innerHTML = `<p> Puntos: ${counter} / ${win} </p>`;
  ranNum = Math.round(Math.random() * 500);
  ranNum2 = Math.round(Math.random() * 500);
  player.style.marginTop = ranNum + "px";
  player.style.marginLeft = ranNum2 + "px";
}

player.addEventListener("mouseover", addPoints);

function resTime() {
  timeTotal--;
  time.innerHTML = "Tiempo:" + timeTotal;
  if (timeTotal === 0) {
    alert("Has perdido");
    timeTotal = 0;
  }
}
setInterval(resTime, 1000);
