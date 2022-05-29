const paletteColors = document.querySelectorAll ('.color');
function selectColor() {
   for (let index = 0; index < paletteColors.length; index +=1) {
       paletteColors[index].addEventListener('click', () => {
           const selectedHolder = document.querySelector('.selected');
           selectedHolder.classList.remove('selected');
           paletteColors[index].classList.add('selected')
       })
       
   } 
}
selectColor();

const whitePixel = document.getElementsByClassName('pixel');
function paintPixel() {
    for (let index = 0; index < whitePixel.length; index +=1) {
        whitePixel[index].addEventListener('click', () => {
            const selectedColor1 = document.querySelector('.selected');
            const selectedColor2 = window.getComputedStyle(selectedColor1, null);
            const selectedColorValue = selectedColor2.getPropertyValue('background-color');
            whitePixel[index].style.backgroundColor = selectedColorValue;

        })
    }
}
paintPixel();

function clearButton() {
    const button = document.getElementById('clear-board');
    button.addEventListener('click', () => {
      for (let index = 0; index < whitePixel.length; index +=1) {
        whitePixel[index].style.backgroundColor = 'white';
      }
    });
  }
  clearButton();



    