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



    