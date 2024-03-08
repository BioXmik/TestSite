let tg = window.Telegram.WebApp;

tg.expand();

let clameButton = document.getElementById("clame-button");
clameButton.addEventListener("click", function() {
    
    const data = { first_name, last_name, username } = window.Telegram.WebApp.initDataUnsafe.user;
    tg.sandData(JSON.stringify(data));
    tg.close();
});