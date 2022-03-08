// Get Button Object
let scrollTop = document.getElementById("scrollToggle");

// Add clickable event to Button Element
scrollTop.addEventListener("click", function() {
    // Go to Position of 0, whilst using a smooth transition
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});