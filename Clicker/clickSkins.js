const SkinsButton = document.querySelector(".skins__button");
const SkinsContainer = document.querySelector(".skins__container");

const SkinsMenu = () => {
    return(
        <div className="skins-menu">
            <div className="Shrekskin__container">
                <h2>Set skin!</h2>
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
    if (localStorage.getItem('Skibide') === 'true') {
        return (
            <div className="Skebedeskin__container">
                <button className="SetSkinButton" onClick={() => SetSkin('Skibide')}>Set Skebede</button>
            </div>
        );
    }
}
localStorage.setItem('clickIcon', 'true')
const SetGIF = () => {
    if(localStorage.getItem('clickIcon') === 'true'){
        return (
            <div className="GIFbackground">
                <img src="/Images/clickIcon.gif"/>
            </div>
        )
    }
}

let TF = true;
const CLickButton = document.querySelector(".clicker__button");

const root = ReactDOM.createRoot(SkinsButton);
const clickroot = ReactDOM.createRoot(CLickButton)

SkinsContainer.addEventListener("click", () => {
    if (TF === true) {
        root.render(<SkinsMenu />);
        TF = false;
    } else {
        root.render(null);
        TF = true;
    }
});
clickroot.render(<SetGIF/>)


const SetSkin = (skin) => {
    localStorage.setItem('CurrentSkin', skin);
    const CLickButton = document.querySelector(".clicker__button");
    CLickButton.style.backgroundImage = `url(/Images/${skin}.png)`;
    CLickButton.style.backgroundSize = "100px 100px";
    CLickButton.style.backgroundPosition = "center";
    CLickButton.style.backgroundRepeat = "no-repeat";
}


