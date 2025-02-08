const btn = document.querySelector('.js1-button');
console.log(btn.classList.contains('js1-button'));

function toggleButton(clickedclass) {
    const buttons = document.querySelector(clickedclass);
    if (!buttons.classList.contains('is-toggled')) {
        turnoffPreviousBtn();
        buttons.classList.add('is-toggled');
    } else {
        buttons.classList.remove('is-toggled');
    }
}

function turnoffPreviousBtn() {
    const previousBtn = document.querySelector('.is-toggled');
    if (previousBtn) {
        previousBtn.classList.remove('is-toggled')
    }
}