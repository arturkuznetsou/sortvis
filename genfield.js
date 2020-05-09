var wBar;
var hBar;
var delay = 200;
var change = false;

async function genBars()
{
	change = true;
	document.getElementById('field').style.width = '90%';
	var fld = document.getElementById('field');
	var nBars = document.getElementById('nBars').value;
	fld.innerHTML = "";
	var width = fld.offsetWidth;
	var height = document.getElementById('height').value;
	fld.style.height = height + 'px';

	wBar = Math.round(width/(nBars * 2));
	hBar = Math.round(height/nBars);

	if(hBar < 1) { hBar = 1; }

	var heightArray = [];
	for(var n = 0; n < nBars; n++)
	{
		heightArray.push(n);
	}

	heightArray = shuffle(heightArray);
	fld.style.width = wBar * nBars * 2 + 'px';
	fld.style.height = hBar * nBars + 10  + 'px';

	for(var n = 0; n < nBars; n++)
	{
		var bar = document.createElement('div');
		bar.classList.add('bar');
		bar.id = n;
		bar.style.width = wBar + 'px';
		bar.style.height = (heightArray[n] + 1) * hBar + 'px';
		bar.style.left = 0.5 * wBar + wBar * n * 2 + 'px';
		fld.appendChild(bar);
	}
	busy = false;
	await sleep(2 * delay);
}
