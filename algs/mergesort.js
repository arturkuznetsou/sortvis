async function merge(start, mid, end)
{
	var startold = start;
	var ind = mid;
	while(start < mid && ind < end)
	{
		if(greater(start, ind))
		{
			move(ind, start);
			ind += 1;
			mid += 1;
		}
		else{
			move(start, start);
		}
		start += 1;
	}
}

async function mergeSort()
{
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	var len = document.getElementById('nBars').value;
	pairs = [];
	for(var n = 0; n < (len - (len % 2)) / 2; n++)
	{
		pairs.push([n * 2, n * 2 + 1]);
	}
	if(len % 2 == 1) { pairs[Math.floor(len / 2 - 1)][1] = len - 1; }
	for(pair of pairs)
	{
		merge(pair[0], pair[1], pair[1] + 1);
	}
}
