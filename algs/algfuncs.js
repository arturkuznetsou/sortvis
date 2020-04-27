
function changeColor(ind, col)
{
	 document.getElementById(String(ind)).style.backgroundColor = col;
}
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

