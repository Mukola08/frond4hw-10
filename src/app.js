// завдання 1

let count = 0;

const timers = setInterval(() => {
    count += 1
    if (count === 5) {
        clearInterval(timers)
    }
    console.log("hello");
}, 1000)

console.log(timers);


// завдання 2

const box2EL = document.querySelector(".box2");

let pos = 0; 

const box2 = setInterval(() => {
  pos += 10;
  box2EL.style.top = pos + "px";
  box2EL.style.left = pos + "px";
  if (pos >= 250) {
    clearInterval(box2);
  }
}, 100);

//Завдання 3
const target = document.querySelector(".img"),
  scoreEl = document.querySelector(".score"),
  timeEl = document.querySelector(".time");
let score = 0,
  time = 10,
  timer,
  playing = false;

function move() {
  target.style.left = Math.random() * 260 + "px";
  target.style.top = Math.random() * 260 + "px";
}
target.onclick = () => {
  if (playing) {
    score++;
    scoreEl.textContent = score;
    move();
  }
};
document.querySelector(".btn").onclick = () => {
  score = 0;
  time = 10;
  playing = true;
  scoreEl.textContent = 0;
  timeEl.textContent = 10;
  move();
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
      clearInterval(timer);
      playing = false;
      alert("Очки: " + score);
    }
  }, 1000);
};

//Завдання 4

 document.getElementById("start").addEventListener("click", () => {
   let t = document.getElementById("sec").value;
   setTimeout(() => alert("Час вийшов!"), t * 1000);
 });