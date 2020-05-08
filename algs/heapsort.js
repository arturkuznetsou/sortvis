/*
let mcols = [
	'92140C',
	'A4036F',
	'048BA8',
	'16DB93',
	'EFEA5A',
	'F29E4C',
	'16262E'
]
depth = log2(items + 1)
*/


async function heapSort()
{
	let tree = [];
	let len = document.getElementById('nBars').value;
	let depth = Math.ceil(Math.log(Number(len) + 1) / Math.log(2));
	for(let n = 0; n < mcols.length; n++)
	{
		changeColor(n, mcols[n]);
	}
}
