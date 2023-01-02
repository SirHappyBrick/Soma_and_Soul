// Procedure description

const box = document.querySelectorAll('.single-procedure-container');

box.forEach(function(e){
    e.addEventListener('click', function(e){
        const procedure = e.currentTarget.lastElementChild;
        procedure.classList.toggle('display');
    })
})

// Arrow rotation

box.forEach(function(box){
    box.addEventListener('click', function(e){
        const arrow = e.currentTarget.firstElementChild.lastElementChild;
        arrow.classList.toggle('rotate');
    })
})