const menuBar = document.querySelector('.fa-equals');
const navWindow = document.querySelector('.nav-animated');
const leftContainer = navWindow.querySelector('.left-container');
const rightContainer = navWindow.querySelector('.right-container');
const cross = document.querySelector('.fa-xmark');

menuBar.addEventListener('click', function(){
    navWindow.classList.add('display');
    leftContainer.classList.add('position-down');
    rightContainer.classList.add('position-down');
    cross.classList.remove('display-none');   
});

cross.addEventListener('click', function(){
    navWindow.classList.remove('display');
    leftContainer.classList.remove('position-down');
    rightContainer.classList.remove('position-down');
    cross.classList.add('display-none');
});