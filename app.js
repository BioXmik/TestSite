let tg = window.Telegram.WebApp;

tg.expand();

let clameButton = document.getElementById("clame-button");
clameButton.addEventListener("click", () => {
    print("ffdfgf");
    tg.sandData(JSON.stringify("fdfffdf"));
    tg.close();
});