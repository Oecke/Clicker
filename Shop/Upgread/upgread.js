import {addClicks, addMoney} from "./Clicker/Values.js";

const upgradeButton = document.querySelector(".upgrade__button");

const UpgreadLevel = () => {
    return(
        <div className="upgread__container">
        <h1>Upgrade your Clicker</h1>
        <div className="upgread__items">
            <div className="upgread__item" id="upgrade1">
                <h2>Upgrade 1</h2>
                <p>Cost: <span id="cost1">100</span></p>
                <button className="upgrade-button" data-upgrade-id="1">Buy Upgrade</button>
            </div>
        </div>
    );
}