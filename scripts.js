document.addEventListener('DOMContentLoaded', function() {
    var fadeIns = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        for (let i = 0; i < fadeIns.length; i++) {
            let element = fadeIns[i];
            let rect = element.getBoundingClientRect();
            let elementTop = rect.top + scrollY;
            let elementBottom = elementTop + rect.height;

            if (scrollY + windowHeight > elementTop && scrollY < elementBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
