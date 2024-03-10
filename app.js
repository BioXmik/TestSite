let tg = window.Telegram.WebApp;

tg.expand();

let botName = "tapcoin_bot";
let userId = tg.initDataUnsafe.user.username;

let clameButton = document.getElementById("clame-button");
let balanceText = document.getElementById("balance-text");
let refLinkText = document.getElementById("ref-link-text");
let refLinkCopyButton = document.getElementById("ref-link-copy-button");

refLinkText.textContent = `https://t.me/${botName}?start=${userId}`;
getBalance(userId);

function getBalance(userId) {
    fetch(`http://localhost:5000/balance/${userId}`)
        .then(response => response.text())
        .then(balance => {
            balanceText.textContent = balance;
        })
        .catch(error => {
            // Handle error
    });
}

function clame(userId) {
    fetch(`http://localhost:5000/clame/${userId}`)
        .then(response => response.text())
        .then(balance => {
            balanceText.textContent = balance;
        })
        .catch(error => {
            // Handle error
    });
}

function copyToClipboard(str) {
    var area = document.createElement('textarea');
  
    document.body.appendChild(area);  
    area.value = str;
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);  
}

clameButton.addEventListener("click", () => {
    clame(userId);
});

refLinkCopyButton.addEventListener("click", () => {
    copyToClipboard(userId);
});