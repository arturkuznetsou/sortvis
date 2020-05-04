async function bogoSort()
{
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	len = document.getElementById('nBars').value;
	for(var i = 0; i < len - 1; i++)
	{
		if(change){ return; }
		if(greater(i, i + 1))
		{
			genBars();
			busy = true;
			change = false;
			i = -1;
			await sleep(delay);
		}
	}
	for(var n = 0; n < len; n++)
	{
		changeColor(n, donec);
	}
}
