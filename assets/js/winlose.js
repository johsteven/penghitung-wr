// Variables
const tMatch = document.querySelector("#tMatch");
const tWr = document.querySelector("#tWr");
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

// Functions
function res() {
    validation();
}

function validation() {
    const winNum = win(tMatch.value, tWr.value);
    const loseNum = lose(tMatch.value, tWr.value);
    let text = "";
    if (tMatch.value == "" || tWr.value == "") {
        text = `Field harus diisi bro.`;
        display(text);
    } else if (parseFloat(tMatch.value) < 0 || parseFloat(tWr.value) < 0) {
        text = `Field tidak boleh lebih kecil dari 0`;
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