// Variables
const tMatch = document.querySelector("#tMatch");
const tWr = document.querySelector("#tWr");
const wrReq = document.querySelector("#wrReq");
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

// Functions
function res() {
    validation();
}

function validation() {
    const resultNum = rumus(parseInt(tMatch.value), parseInt(tWr.value), parseInt(wrReq.value));
    let text = "";
    if (tMatch.value == "" || tWr.value == "" || wrReq.value == "") {
        text = `Field harus diisi bro.`;
        display(text);
    } else if (parseInt(tMatch.value) < 0 || parseInt(tWr.value) < 0 || parseInt(wrReq.value) < 0) {
        text = `Field tidak boleh lebih kecil dari 0`;
        display(text);
    } else if (tWr.value == "100" && wrReq.value == "100") {
        text = `Kamu memerlukan sekitar <b>0</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq.value}%</b>`;
        display(text);
    } else if (wrReq.value > 100 || tWr.value > 100) {
        text = `WR tidak boleh lebih dari 100%`;
        display(text);
    } else if (resultNum >= 10000) {
        text = `<b>WTF DAMAGE!!!</b> <br> Kamu memerlukan lebih dari <b>10.000</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq.value}%</b>`;
        display(text);
    } else if (parseInt(tWr.value) > parseInt(wrReq.value)) {
        text = `Kamu memerlukan sekitar <b>${-resultNum}</b> lose tanpa win untuk mendapatkan win rate <b>${wrReq.value}%</b>`;
        display(text);
    } else {
        text = `Kamu memerlukan sekitar <b>${resultNum}</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq.value}%</b>`;
        display(text);
    }
}

function display(text) {
    return resultText.innerHTML = text;
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