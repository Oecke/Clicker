import {addClicks, addMoney, addLevel} from "./Values.js";

const clickButton = document.querySelector(".clicker__button");
const CliCkButtonTimer = document.querySelector(".clicker__button-timer");

const clicksValue = document.querySelector("#clicks");
const moneyValue = document.querySelector("#money");
const lvlValue = document.querySelector("#level")

let clicks = parseInt(localStorage.getItem('clicks')) || 0;
let money = parseInt(localStorage.getItem('money')) || 0;
let currentUpgrade = parseInt(localStorage.getItem('Upgrade')) || 0;
let lvl = parseInt(localStorage.getItem('lvl'));
lvlValue.textContent = parseInt(localStorage.getItem('lvlValue'));

const Level = () => {
  if (clicks % 10 === 0) {
    lvlValue.textContent = parseInt(localStorage.getItem('lvlValue') || 0) + 1;
    addLevel(1);
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
  lvl = lvl - (clicks / 100);
  localStorage.setItem('lvl', lvl.toString());
  console.log(`Current Level: ${lvl}`);
  return lvl; 
}

const handleClick = () => {
    clicks = addClicks(1);
    money = addMoney(currentUpgrade + 1);
    updateValues();
    Level();
    lvl = updateLevel();
    CliCkButtonTimer.textContent = "You need " + lvl + " ms to click again";
    
}

clickButton.onclick = function() {
  if (this.proc) return false;
  this.proc = true;
    handleClick();
    anime({
        targets: clickButton,
        backgroundColor: '#ff0000',
        duration: 100,
        easing: 'easeInOutQuad',

    });
  setTimeout(() => {
    this.proc = false;
    anime({
        targets: clickButton,
        backgroundColor: '#9b5cb3',
        duration: 100,
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