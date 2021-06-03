const btn = document.querySelector('.hamburger'); 
const img = document.querySelector('.hamburger img'); 
const navTag = Array.from(document.getElementsByName('tag'));

// Funcion para rotar la flecha
navTag.forEach(myFunction);

function myFunction(index, item) {
    navTag[item].addEventListener('click', () => {
        if (navTag[item].classList.contains('rotate')) {
            navTag[item].classList.remove('rotate');
        } else {
            navTag[item].classList.add('rotate');

        } 
    }) 
}








/* Hamburger
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    
    if (btn.classList.contains('active')) {
        img.src = 'images/icon-close.svg';
    } else {
        img.src = 'images/icon-hamburger.svg';
    }
});
*/
