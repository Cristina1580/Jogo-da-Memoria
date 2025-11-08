const emojis = [
  "🐱","🐱",
  "🦝","🦝",
  "🦊","🦊",
  "🐶","🐶",
  "🐵","🐵",
  "🦁","🦁",
  "🐮","🐮",
  "🐯","🐯"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// 🎵 Sons

const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const winSound = document.getElementById("win-sound");

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

// Mostra todas as cartas por 2 segundos no início
window.onload = () => {
  const boxes = document.querySelectorAll(".item");
  boxes.forEach((box) => box.classList.add("boxOpen"));

  setTimeout(() => {
    boxes.forEach((box) => box.classList.remove("boxOpen"));
  }, 2000);
};
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }

  console.log(openCards);
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
    correctSound.currentTime = 0;
    correctSound.play();
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
    wrongSound.currentTime = 0;
    wrongSound.play();
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    winSound.play();
    setTimeout(() => {
      alert("Você venceu !");
    }, 300);
  }
}
