

function swap(ind1, ind2) {
	var element1 = document.getElementById(String(ind1));
	var element2 = document.getElementById(String(ind2));
	var el1 = element1.style.left;
	var el2 = element2.style.left;
	document.getElementById(String(ind1)).style.left = el2;
	document.getElementById(String(ind2)).style.left = el1;
	element1.id = ind2;
	element2.id = ind1;
}

function move(begin, end)
{
	while(begin != end)
	{
		swap(begin, begin + 1 - 2 * (begin > end));
		begin += 1 - 2 * (begin > end);
	}
}


function greater(ind1, ind2)
{
	var i1 = document.getElementById(String(ind1)).style.height;
	var i2 = document.getElementById(String(ind2)).style.height;
	i1 = Number(i1.slice(0, -2));
	i2 = Number(i2.slice(0, -2));
	return i1 > i2;
}
function quickSort(start, end)
{
	document.getElementById('0').style.backgroundColor = 'red';
	var len = document.getElementById('nBars').value;
	var less = 0;
	for(var n = 1; n < len; n++)
	{

		if(greater(less, n))
		{
			move(n, 0);
			less += 1;
		}
		else{
			move(n, less + 1);
		}
	}
	return less;
}

async function bubbleSort()
{
	var execN = document.getElementById('nBars').value;
	for(var n = execN; n > 0; n--)
	{
		let index = 0;
		while(index + 1 < n)
		{
			var i1 = document.getElementById(String(index));
			var i2 = document.getElementById(String(index + 1));

			i1.style.backgroundColor = 'yellow';
			i2.style.backgroundColor = 'yellow';

			if(greater(index, index + 1))
			{
				await sleep(150);
				swap(index, index + 1);
			}
			await sleep(400);

			i1.style.backgroundColor = 'green';
			i2.style.backgroundColor = 'green';
			index += 1;
		}
	}
}
