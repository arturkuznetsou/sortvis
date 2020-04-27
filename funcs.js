function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function setDelay()
{
	delay = document.getElementById('delay').value;
}

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

function resize()
{
	var oldHeight = hBar;
	hBar = document.getElementById('height').value;
	var nBars = document.getElementById('nBars').value;
	for(var n = 0; n < nBars; n++)
	{
		bar = document.getElementById(String(n));
		let barH = Number(bar.style.height.slice(0, -2));
		document.getElementById(String(n)).style.height = barH * (hBar / oldHeight) + 'px';
	}
	document.getElementById('field').style.height = hBar * nBars + 10  + 'px';
}
