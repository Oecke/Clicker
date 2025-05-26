const clickButton = document.querySelector(".clicker__button");
const clicksValue = document.querySelector("#clicks");
const moneyValue = document.querySelector("#money");
const lvlValue = document.querySelector("#level")

let clicks = 0;
let money = parseInt(localStorage.getItem('money')) || 0;
let lvl = 5000



setTimeout(() => {
    
}, 5000);

const updateValues = () => {
    requestAnimationFrame(() => {
        clicksValue.textContent = clicks;
        moneyValue.textContent = money;
    });
};



const handleClick = () => {
    clicks++;
    money += 1;
    updateValues();
}
clickButton.addEventListener("click", handleClick);