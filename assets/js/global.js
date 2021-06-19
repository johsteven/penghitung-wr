function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const takapedia = `<a href="https://msha.ke/takapedia/" target="_blank">takapedia</a>`;
    const linkTiktokGua = `<a href="https://vt.tiktok.com/ZSJQ5XuUu/" target="_blank">tiktok</a>`

    const msg1 = `<p class="animation mb-0 text-truncate">JOKI, TOP UP & GIFT SKIN ML di ${takapedia} ya</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">Takapedia dijamin amanah dan terpercaya</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Follow ${linkTiktokGua} gw ya</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Jangan lupa follow sosmed gua dibawah ya</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4];
    let arrayMax = 4;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4250);
}