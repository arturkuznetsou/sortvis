async function merge(start, mid, end)
{
	var moved = 0;
	var midb = mid;

	while(start < mid && mid < indend)
	{
		if(greater(start, end))
		{
			move(end, start + moved);
		}
		else{
			move(start, start + moved);
		}
		moved += 1;
	}
}

async function mergeSort()
{
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	var len = document.getElementById('nBars').value;
	pairs = [];
	for(var n = 0; n < len / 2; n++)
	{
		pairs.push([n * 2, n * 2 + 1]);
	}
}
