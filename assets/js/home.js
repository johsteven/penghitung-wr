// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

// Functions
function res() {
    validation();
}

function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);
    const wrReq = parseFloat(document.querySelector("#wrReq").value);

    const resultNum = rumus(tMatch, tWr, wrReq);
    const loseNum = rumusLose(tMatch, tWr, wrReq);

    let text = "";
    if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
        text = `Field harus diisi bro.`;
        display(text);
    } else if (tMatch < 0 || tWr < 0 || wrReq < 0) {
        text = `Field tidak boleh lebih kecil dari 0`;
        display(text);
    } else if (tMatch % 1 != 0) {
        text = `Field harus bilangan bulat`;
        display(text);
    } else if (tWr == 100 && wrReq == 100) {
        text = `Kamu memerlukan sekitar <b>0</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text);
    } else if (wrReq > 100 || tWr > 100) {
        text = `WR tidak boleh lebih dari 100%`;
        display(text);
    } else if (tWr > wrReq) {
        text = `Kamu memerlukan sekitar <b>${loseNum}</b> lose tanpa win untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text);
    } else if (tMatch == 0 && tWr == 0 && wrReq == 100) {
        text = `Kamu memerlukan sekitar <b>1</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text);
    } else if (wrReq == 100) {
        text = `Gak bisa bro, jangan aneh-aneh.`;
        display(text);
    } else if (resultNum >= 100000) {
        text = `<b>LU GAK AKAN BISA!</b> <br> Kamu memerlukan lebih dari <b>100.000</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text);
    } else {
        text = `Kamu memerlukan sekitar <b>${resultNum}</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
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
    fetch("https://api.countapi.xyz/update/johsteven/ccac8049-f0da-408a-b6d7-8826b199afd0/?amount=1").then(res => res.json()).then(res => { console.log(res) });
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {
    updateVisitCount();
    welcomeMsg();
}

function eventListener() {
    hasil.addEventListener("click", res);
}