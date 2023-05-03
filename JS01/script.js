if (document.querySelector('.gallery'))
    document.documentElement.addEventListener('click', galleryHandler);

function galleryHandler(event) {
    let target = event.target;
    if (target.tagName === 'IMG') {
        target.classList.toggle('active');
    }
}

if (document.querySelector('.store'))
    document.documentElement.addEventListener('click', storeHandler);

function storeHandler(event) {
    let target = event.target;
    let storeDiv = document.querySelector('.store');
    let basketDiv = document.querySelector('.basket');
    let buttonText = storeDiv.querySelector('span');
    let textElements = basketDiv.querySelectorAll('span');
    if (target.tagName === 'SPAN' && target.innerHTML === buttonText.innerText) {
        let index = Array.from(target.parentNode.children).indexOf(target);
        let text = textElements[index];
        let value = text.innerHTML;
        value++;
        text.innerHTML = value;
    }
}

if (document.querySelector('.tables')) {
    document.documentElement.addEventListener('click', tablesHandler);
    document.documentElement.addEventListener('contextmenu', tablesHandler);
}

function tablesHandler(event) {
    let target = event.target;
    if (target.tagName === 'TD') {
        if (event.button === 0) {
            target.classList.toggle('yellow')
        } else {
            event.preventDefault();
            target.classList.toggle('blue');
        }
    }
}