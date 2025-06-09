import {addMoney} from "/Clicker/Values.js"

const ShrekCost = document.querySelector("#ShrkBuy");
const ArnoldCost = document.querySelector("#ArnoldBuy");
const BetmanCost = document.querySelector("#BetmanBuy");
const SkebedeCost = document.querySelector("#SkebedeBuy");

ShrekCost.textContent = 1000;
ArnoldCost.textContent = 2000;
BetmanCost.textContent = 3000;
SkebedeCost.textContent = 4000;

if (localStorage.getItem('Betman') === 'true') {
    BetmanCost.textContent = "You already have Betman skin!";
}

if (localStorage.getItem('Arnold') === 'true') {
    ArnoldCost.textContent = "You already have Arnold skin!";
}

if (localStorage.getItem('Shrek') === 'true') {
    ShrekCost.textContent = "You already have Shrek skin!";
}

if (localStorage.getItem('Skibide') === 'true') {
    SkebedeCost.textContent = "You already have Skebede skin!";
}

let Money = parseInt(localStorage.getItem('money')) || 0;

const BuyShrek = () => {
    if (Money >= 1000 && localStorage.getItem('Shrek') !== 'true'){
        addMoney(-ShrekCost.textContent);
        localStorage.setItem('Shrek', 'true');
        alert("You have bought Shrek skin!");
        window.location.reload();
    } else {
        alert("You don't have enough money to buy Shrek skin!");
    }
}

const BuyArnold = () => {
    if (Money >= 2000 && localStorage.getItem('Arnold') !== 'true'){
        addMoney(-ArnoldCost.textContent);
        localStorage.setItem('Arnold', 'true');
        alert("You have bought Arnold skin!");
        window.location.reload();
    } else {
        alert("You don't have enough money to buy Arnold skin!");
    }
}

const BuyBetman = () => {
    if (Money >= 3000 && localStorage.getItem('Betman') !== 'true'){
        addMoney(-BetmanCost.textContent);
        localStorage.setItem('Betman', 'true');
        alert("You have bought Betman skin!");
        window.location.reload();
    } else {
        alert("You don't have enough money to buy Betman skin!");
    }
}

const BuySkebede = () => {
    if (Money >= 4000 && localStorage.getItem('Skibide') !== 'true'){
        addMoney(-SkebedeCost.textContent);
        localStorage.setItem('Skibide', 'true');
        alert("You have bought Skebede skin!");
        window.location.reload();
    } else {
        alert("You don't have enough money to buy Skebede skin!");
    }
}

ShrekCost.onclick = BuyShrek;
ArnoldCost.onclick = BuyArnold;
BetmanCost.onclick = BuyBetman;
SkebedeCost.onclick = BuySkebede;


