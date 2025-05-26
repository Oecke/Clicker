const clickButton = document.querySelector(".clicker__button");
const clicksValue = document.querySelector("#clicks");
const moneyValue = document.querySelector("#money");
const lvlValue = document.querySelector("#level")

let clicks = 0;
let money = parseInt(localStorage.getItem('money')) || 0;
let lvl = 5000



const updateValues = () => {
    requestAnimationFrame(() => {
        clicksValue.textContent = clicks;
        moneyValue.textContent = money;
    });
};

//Update Values

const handleClick = () => {
    clicks++;
    money += 1;
    updateValues();
}
setTimeout(() => {
    clickButton.addEventListener("click", handleClick);
}, 5000);


//remove Posholko

const button = document.querySelector('.Shrek__button');

if (localStorage.getItem('buttonPressed')) {
    button.remove()
}

button.addEventListener('click', () => {
  localStorage.setItem('buttonPressed', 'true'); 
  
});