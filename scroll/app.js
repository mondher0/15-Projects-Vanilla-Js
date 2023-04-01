const nav = document.querySelector('nav');

// when we scroll 
window.addEventListener('scroll', () => {
    // if we scroll more than 90px
    if (window.scrollY > 90) {
        // add the class 'scroll' to the nav
        nav.classList.add('fixed-nav');
    } else {
        // remove the class 'scroll' from the nav
        nav.classList.remove('fixed-nav');
    }
});
