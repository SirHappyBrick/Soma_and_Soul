// Shop

const form = document.querySelectorAll('.checkbox-container');

form.forEach(function(box){
    box.addEventListener('click', function(e){
        const paragraph = e.currentTarget.nextElementSibling;
        paragraph.classList.toggle('hide');
    })
})

form.forEach(function(box){
    box.addEventListener('click', function(e){
        const paragraph = e.currentTarget.nextElementSibling.nextElementSibling;
        paragraph.classList.toggle('hide');
    })
})

form.forEach(function(box){
    box.addEventListener('click', function(e){
        const paragraph = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling;
        paragraph.classList.toggle('hide');
    })
})