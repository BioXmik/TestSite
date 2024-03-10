let tg = window.Telegram.WebApp;

tg.expand();

let userId = 880668193;

let clameButton = document.getElementById("clame-button");
let balanceText = document.getElementById("balance-text");
let refLinkCopyButton = document.getElementById("ref-link-copy-button");

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