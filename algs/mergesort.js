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

async function mergeSort(start = 0, len = document.getElementById('nBars').value)
{
	if(len - start > 1)
	{
		var mid = Math.floor((len - start) / 2 + start);
		await mergeSort(start, mid);
		await mergeSort(mid, len);
		await merge(start, mid, len);
	}
}
/*
async function mergeSort()
{
	change = false;
	if (busy) { window.alert(busyMessage); return;}
	busy = true;
	var len = document.getElementById('nBars').value;
	inds1 = [];
	inds2 = [];
	for(var n = 0; n < len; n++)
	{
		if(n < len / 2 + 1) { inds1.push(n); inds1[inds1.length - 1];}
		else { inds2.push(n); }
	}
	prompt(inds1);
	prompt(inds2);
	busy = false;
}
*/
