// Get Hamburger element
let toggle = document.getElementById('mobile-toggle');
// Get Mobile-Menu container to toggle
let menu = document.getElementById('mobile-menu');

// Add EventListener of type 'click'
// onclick, toggle TailWind CSS property of 'hidden'
toggle.addEventListener('click', () => {
    menu.classList.toggle("hidden");
});