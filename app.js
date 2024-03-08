let tg = window.Telegram.WebApp;

tg.expand();

let clameButton = document.getElementById("clame-button");
clameButton.addEventListener("click", function() {

    let data = {
        name: tg.initDataUnsafe.user.username
    }
    tg.sandData(JSON.stringify(data));
    tg.close();
});