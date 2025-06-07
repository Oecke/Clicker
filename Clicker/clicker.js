import {addClicks, addMoney, addLevel} from "./Values.js";

const clickButton = document.querySelector(".clicker__button");
const SuperClickButton = document.querySelector(".SuperClicker__button");

const CliCkButtonTimer = document.querySelector(".clicker__button-timer");
const SuperClickButtonTimer = document.querySelector(".SuperClicker__button-timer");
const AutoClickerButton = document.querySelector(".AutoClicker__button");

const clicksValue = document.querySelector("#clicks");
const moneyValue = document.querySelector("#money");
const lvlValue = document.querySelector("#level")

let clicks = parseInt(localStorage.getItem('clicks')) || 0;
let money = parseInt(localStorage.getItem('money')) || 0;
let currentUpgrade = parseInt(localStorage.getItem('Upgrade')) || 0;
let lvl = parseInt(localStorage.getItem('lvl'));



const Level = () => {
  if (clicks % 10 === 0) {
    lvlValue.textContent = parseInt(localStorage.getItem('lvlValue') || 0) + 1;
    addLevel(1);
  }
}

const SupreClickTimeOut = 100000;

lvlValue.textContent = parseInt(localStorage.getItem('lvlValue'));
CliCkButtonTimer.textContent = "You need " + lvl  + " ms to click again";
SuperClickButtonTimer.textContent = "You need " + SupreClickTimeOut + " ms to click again";

clicksValue.textContent = clicks;
moneyValue.textContent = money;



const updateValues = () => {
    requestAnimationFrame(() => {
        clicksValue.textContent = clicks;
        moneyValue.textContent = money;
    });
};

const upradeLevel = () => {
  if (lvl > 0) {
    lvl = lvl - (clicks / 100);
    localStorage.setItem('lvl', lvl.toString());
    return lvl; 
  } else {
    lvl = 0;
    return lvl;
  }
};



const handleSuperClick = () => {
    clicks = addClicks(10);
    money = addMoney(currentUpgrade * 10);
    updateValues();
    Level();
    
    SuperClickButtonTimer.textContent = "You need " + SupreClickTimeOut + " ms to click again";
}

const handleClick = () => {
    clicks = addClicks(1);
    money = addMoney(currentUpgrade + 1);
    updateValues();
    Level();
    lvl = upradeLevel();
    CliCkButtonTimer.textContent = "You need " + lvl + " ms to click again";
    
}



let autoClickerInterval = parseInt(localStorage.getItem('AutoClicker')) || 0;

const AutoClicker = () => {
  if (localStorage.getItem('AutoClicker') != '0') {
    
    setInterval(() => {
        if (clicks >= 10) {
            clicks = addClicks(1);
            money = addMoney(autoClickerInterval + 1);
            updateValues();
            Level();
            lvl = upradeLevel();
           
        }
    }, 5000 - (autoClickerInterval * 10));
  } else {
    alert("AutoClicker is disabled");
  }
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
  }, upradeLevel());
};

SuperClickButton.onclick = function() {
  if (this.proc) return false;
  this.proc = true;
    handleSuperClick();
    anime({
        targets: SuperClickButton,
        backgroundColor: '#ff0000',
        duration: 100,
        easing: 'easeInOutQuad',

    });
  setTimeout(() => {
    this.proc = false;
    anime({
        targets: SuperClickButton,
        backgroundColor: '#9b5cb3',
        duration: 100,
        easing: 'easeInOutQuad',
    });
  }, SupreClickTimeOut);
};
let x = 0
AutoClickerButton.onclick = () => {
  if ( x === 0 ) {
    AutoClicker();
    x++;
    console.log(x);
  } else {
    alert("AutoClicker is already enabled");
  }
};
const button = document.querySelector('.Shrek__button');

if (localStorage.getItem('buttonPressed')) {
    button.remove()
}

button.addEventListener('click', () => {
  localStorage.setItem('buttonPressed', 'true'); 
});

