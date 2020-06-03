(() => {
	let options = {
		center: new kakao.maps.LatLng(37.5536, 126.9696),
		level: 3,
		draggable: true,
		scrollwheel: true
	};

	navigator.geolocation.getCurrentPosition(res => {
		map.setCenter(new kakao.maps.LatLng(res.coords.latitude, res.coords.longitude));
	}, () => {
	});

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

		window.map = new kakao.maps.Map(document.querySelector("#map"), options);
	});
})();