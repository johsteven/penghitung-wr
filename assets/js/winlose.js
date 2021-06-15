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

    const winNum = win(tMatch, tWr);
    const loseNum = lose(tMatch, tWr);

    let text = "";
    if (isNaN(tMatch) || isNaN(tWr)) {
        text = `Field harus diisi bro.`;
        display(text);
    } else if (tMatch < 0 || tWr < 0) {
        text = `Field tidak boleh lebih kecil dari 0`;
        display(text);
    } else if (tWr > 100) {
        text = `WR tidak boleh lebih dari 100%`;
        display(text);
    } else {
        text = `Total win: <b>${winNum}</b> match <br> Total lose: <b>${loseNum}</b> match <br>`;
        display(text);
    }
}

function display(text) {
    return resultText.innerHTML = text;
}

function win(tMatch, tWr) {
    return Math.round(tMatch * (tWr / 100));
}

function lose(tMatch, tWr) {
    return Math.round(tMatch - (tMatch * (tWr / 100)));
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