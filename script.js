

const container = document.querySelector('.container');
const generateBtn = document.querySelector('.generate');
const hexValue = document.querySelector('.hexValue');

/* const colors = ['#DFFF00','#FFBF00','#FF7F50','#DE3163','#CD5C5C','#F08080','#CCCCFF','#FFFFFF','#FF0000'];
function RandomNumber(){
    return Math.floor(Math.random() * colors.length); // this will generate random number from 0 to colors.length-1
}

generateBtn.addEventListener('click', () => {
    let color = colors[RandomNumber()];
    container.style.backgroundColor = color;
    hexValue.innerText = color;

}); */

if (!container || !generateBtn || !hexValue) {
    console.error('One or more elements not found in the document.');
    // this handle whether any element in html is not present
}

const generateColor = () => {
    const color = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = `#${color}`;
    hexValue.innerHTML = `#${color}`;
};

generateBtn.addEventListener('click', generateColor);
generateColor();