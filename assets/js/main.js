// Variables
const tMatch = document.querySelector("#tMatch");
const tWr = document.querySelector("#tWr");
const wrReq = document.querySelector("#wrReq");
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

// Functions
function res() {
    const resultNum = rumus(tMatch.value, tWr.value, wrReq.value);
    const text = `Kamu memerlukan sekitar <b>${resultNum}</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq.value}%</b>`;
    resultText.innerHTML = text;
}

function rumus(tMatch, tWr, wrReq) {
    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tMatch;
    return Math.round(final);
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {}

function eventListener() {
    hasil.addEventListener("click", res);
}