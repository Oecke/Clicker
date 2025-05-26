



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