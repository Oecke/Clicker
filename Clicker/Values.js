if (!localStorage.getItem('money')) {
    localStorage.setItem('money', '1000'); 
}


function addMoney(amount) {
    const currentMoney = parseInt(localStorage.getItem('money')) || 0;
    const newMoney = currentMoney + amount;
    localStorage.setItem('money', newMoney.toString());
    console.log(`Новый баланс: ${newMoney}`);
    return newMoney;
}
export default addMoney

