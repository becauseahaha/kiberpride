document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.js-header');
    const burger = document.querySelector('.js-header-burger');
    const closer = document.querySelector('.js-header-closer');

    function handleScroll() {
        const scrollTop = window.scrollY;

        if (scrollTop > 10) {
            header.classList.add('_scrolled');
        } else {
            header.classList.remove('_scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    burger.addEventListener('click', function () {
        header.classList.add('_visible')
    })
    closer.addEventListener('click', function () {
        header.classList.remove('_visible')
    })

})