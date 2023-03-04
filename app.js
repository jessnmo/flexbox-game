const btnElement = document.querySelector('button');
console.log(btnElement);

function addCSS() {
	const textAreaElement = document.querySelector('textarea');
	const css = textAreaElement.value;
	const foreFront = document.querySelector('#forefront');
	foreFront.style.cssText = css; //assign the value that was put in textarea
	console.log(foreFront);
}

btnElement.addEventListener('click', addCSS);
