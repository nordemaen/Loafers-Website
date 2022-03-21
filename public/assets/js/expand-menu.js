// Get all buttons with class of 'content'
document.querySelectorAll('.expand').forEach(button => {
    button.addEventListener('click', () => {
        let expandContent = button.nextElementSibling;

        expandContent.classList.toggle('hidden');

    })
})