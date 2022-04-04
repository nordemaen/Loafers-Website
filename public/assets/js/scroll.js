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

function checkScroll() {
    // Toggle button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTop.style.display = 'block';
    }
    else {
        scrollTop.style.display = 'none';
    }
}

// If Scroll is greater than 20 then call function
window.onscroll = function() { checkScroll() };