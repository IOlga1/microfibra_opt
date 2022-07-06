const tooltip = document.querySelectorAll('#tooltip');

tooltip.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('tooltip_hidden');
    })
})