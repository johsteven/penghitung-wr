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
    const resultNum = rumus(parseFloat(tMatch.value), parseFloat(tWr.value), parseFloat(wrReq.value));
    const loseNum = rumusLose(parseFloat(tMatch.value), parseFloat(tWr.value), parseFloat(wrReq.value));
    let text = "";
    if (tMatch.value == "" || tWr.value == "" || wrReq.value == "") {
        text = `Field harus diisi bro.`;
        display(text);
    } else if (parseFloat(tMatch.value) < 0 || parseFloat(tWr.value) < 0 || parseFloat(wrReq.value) < 0) {
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
    } else if (parseFloat(tWr.value) > parseFloat(wrReq.value)) {
        text = `Kamu memerlukan sekitar <b>${loseNum}</b> lose tanpa win untuk mendapatkan win rate <b>${wrReq.value}%</b>`;
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

function rumusLose(tMatch, tWr, wrReq) {
    let persen = tWr - wrReq;
    let final = tMatch * (persen / 100);
    return Math.round(final);
}

function updateVisitCount() {
    fetch("https://api.countapi.xyz/update/johsteven/ccac8049-f0da-408a-b6d7-8826b199afd0/?amount=1").then(res => res.json()).then(res => { console.log(res.value) });
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {
    updateVisitCount();
}

function eventListener() {
    hasil.addEventListener("click", res);
}