(() => {
	const calcHeight = element => {
		return element.scrollHeight + parseInt(getComputedStyle(element).marginTop) + parseInt(getComputedStyle(element).marginBottom);
	}

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

	window.addEventListener('DOMContentLoaded', () => {
		let i = 0;
		let selectedMenu = 2; // Home btn
		for (let e of document.querySelectorAll(".bottomNav > ul > li")) {
			let menu = ++i;
			e.onclick = () => {
				document.querySelector(`.bottomNav > ul > li:nth-child(${selectedMenu})`).classList.remove("selectedMenu");
				document.querySelector(`.bottomNav > ul > li:nth-child(${menu})`).classList.add("selectedMenu");
				selectedMenu = menu;
			};
		}

		window.map = new kakao.maps.Map(document.querySelector("#map"), options);

		const open = async () => {
			let target = window.innerHeight
				- calcHeight(document.querySelector("header > .topNav"))
				- calcHeight(document.querySelector(".slider"))
				- calcHeight(document.querySelector(".search-box"))
				- calcHeight(document.querySelector(".bottomNav")) + 15;
			let origin = document.querySelector(".scroll").scrollHeight;

			for (let i = origin; i <= target; i++) {
				if (i % 20 === 0) await new Promise(r => setTimeout(() => r(), 1));
				document.querySelector(".scroll").style.height = `${i}px`;
			}
		}

		let expand = false;
		let min_height = document.querySelector(".scroll").scrollHeight;
		document.querySelector(".slider").addEventListener('click', async function () {
			if (!expand) await open();
			else for (let i = document.querySelector(".scroll").scrollHeight; i >= min_height; i--) {
				if (i % 20 === 0) await new Promise(r => setTimeout(() => r(), 1));
				document.querySelector(".scroll").style.height = `${i}px`;
			}
			console.log(expand)

			expand = !expand;
		});

		window.addEventListener('resize', () => {
			if (expand) open();
		});

		var customOverlay = new kakao.maps.CustomOverlay({
			position: new kakao.maps.LatLng(35.2038, 129.0859),
			content: `<div><h1>동래시장</h1><div>동래시장</div></div>`,
			xAnchor: 0.3,
			yAnchor: 0.91
		});

		customOverlay.setMap(map);
	});
})();