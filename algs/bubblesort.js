/* BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT
   BUBBLE SORT */

async function bubbleSort()
{
	change = false;
	if(busy){ return;}
	busy = true;
	var execN = document.getElementById('nBars').value;
	for(var n = execN; n > 0; n--)
	{
		let index = 0;
		while(index + 1 < n)
		{
			changeColor(index, chc);
			changeColor(index + 1, chc);

			if(greater(index, index + 1))
			{
				await sleep(delay);
				swap(index, index + 1);
			}
			await sleep(delay);

			changeColor(index, unoc);
			changeColor(index + 1, unoc);
			index += 1;
			if(change) { return; }
		}
		changeColor(n - 1, donec);
	}
}

