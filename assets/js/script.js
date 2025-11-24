const burger = document.querySelector('.burger-menu');
const tabletMenu = document.querySelector('.tablet-menu');
const closeBtn = document.querySelector('.closebtn');

burger.addEventListener('click', () => {
   tabletMenu.style.display = 'flex';
    
})

closeBtn.addEventListener('click', () => {
    tabletMenu.style.display = 'none';
})



