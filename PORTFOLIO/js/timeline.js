const timelineItems = document.querySelectorAll('.timeline-item');

const revealOnScroll = () => {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Reveal ONLY when item reaches 75% of screen
        if (itemTop < windowHeight * 0.75) {
            item.classList.add('show');
        }
    });
};

// Run on load (for first item)
window.addEventListener('load', revealOnScroll);

// Run on scroll (for next items)
window.addEventListener('scroll', revealOnScroll);
