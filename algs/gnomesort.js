async function gnomeSort()
{
	change = false;
if (busy) { window.alert(busyMessage); return;}
	busy = true;
	var index = 0;
	var len = Number(document.getElementById('nBars').value);
	for(var n = 1; n < len; n++)
	{
		var x = n;
		if(change) { return; }
		changeColor(x, pivc);
		await sleep(delay);
		if(change) { return; }
		while(x > 0 && !greater(x, x - 1))
		{
			await sleep(delay);
			if(change) { return; }
			swap(x, x - 1);
			x -= 1;
		}
		if(change) { return; }
		await sleep(delay);
		changeColor(x, unoc);
	}
	for(var n = 0; n < len; n++)
	{
		changeColor(n, donec);
	}
}
