// Line Clamp 

const readMore = document.querySelectorAll('.read-more');

readMore.forEach(function(box){
    box.addEventListener('click', function(e){
        const paragraph = e.currentTarget.previousElementSibling;
        paragraph.classList.toggle('line-clamp');
    })
})

// Arrow rotation

readMore.forEach(function(box){
    box.addEventListener('click', function(e){
        const paragraph = e.currentTarget.lastElementChild;
        paragraph.classList.toggle('rotate');
    })
})

