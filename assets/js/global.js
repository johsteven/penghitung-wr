function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const takapedia = `<a href="https://takapedia.com/" target="_blank">takapedia</a>`;
    const takapediaIG = `<a href="https://www.instagram.com/taka_pedia/" target="_blank">taka_pedia</a>`;
    const takapediaWA = `<a href="https://api.whatsapp.com/send?phone=6287843920288" target="_blank">6287843920288</a>`;

    let arrayEl = [
        `<p class="animation mb-0 text-truncate">Follow ig takapedia untuk ingfo flashsale</p>`,
        `<p class="animation mb-0 text-truncate">IG: ${takapediaIG} / WA: ${takapediaWA}</p>`,
        `<p class="animation mb-0 text-truncate">Gas langsung joki di ${takapedia} banh 😅☝️</p>`,
        `<p class="animation mb-0 text-truncate">MPL S9 kalian dukung siapa ges? kalo gw sih RRQ`,
        `<p class="animation mb-0 text-truncate">mabar banh bantu gw glory</p>`,
        `<p class="animation mb-0 text-truncate">follow ml gw ya 965629002 nick Stee.</p>`
    ];
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayEl.length) {
            array = 0;
        }
    }, 5000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');