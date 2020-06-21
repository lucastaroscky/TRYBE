const backgroundColorSelector = document.getElementsByClassName('background-color')[0];
const textColorSelector = document.getElementsByClassName('text-color')[0];
const fontSizeSelector = document.getElementsByClassName('font-size')[0];
const lineHeightSelector = document.getElementsByClassName('line-height')[0]
const fontFamilySelector = document.querySelectorAll('.font-family');
const btnAply = document.getElementsByClassName('aply-btn')[0];
const btnClean = document.getElementsByClassName('clean')[0]

// function to select background colors 
const selectBackgroundColor = () => {
	let html = document.getElementsByTagName('html')[0]; // selecting html collection
	html.style.backgroundColor = backgroundColorSelector.value; //aplying background color from the selector
}

// function to select text color
const selectTextColor = () => {
	let article = document.getElementsByClassName('article-content')[0];
	article.style.color = textColorSelector.value
}

// function to define font size
const defineFontSize = () => {
	let article = document.getElementsByClassName('article-content')[0];
	article.style.fontSize = `${fontSizeSelector.value}px`
}

// function to define line heigh
const defineLineHeight = () => {
	let article = document.getElementsByClassName('article-content')[0];
	article.style.lineHeight = `${lineHeightSelector.value}px`
}

// function to change font family 
const changeFontFamily = () => {
	let article = document.getElementsByClassName('article-content')[0];
	for (let i = 0; i < fontFamilySelector.length; i += 1) {
		article.style.fontFamily = `${fontFamilySelector[i].value}`
	}
}

// trigger to aply all preferences defined by user
btnAply.addEventListener('click', () => {
	selectBackgroundColor();
	selectTextColor()
	defineFontSize()
	defineLineHeight()
	changeFontFamily()
})

// localStorage
document.onchange = () => {
	let background = backgroundColorSelector.value;
	let text = textColorSelector.value;
	let fontSize = `${fontSizeSelector.value}px`;
	let line = lineHeightSelector.value;
	let font = fontFamilySelector.value;
	localStorage.setItem('background', background);
	localStorage.setItem('fontsize', fontSize);
	localStorage.setItem('text', text);
	localStorage.setItem('line', line);
	localStorage.setItem('font', font);
}

window.onload = () => {
	let html = document.getElementsByTagName('html')[0];
	html.style.backgroundColor = localStorage.getItem('background');
	let article = document.getElementsByClassName('article-content')[0];
	article.style.color = localStorage.getItem('text');
	article.style.fontSize = localStorage.getItem('fontsize');
	article.style.lineHeight = localStorage.getItem('line');
	article.style.fontFamily = localStorage.getItem('font');
}

// trigger to reload page and clean all 
btnClean.addEventListener('click', () => {
	localStorage.clear()
	location.reload()
})

