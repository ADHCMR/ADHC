const headerEl = document.querySelector('.h-nav-1');
let width = 80;
document.addEventListener('scroll', ()=> {
    if(window.pageYOffset >= 120) {
        headerEl.setAttribute('style', `position: fixed; top: 0; width: ${width}%;`);
        if (width < 100) {
            width = window.pageYOffset*.666;
            console.log(width);
        } else {
            width = 100;
        }
    } else {
        headerEl.setAttribute('style', 'position: absolute;');
        width = 80;
    }
})