if (!localStorage.getItem('money')) {
    localStorage.setItem('money', '1'); 
}

if (!localStorage.getItem('clicks')) {
    localStorage.setItem('clicks', '1');
}

if (!localStorage.getItem('Upgrade')) {
    localStorage.setItem('Upgrade', '0');
}

if (!localStorage.getItem('lvl')) {
    localStorage.setItem('lvl', '5000');
}

if (!localStorage.getItem('lvlValue')) {
    localStorage.setItem('lvlValue', '1');
}

if (!localStorage.getItem('CurrentSkin')) {
    localStorage.setItem('CurrentSkin', 'default');
}

if (!localStorage.getItem('AutoClick')) {
    localStorage.setItem('AutoClick', '0');
}

if(!localStorage.getItem('clickIcon')) {
    localStorage.setItem('clickIcon', 'false')
}

export const addLevel = (amount) => {
    const currentLevel = parseInt(localStorage.getItem('lvlValue')) || 0;
    const newLevel = currentLevel + amount;
    localStorage.setItem('lvlValue', newLevel.toString());
    console.log(`Новий рівень: ${newLevel}`);
    return newLevel;
}

export const addClicks = (amount) => {
    const currentClicks = parseInt(localStorage.getItem('clicks')) || 0;
    const newClicks = currentClicks + amount;
    localStorage.setItem('clicks', newClicks.toString());
    console.log(`Нові кліки: ${newClicks}`);
    return newClicks;
}

export const addMoney = (amount) => {
    const currentMoney = parseInt(localStorage.getItem('money')) || 0;
    const newMoney = currentMoney + amount;
    localStorage.setItem('money', newMoney.toString());
    console.log(`Новий баланс: ${newMoney}`);
    return newMoney;
}

