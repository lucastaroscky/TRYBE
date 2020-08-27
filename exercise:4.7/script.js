const backgroundColorSelector = document.getElementsByClassName('background-color')[0];
const textColorSelector = document.getElementsByClassName('text-color')[0];
const fontSizeSelector = document.getElementsByClassName('font-size')[0];
const lineHeightSelector = document.getElementsByClassName('line-height')[0]
const fontFamilySelector = document.querySelectorAll('.font-family');
const btnAply = document.getElementsByClassName('aply-btn')[0];

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
  for (let i = 0; i < fontFamilySelector.length; i += 1){
   article.style.fontFamily = `${fontFamilySelector[i].value}`
  }
}


// trigger to set background Color selected
btnAply.addEventListener('click', () => {
 selectBackgroundColor();
 selectTextColor()
 defineFontSize()
 defineLineHeight()
 changeFontFamily()
})

let a = document.getElementsByClassName('clean')[0]
a.addEventListener('click', () => location.reload())

