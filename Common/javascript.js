// Generate a random number between min and max
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Generate a random color
function getRandomColor() {
    var letters = '123312';
    var color = '#';
    for (var i = 0; i < 4; i++) {
        color += letters[Math.floor(Math.random() * 6)];
    }

    letters = 'ABCDEFAB';
    for (var i = 0; i < 2; i++) {
        color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
}

// Create a shape
function createShape() {
    var shape = document.createElement('div');
    shape.className = 'shape';
    shape.style.top = getRandom(-window.innerHeight/2, window.innerHeight/2) + 'px';
    shape.style.left = getRandom(-window.innerWidth/2, window.innerWidth/2) + 'px';
    shape.style.width = getRandom(window.innerHeight, window.innerHeight*2) + 'px';
    shape.style.height = getRandom(window.innerHeight, window.innerHeight*2) + 'px';
    shape.style.backgroundColor = "transparent";
    shape.style.borderColor = getRandomColor();
    shape.style.overflow = "hidden";
    shape.style.zIndex = "-1";
    shape.style.overflow = "hidden";
    

    // Add the shape to the container
    document.getElementById('wrapper').appendChild(shape);
}

// Create multiple shapes
for (var i = 0; i < 10; i++) {
    createShape();
}


const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('navbar-menu-open');
  navbarToggle.classList.toggle('navbar-toggle-open');
});