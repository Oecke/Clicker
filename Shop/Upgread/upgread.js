
const CurrectUpgrade = parseInt(localStorage.getItem('Upgrade')) || 0;
const CurrentAutoClickerUpgrade = parseInt(localStorage.getItem('AutoClick')) || 0;

const UpdateCost = () => {  
    const NewCosrt  = 100 * (CurrectUpgrade + 1);
    return NewCosrt;
}

const UpdateAutoClickerCost = () => {
    const NewCosrt  = 100 * (CurrentAutoClickerUpgrade + 1);
    return NewCosrt;
}

const addMoney = (amount) => {
    const currentMoney = parseInt(localStorage.getItem('money')) || 0;
    const newMoney = currentMoney + amount;
    localStorage.setItem('money', newMoney.toString());
    console.log(`Новий баланс: ${newMoney}`);
    return newMoney;
}


const handleUpgradeClick = () => {
    if(localStorage.getItem('money') < UpdateCost()) {
        alert("Not enough money to upgrade!");
        return;
    } else {
        addMoney(-UpdateCost());
        localStorage.setItem('Upgrade', (CurrectUpgrade + 1).toString());
        alert(`Upgrade successful! Current Upgrade Level: ${CurrectUpgrade + 1}`);
        const currentMoney = parseInt(localStorage.getItem('money')) || 0;
        localStorage.setItem('money', currentMoney + 1);
        
    }
    console.log(`Upgrade Level: ${CurrectUpgrade + 1}`);
    console.log(`Upgrade Cost: ${UpdateCost()}`);
    window.location.reload();
};

const handleUpgradeAutoClick = () => {
    if(localStorage.getItem('money') < UpdateAutoClickerCost()) {
        alert("Not enough money to upgrade AutoClicker!");
        return;
    } else {
        addMoney(-UpdateAutoClickerCost());
        localStorage.setItem('AutoClick', (CurrentAutoClickerUpgrade + 1).toString());
        alert(`AutoClicker Upgrade successful! Current Upgrade Level: ${CurrentAutoClickerUpgrade + 1}`);
        const currentMoney = parseInt(localStorage.getItem('money')) || 0;
        localStorage.setItem('money', currentMoney + 1);
    }
    console.log(`AutoClicker Upgrade Level: ${CurrentAutoClickerUpgrade + 1}`);
    console.log(`AutoClicker Upgrade Cost: ${UpdateAutoClickerCost()}`);
    window.location.reload();
}

const UpgreadLevel = () => (
    <div className="upgread__container">
        <h1>Upgrade your Clicker</h1>
        <div className="upgread__items">
            <div className="upgread__item" id="upgrade1">
                <h2>Upgrade {CurrectUpgrade}</h2>
                <p>Cost: <span id="cost1">{UpdateCost()}</span></p>
                <button className="upgrade-button" data-upgrade-id="1" onClick={handleUpgradeClick}>Buy Upgrade</button>
            </div>
        </div>
    </div>
);

const AutoClicker = () => (
    <div className="upgread__container">
        <h1>Upgrade your AutoClicker</h1>
        <div className="upgread__items">
            <div className="upgread__item" id="upgrade1">
                <h2>Upgrade {CurrentAutoClickerUpgrade}</h2>
                <p>Cost: <span id="cost1">{UpdateAutoClickerCost()}</span></p>
                <button className="upgrade-button" data-upgrade-id="1" onClick={handleUpgradeAutoClick}>Buy Upgrade</button>
            </div>
        </div>
    </div>
);


const rootElement = document.querySelector(".upgread__container");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
    <UpgreadLevel />
    <AutoClicker />
  </>
);