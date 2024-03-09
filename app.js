let tg = window.Telegram.WebApp;

tg.expand();

let clameButton = document.getElementById("clame-button");
clameButton.addEventListener("click", () => {

    let data = {
        tg_id: "BioXmik"
    }
    tg.sandData(JSON.stringify(data));
    tg.close();
});