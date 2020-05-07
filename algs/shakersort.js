async function shakerSort()
{
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	len = document.getElementById('nBars').value;

	var swapped = true;
	for(var n = 0; n < len && swapped; n++)
	{
		swapped = false;
		let index = n;
		while(index + 1 < len)
		{
			changeColor(index, chc);
			changeColor(index + 1, chc);

			if(greater(index, index + 1))
			{
				swapped = true;
				await sleep(delay);
				swap(index, index + 1);
			}
			await sleep(delay);

			changeColor(index, unoc);
			changeColor(index + 1, unoc);
			index += 1;
			if(change) { return; }
		}
		len -= 1;
		changeColor(len, donec);
		index = len - 1;
		if(swapped)
		{
			swapped = false;
			while(index > n)
			{
				changeColor(index, chc);
				changeColor(index - 1, chc);

				if(!greater(index, index - 1))
				{
					await sleep(delay);
					swap(index, index - 1);
					swapped = true;
				}
				await sleep(delay);

				changeColor(index, unoc);
				changeColor(index - 1, unoc);
				index -= 1;
				if(change) { return; }
			}
		}
		changeColor(n, donec);
	}
	for(;n < len; n++)
	{
		changeColor(n, donec);
	}
}
