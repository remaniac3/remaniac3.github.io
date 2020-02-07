function indexBackground() {
	let x = Math.floor((Math.random() * 3) + 1);

	// Solution of properties with dashes.
	document.getElementById('indexBG').style['background-image'] = 'url("../img/index/image' + x + '.jpg")';
}

indexBackground();