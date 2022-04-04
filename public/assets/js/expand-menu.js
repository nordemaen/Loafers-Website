// Get all buttons with class of 'content'
document.querySelectorAll('.expand').forEach(button => {
    // add event listener to each button
    button.addEventListener('click', () => {
        let expandContent = button.nextElementSibling;
        // toggle 'hidden' class, thus showing content
        expandContent.classList.toggle('hidden');
    })
})