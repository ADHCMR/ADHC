const headerEl = document.querySelector('.h-1');
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

const windows = {
    index: {
        path: './',
        headerImgPath: './public/assets/images/header/index.webp',
        headerText: `Since 1985 Adult Day Health Care of Mad River has been providing a warm, welcoming,
                    community based day program for adults who are dependent on others for some of
                    their care.`,
        landingPagePath: './index.html'
    },
    enroll: {
        path: './enroll.html',
        headerImgPath: './public/assets/images/header/enroll.webp',
        headerText: 'Adult Day Health Care of Mad River is always accepting new participants. If you are interested in enrolling or just want to learn more about our program please call us or complete the short interest form below.',
        landingPagePath: '../index.html'
    },
    offer: {
        path: './offer.html',
        headerImgPath: './public/assets/images/header/offer.webp',
        headerText: 'Adult Day Health Care of Mad River offers a wide variety of professional services to serve the varied needs of our participants.',
        landingPagePath: '../index.html'
    },
    setting: {
        path: './setting.html',
        headerImgPath: './public/assets/images/header/setting.webp',
        headerText: 'Adult Day Health Care of Mad River offers two program rooms to better meet the needs of our participants. Both rooms offer access to our beautiful garden for a stroll or just taking in some fresh air.',
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

    <form 
    class='donate'
    action="https://www.paypal.com/cgi-bin/webscr" 
    method="post" 
    target="_blank">
    <input name="cmd" type="hidden" value="_s-xclick"> 
    <input name="hosted_button_id" type="hidden" value="WKVE46J2TL2MJ"> 
    <input name="submit"
    class='donate-img'
    src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" type="image">
    <i class="fa-solid fa-hand-holding-dollar donate-button"> Donate</i> 
    </input>
    </form>

    
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
            <li id='phone-number'>(707) 822-4866</li>
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
const donateButtonEl = document.querySelector('.donate-button');


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

const emailHeaderEl = document.querySelector('#email-address-header');

emailHeaderEl.addEventListener('click', function (){
   window.open('mailto:adhcofmadriver@outlook.com');
});