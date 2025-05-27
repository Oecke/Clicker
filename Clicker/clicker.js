import {addClicks, addMoney} from "./Values.js";

const clickButton = document.querySelector(".clicker__button");
const clicksValue = document.querySelector("#clicks");
const moneyValue = document.querySelector("#money");
const lvlValue = document.querySelector("#level")

let clicks = parseInt(localStorage.getItem('clicks')) || 0;
let money = parseInt(localStorage.getItem('money')) || 0;
let lvl = 5000

clicksValue.textContent = clicks;
moneyValue.textContent = money;

const updateValues = () => {
    requestAnimationFrame(() => {
        clicksValue.textContent = clicks;
        moneyValue.textContent = money;
    });
};



const handleClick = () => {
    clicks = addClicks(1);
    money = addMoney(1);
    updateValues();
}

clickButton.addEventListener("click", handleClick);



const button = document.querySelector('.Shrek__button');

if (localStorage.getItem('buttonPressed')) {
    button.remove()
}

button.addEventListener('click', () => {
  localStorage.setItem('buttonPressed', 'true'); 
});