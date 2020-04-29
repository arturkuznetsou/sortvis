async function bogoSort()
{
	change = false;
	if(busy){ return;}
	busy = true;
	len = document.getElementById('nBars').value;
	for(var i = 0; i < len - 1; i++)
	{
		if(change)
		{
			return;
		}
		if(greater(i, i + 1))
		{
			genBars();
			change = false;
			i = -1;
			await sleep(delay);
		}
	}
}
