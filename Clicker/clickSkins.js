const SkinsButton = document.querySelector(".skins__button");


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
                <h2>You already have Shrek skin!</h2>
            </div>
        );
    }
}

const Havearnold = () => {
    if (localStorage.getItem('Arnold') === 'true') {
        return (
            <div className="Arnoldskin__container">
                <h2>You already have Arnold skin!</h2>
            </div>
        );
    }
}

const HaveBetman = () => {
    if (localStorage.getItem('Betman') === 'true') {
        return (
            <div className="Betmanskin__container">
                <h2>You already have Betman skin!</h2>
            </div>
        );
    }
}

const HaveSkebede = () => {
    if (localStorage.getItem('Skebede') === 'true') {
        return (
            <div className="Skebedeskin__container">
                <h2>You already have Skebede skin!</h2>
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

