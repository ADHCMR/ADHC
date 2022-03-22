const phoneNavEl = document.querySelector('.h-nav');
const faBarsEl = document.querySelector('#burger-menu');
const header1El = document.querySelector('.h-1');
const header2El = document.querySelector('.h-2');

document.addEventListener('click', function(e) {
    e = e || window.event;
    let target = e.target || e.eventTarget
        if(target.className === 'fa-light fa-bars') {
            phoneNavEl.setAttribute('style', 'display: initial')
            target.setAttribute('class', 'fa-light fa-x');
        } else if (target.className === 'fa-light fa-x') {
            phoneNavEl.setAttribute('style', 'display: none')
            target.setAttribute('class', 'fa-light fa-bars');
        }
 }, false);
 
resizeW = (toDo) => {
    let width = window.innerWidth;
    window.addEventListener('resize', function () {
        width=window.innerWidth;
        toDo(width);
    });
    window.addEventListener('load', ()=> {
        toDo(width);
    });
}

resizeW(function (width) {
    if (width > 768) {
        phoneNavEl.setAttribute('style', 'display: initial');
        faBarsEl.setAttribute('style', 'display: none;');
    } else {
        faBarsEl.setAttribute('style', 'display: initial;');
        faBarsEl.setAttribute('class', 'fa-light fa-bars');
        phoneNavEl.setAttribute('style', 'display: none');
    }
})



// let width = 80;

// changeHeaderWidth = ()=> {
//     if(window.pageYOffset >= 120) {
//         headerEl.setAttribute('style', `position: fixed; top: 0; width: ${width}%;`);
//         if (width < 100 && window.pageYOffset < 151.6) {
//             width = window.pageYOffset*.666;
//         } else {
//             width = 100;
//         }
//     } else {
//         headerEl.setAttribute('style', 'position: absolute;');
//         width = 80;
//     }
// }


//         window.addEventListener('load', ()=> {
//             if(window.innerWidth < 768) {
//                 changeHeaderWidth();
//             }
//         });
        
//         document.addEventListener('scroll', ()=> {
//             if(window.innerWidth < 768) {
//                 changeHeaderWidth();
//             }
//         });
