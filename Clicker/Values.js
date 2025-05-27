if (!localStorage.getItem('money')) {
    localStorage.setItem('money', '1'); 
}

if (!localStorage.getItem('clicks')) {
    localStorage.setItem('clicks', '1');
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

