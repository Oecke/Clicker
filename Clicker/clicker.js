import {addClicks, addMoney} from "./Values.js";

const clickButton = document.querySelector(".clicker__button");
const CliCkButtonTimer = document.querySelector(".clicker__button-timer");

const clicksValue = document.querySelector("#clicks");
const moneyValue = document.querySelector("#money");
const lvlValue = document.querySelector("#level")

let clicks = parseInt(localStorage.getItem('clicks')) || 0;
let money = parseInt(localStorage.getItem('money')) || 0;
let currentUpgrade = parseInt(localStorage.getItem('Upgrade')) || 0;
let lvl = parseInt(localStorage.getItem('lvl')) || 0;

const everyTenClicks = () => {
  if (clicks % 10 === 0 && clicks <= 100) {
    lvlValue.textContent = 1
  } else {
    
  }
}

const Level = () => {
  while (lvl <= 0) {
    if (lvl <= 4000) {
      everyTenClicks();
    } else if (lvl <= 2000) {
      everyFiveClicks();
    } else {
      everyClick();
    }
  }
}

CliCkButtonTimer.textContent = "You need " + lvl  + " ms to click again";

clicksValue.textContent = clicks;
moneyValue.textContent = money;

const updateValues = () => {
    requestAnimationFrame(() => {
        clicksValue.textContent = clicks;
        moneyValue.textContent = money;
    });
};

const updateLevel = () => {
  lvl = lvl - (clicks / 100)
  if (lvl <= 0) {
    lvl = 5000;
  }
  console.log(`Current Level: ${lvl}`);
  return lvl; 
}

const handleClick = () => {
    clicks = addClicks(1);
    money = addMoney(currentUpgrade + 1);
    updateValues();
}

clickButton.onclick = function() {
  if (this.proc) return false;
  this.proc = true;
    handleClick();
    anime({
        targets: clickButton,
        backgroundColor: '#ff0000',
        duration: 1000,
        easing: 'easeInOutQuad',

    });
  setTimeout(() => {
    this.proc = false;
    anime({
        targets: clickButton,
        backgroundColor: '#9b5cb3',
        duration: 500,
        easing: 'easeInOutQuad',
    });
  }, updateLevel());
};

const button = document.querySelector('.Shrek__button');

if (localStorage.getItem('buttonPressed')) {
    button.remove()
}

button.addEventListener('click', () => {
  localStorage.setItem('buttonPressed', 'true'); 
});