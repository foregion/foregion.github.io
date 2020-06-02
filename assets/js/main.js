(() => {
    const clickMenu = i => () => {
            for (let e of document.querySelectorAll(".bottomNav > ul > li")) {
                e.classList.remove('selectedMenu');
            }
            document.querySelector(`.bottomNav > ul > li:nth-child(${i})`).classList.add("selectedMenu")
    };

    let selectedMenu = 1;
    window.addEventListener('DOMContentLoaded', () => {
        let i = 0;
        for (let e of document.querySelectorAll(".bottomNav > ul > li")) {
            console.log(e)
            e.onclick = clickMenu(++i);
        }
    });
})();