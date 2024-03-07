
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

// Get the element containing the picks
const picksElement = document.querySelector('.picks');

// Set the autoscroll speed (pixels per second)
const scrollSpeed = 100;

// Set the duration of autoscroll (in seconds)
const scrollDuration = 10; // Adjust based on your preference

// Variable to track the start time
let startTime;

// Function to perform the autoscroll animation
function autoScrollPicks(timestamp) {
    // Set the start time if not set
    if (!startTime) {
        startTime = timestamp;
    }

    // Calculate the elapsed time
    const elapsedTime = timestamp - startTime;

    // Calculate the scroll amount based on the speed and time elapsed
    const scrollAmount = (elapsedTime / 1000) * scrollSpeed;

    // Update the scroll position
    picksElement.scrollLeft = scrollAmount;

    // Check if the end of the scrollable content is reached
    if (picksElement.scrollLeft + picksElement.clientWidth >= picksElement.scrollWidth) {
        // Reset scroll position to the beginning
        picksElement.scrollLeft = 0;

        // Reset the start time for continuous scrolling
        startTime = timestamp;
    }

    // Continue scrolling until the duration is reached
    if (elapsedTime < scrollDuration * 1000) {
        // Request the next animation frame for continuous scrolling
        requestAnimationFrame(autoScrollPicks);
    }
}

// Start the autoscroll animation loop
requestAnimationFrame(autoScrollPicks);