document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });

    document.querySelectorAll('.feature-image').forEach(image => {
        image.addEventListener('click', () => {
            const target = document.querySelector(image.dataset.scroll);
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
