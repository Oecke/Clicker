const clickButton = document.querySelector(".clicker__button");
const clicksValue = document.querySelector("#clicks");
const moneyValue = document.querySelector("#money");
const lvlValue = document.querySelector("#level")

let clicks = 0;
let money = 0;
let lvl = 5000

let MoneyStorage = localStorage.setItem("Money", money)
