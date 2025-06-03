const SkinsButton = document.querySelector(".skins__button");

let CurrectSkin = localStorage.getItem('CurrentSkin') || 'default';

const SkinsMenu = () => {
    return(
        <div className="skins-menu">
            <div className="Shrekskin__container">
                <h2>Shrek skin!</h2>
                <HaveShrek />
                <HaveBetman />
                <Havearnold />
                <HaveSkebede />
            </div>
        </div>
    )

}

const HaveShrek = () => {
    if (localStorage.getItem('Shrek') === 'true') {
        return (
            <div className="Shrekskin__container">
                <button className="SetSkinButton" onClick={() => SetSkin('Shrek')}>Set Shrek</button>
            </div>
        );
    }
}

const Havearnold = () => {
    if (localStorage.getItem('Arnold') === 'true') {
        return (
            <div className="Arnoldskin__container">
                <button className="SetSkinButton" onClick={() => SetSkin('Arnold')}>Set Arnold</button>
            </div>
        );
    }
}

const HaveBetman = () => {
    if (localStorage.getItem('Betman') === 'true') {
        return (
            <div className="Betmanskin__container">
                <button className="SetSkinButton" onClick={() => SetSkin('Betman')}>Set Betman</button>
            </div>
        );
    }
}

const HaveSkebede = () => {
    if (localStorage.getItem('Skebede') === 'true') {
        return (
            <div className="Skebedeskin__container">
                <button className="SetSkinButton" onClick={() => SetSkin('Skebede')}>Set Skebede</button>
            </div>
        );
    }
}
let TF = true;
SkinsButton.addEventListener("click", () => {
    if (TF === true) {
        const root = ReactDOM.createRoot(SkinsButton);
        root.render(<SkinsMenu />);
        TF = false;
    } else {
        const root = ReactDOM.createRoot(SkinsButton);
        root.render(null);
        TF = true;
    }
}
);

const SetSkin = (skin) => {
    localStorage.setItem('CurrentSkin', skin);
    const CLickButton = document.querySelector(".clicker__button");
    CLickButton.style.backgroundImage = `url(/Images/${skin}.png)`;
    CLickButton.style.backgroundSize = "100px 100px";
    CLickButton.style.backgroundPosition = "center";
    CLickButton.style.backgroundRepeat = "no-repeat";
}