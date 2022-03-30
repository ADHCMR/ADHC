const headerEl = document.querySelector('.h-1');

const windows = {
    index: {
        path: './',
        headerImgPath: './public/assets/images/header/index.webp',
        headerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores minus perspiciatis mollitia repudiandae? Nobis earum incidunt, sed omnis vel inventore, et voluptate id numquam iure ab dolorum doloribus quod.',
        landingPagePath: './index.html'
    },
    enroll: {
        path: './enroll.html',
        headerImgPath: './public/assets/images/header/enroll.webp',
        headerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores minus perspiciatis mollitia repudiandae? Nobis earum incidunt, sed omnis vel inventore, et voluptate id numquam iure ab dolorum doloribus quod.',
        landingPagePath: '../index.html'
    },
    offer: {
        path: './offer.html',
        headerImgPath: './public/assets/images/header/offer.jpeg',
        headerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores minus perspiciatis mollitia repudiandae? Nobis earum incidunt, sed omnis vel inventore, et voluptate id numquam iure ab dolorum doloribus quod.',
        landingPagePath: '../index.html'
    },
    setting: {
        path: './setting.html',
        headerImgPath: './public/assets/images/header/setting.webp',
        headerText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores minus perspiciatis mollitia repudiandae? Nobis earum incidunt, sed omnis vel inventore, et voluptate id numquam iure ab dolorum doloribus quod.',
        landingPagePath: '../index.html'
    }
}
let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1); 
let page = filename.split('.')[0] || 'index';

headerEl.innerHTML=
`
    <img 
      src="${windows[page].headerImgPath}"
      alt='header image'
      class='h-img'
    />
    <a 
    target="_blank" 
    rel="noopener"
    href='https://www.paypal.com/donate?token=QTKjr0sKfsGYpNfll1Ph92T9yGrgHbRSG-73MU_qiv8vcdImwG_oLZfR6dXig4IdttdnqK6rbouSphts'><i class="fa-solid fa-hand-holding-dollar donate"> Donate</i></a>
    <div class='h-txt-con'>
      <p>${windows[page].headerText}</p>
    </div>
      <div class='h-con'>
      <a class='logo-a' href='./index.html'>
        <img
          src="./public/assets/images/logo.webp"
          alt="adult day health care logo"
          class="logo"
        />
    </a>
        <i class="fa-light fa-bars" id='burger-menu'></i>
      </div>
      <div class="h-nav-con">
        <nav class="h-nav">
          <ul>
            <li><a href="./">Our Program</a></li>
            <li><a href="./offer.html">What We Offer</a></li>
            <li><a href="./setting.html">Physical Setting</a></li>
            <li><a href="./enroll.html">Enroll</a></li>
            <li class='nav-contact'>Contact 
            <ul class='contact-dropdown'>
            <li id='phone-number'>(707) 825-8059</li>
            <li id='email-address-header'>adhcofmadriver@outlook.com</li>
            </ul>
            </li>
          </ul>
        </nav>
    </div>
`
const phoneNavEl = document.querySelector('.h-nav');
const faBarsEl = document.querySelector('#burger-menu');
const contactEl = document.querySelector('.nav-contact');
const contactDropdownEl = document.querySelector('.contact-dropdown');

document.addEventListener('click', function(e) {
    e = e || window.event;
    let target = e.target || e.eventTarget;
        if(target.className === 'fa-light fa-bars') {
            phoneNavEl.setAttribute('style', 'display: initial')
            target.setAttribute('class', 'fa-light fa-x');
        } else if (target.className === 'fa-light fa-x') {
            phoneNavEl.setAttribute('style', 'display: none')
            target.setAttribute('class', 'fa-light fa-bars');
        }
 }, false);


 //CONTACT NAV 'DROPDOWN' START
     document.addEventListener('click', function(e){
        e = e || window.event;
        let target = e.target || e.eventTarget;
        if (target != contactEl)
            contactDropdownEl.setAttribute('style', 'display: none');
        }, false)

        document.addEventListener('scroll', function(){
                contactDropdownEl.setAttribute('style', 'display: none');
            }, false)

    contactEl.addEventListener('click', function() {
        contactDropdownEl.setAttribute('style', 'display: flex');
     })
 //CONTACT NAV 'DROPDOWN' END

 
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
    if (width >= 768) {
        phoneNavEl.setAttribute('style', 'display: initial');
        faBarsEl.setAttribute('style', 'display: none;');
    } else {
        faBarsEl.setAttribute('style', 'display: initial;');
        faBarsEl.setAttribute('class', 'fa-light fa-bars');
        phoneNavEl.setAttribute('style', 'display: none');
    }
});