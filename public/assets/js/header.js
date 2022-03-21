const headerEl = document.querySelector('.h-nav-1');
let width = 80;

changeHeaderWidth = ()=> {
    if(window.pageYOffset >= 120) {
        headerEl.setAttribute('style', `position: fixed; top: 0; width: ${width}%;`);
        if (width < 100 && window.pageYOffset < 151.6) {
            width = window.pageYOffset*.666;
        } else {
            width = 100;
        }
    } else {
        headerEl.setAttribute('style', 'position: absolute;');
        width = 80;
    }
}
window.addEventListener('load', ()=> {
    changeHeaderWidth();
});

document.addEventListener('scroll', ()=> {
    changeHeaderWidth();
});