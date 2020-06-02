(() => {
	let selectedMenu = 2; // Home btn
	window.addEventListener('DOMContentLoaded', () => {
		let i = 0;
		for (let e of document.querySelectorAll(".bottomNav > ul > li")) {
			let menu = ++i;
			e.onclick = () => {
				document.querySelector(`.bottomNav > ul > li:nth-child(${selectedMenu})`).classList.remove("selectedMenu");
				document.querySelector(`.bottomNav > ul > li:nth-child(${menu})`).classList.add("selectedMenu");
                selectedMenu = menu;
			};
		}
	});
})();