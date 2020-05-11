function hideNote(){
	document.getElementById('note').style.display = "none";
}
function hide(){
	if(document.getElementById('opts').style.display == '')
	{
		document.getElementById('opts').style.display = "none";
	}
	else{
		document.getElementById('opts').style.display = "";
	}
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function setDelay()
{
	/*
	 *The delay is not linear. This is in my opinion more natural than a linearly scaled delay.
	 */
	delay = 0.5 * Math.pow(document.getElementById('delay').value / 2, 2);
	console.log(delay);
}

function shuffle(a) {
	let j, x, i;
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
	let oldHeight = document.getElementById('field').offsetHeight;
	let newHeight = document.getElementById('height').value;
	let nBars = document.getElementById('nBars').value;
	for(let n = 0; n < nBars; n++)
	{
		bar = document.getElementById(String(n));
		let barH = Number(bar.style.height.slice(0, -2));
		document.getElementById(String(n)).style.height = barH * (newHeight / oldHeight) + 'px';
	}
	document.getElementById('field').style.height = newHeight + 'px';
}
