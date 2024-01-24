const menu = document.querySelector('main__page');
const classic = document.getElementById('classic__food');


let classic__clicked = false
function classic__food__clicked() {
    if (classic__clicked == false) {
        classic__clicked = true;

        classic.style.opacity = 1;
        classic.style.height = 'auto';
    } else {
        classic__clicked = false;
        classic.style.opacity = 0;

        // Change the height once the opacity transition is completed
        classic.addEventListener('transitionend', function () {
            classic.style.height = '0';
        }, { once: true });
    }
}
const appetizer = document.getElementById('appetizer__food');

let appetizer__clicked = false;
function appetizer__food__clicked() {
    if (appetizer__clicked == false) {
        appetizer__clicked = true;

        appetizer.style.opacity = 1;
        appetizer.style.height = 'auto';
    } else {
        appetizer__clicked = false;
        appetizer.style.opacity = 0;

        // Change the height once the opacity transition is completed
        appetizer.addEventListener('transitionend', function () {
            appetizer.style.height = '0';
        }, { once: true });
    }
}

const side = document.getElementById('side__food');

let side__clicked = false
function side__food__clicked() {
    if (side__clicked == false) {
        side__clicked = true;

        side.style.opacity = 1;
        side.style.height = 'auto';
    } else {
        side__clicked = false;
        side.style.opacity = 0;

        // Change the height once the opacity transition is completed
        side.addEventListener('transitionend', function () {
            side.style.height = '0';
        }, { once: true });
    }
}
const dessert = document.getElementById('dessert__food');

let dessert__clicked = false;
function dessert__food__clicked() {
    if (dessert__clicked == false) {
        dessert__clicked = true;

        dessert.style.opacity = 1;
        dessert.style.height = 'auto';
    } else {
        dessert__clicked = false;
        dessert.style.opacity = 0;

        // Change the height once the opacity transition is completed
        dessert.addEventListener('transitionend', function () {
            dessert.style.height = '0';
        }, { once: true });
    }
}
