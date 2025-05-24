const clickButton = document.querySelector(".clicker__button");
const clicksValue = document.querySelector("#clicks");
const moneyValue = document.querySelector("#money");

let clicks = 0;
let money = parseInt(moneyValue.textContent);

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