let tg = window.Telegram.WebApp;

tg.expand();

let clameButton = document.getElementById("clame-button");
clameButton.addEventListener("click", () => {
    alert("Привет, Skillbox")
    const data = { first_name, last_name, username } = tg.initDataUnsafe.user;
    tg.sandData(JSON.stringify(data));
    tg.close();
});