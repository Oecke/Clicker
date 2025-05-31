import {addMoney} from "/Clicker/Values.js"

const ShrekCost = document.querySelector("#ShrekCost");
const ArnoldCost = document.querySelector("#ArnoldCost");
const BetmanCost = document.querySelector("#BetmanCost");
const SkebedeCost = document.querySelector("#SkebedeCost");

let Money = parseInt(localStorage.getItem('money')) || 0;

const BuyShrek = () => {
    if (Money >= 1000){
        addMoney(-1000);
        localStorage.setItem('Shrek', 'true');
        alert("You have bought Shrek skin!");
    } else {
        alert("You don't have enough money to buy Shrek skin!");
    }
}

const BuyArnold = () => {
    if (Money >= 2000){
        addMoney(-2000);
        localStorage.setItem('Arnold', 'true');
        alert("You have bought Arnold skin!");
    } else {
        alert("You don't have enough money to buy Arnold skin!");
    }
}

const BuyBetman = () => {
    if (Money >= 3000){
        addMoney(-3000);
        localStorage.setItem('Betman', 'true');
        alert("You have bought Betman skin!");
    } else {
        alert("You don't have enough money to buy Betman skin!");
    }
}

const BuySkebede = () => {
    if (Money >= 4000){
        addMoney(-4000);
        localStorage.setItem('Skebede', 'true');
        alert("You have bought Skebede skin!");
    } else {
        alert("You don't have enough money to buy Skebede skin!");
    }
}

ShrekCost.onclick = BuyShrek;
ArnoldCost.onclick = BuyArnold;
BetmanCost.onclick = BuyBetman;
SkebedeCost.onclick = BuySkebede;
