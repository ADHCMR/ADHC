const mainEl = document.querySelector('#tl-main');

const storySections = [
    {   time: '8:00 a.m.',
        text: 'Participants days at ADHC begins when the busses arrive to pick them up. Adult Day Health Care staff is fully equipped to handle any transportation needs.'
    },
    {
        time: '9:00 a.m.',
        text: 'Filler1'
    },
    {   time: '10:00 a.m.',
        text: 'Participants days at ADHC begins when the busses arrive to pick them up. Adult Day Health Care staff is fully equipped to handle any transportation needs.'
    },
    {
        time: '11:00 a.m.',
        text: 'Filler2'
    },
    {
        time: '12:00 a.m.',
        text: 'Filler3'
    }
    
]

let fa = 'fa-light fa-bars';

for (let i = 0; i < storySections.length; i++) {
    let sectionEl = document.createElement('section')
    sectionEl.setAttribute('id', `tl-${i}`);
    sectionEl.setAttribute('class', 'tl-sec')
    mainEl.appendChild(sectionEl);
    document.querySelector(`#tl-${i}`).innerHTML=`
        <h3 class='tl-h3'>${storySections[i].time}</h3>
        <img
        src="./public/assets/images/story/${i}.jpeg"
        alt="temp alt" 
        class="tl-img"
        />
        <div class="tl-drp">
          <i 
          class="fa-light fa-bars" 
          id='${i}'>
          </i>
          <div class='tl-txt'>
          <p 
          id='tl-txt-${i}'
          style='display: none;'>${storySections[i].text}
          </p>
          <div class='tl-txt'>
        </div>
    `
}

document.addEventListener('click', function(e) {
    e = e || window.event;
    let target = e.target || e.eventTarget,
        text = target.textContent || target.innerText;   
        if(target.localName === 'i') {
        if (target.className === 'fa-light fa-bars') {
            document.querySelector(`#tl-txt-${target.id}`).setAttribute('style', 'display: initial');
            target.setAttribute('class', 'fa-light fa-x');
            isOpen=true;
        } else {
            document.querySelector(`#tl-txt-${target.id}`).setAttribute('style', 'display: none');
            target.setAttribute('class', 'fa-light fa-bars');
            isOpen=false;
        }
    }
        
}, false);