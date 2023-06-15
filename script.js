function fMenuFlip() {
    let fArrow = document.querySelector('.f-arrow');
    let fDownMenu = document.querySelector('.f-down-menu');
    if (fDownMenu.style.display === 'none') {
        fDownMenu.style.display = 'flex';
        fArrow.src = 'images/icon-arrow-up.svg';
    } else {
        fDownMenu.style.display = 'none';
        fArrow.src = 'images/icon-arrow-down.svg';
    }
}

function cMenuFlip() {
    let cArrow = document.querySelector('.c-arrow');
    let cDownMenu = document.querySelector('.c-down-menu');
    if (cDownMenu.style.display === 'none') {
        cDownMenu.style.display = 'flex';
        cArrow.src = 'images/icon-arrow-up.svg';
    } else {
        cDownMenu.style.display = 'none';
        cArrow.src = 'images/icon-arrow-down.svg';
    }
}