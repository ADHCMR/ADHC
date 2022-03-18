const angleRightEl = document.querySelector('.fa-angle-right');
const angleLeftEl = document.querySelector('.fa-angle-left');

const storyImg0El = document.querySelector('#story-img-0');
const storyImg1El = document.querySelector('#story-img-1');
const storyImg2El = document.querySelector('#story-img-2');
const storyTimeEl = document.querySelector('#story-time');
const storyTextEl = document.querySelector('#story-text');

const storyImagesInfo = [
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

let a = 0;
let b = 1;
let c = 2
let infoCount = 0;

function nextStoryImages() {
    if (infoCount<4) {
        a+=3;
        b+=3;
        c+=3;
        infoCount+=1;
        storyImg0El.src=`./public/assets/images/story/${a}.jpeg`;
        storyImg1El.src=`./public/assets/images/story/${b}.jpeg`;
        storyImg2El.src=`./public/assets/images/story/${c}.jpeg`;
        storyTimeEl.innerHTML=storyImagesInfo[infoCount].time;
        storyTextEl.innerHTML=storyImagesInfo[infoCount].text;
        return a,b,c,infoCount;
    }
}

function lastStoryImages() {
    if (infoCount>0) {
        a-=3;
        b-=3;
        c-=3;
        infoCount-=1;
        storyImg0El.src=`./public/assets/images/story/${a}.jpeg`;
        storyImg1El.src=`./public/assets/images/story/${b}.jpeg`;
        storyImg2El.src=`./public/assets/images/story/${c}.jpeg`;
        storyTimeEl.innerHTML=storyImagesInfo[infoCount].time;
        storyTextEl.innerHTML=storyImagesInfo[infoCount].text;
        return a,b,c, infoCount;
    }
}

angleRightEl.addEventListener('click', ()=> {
    nextStoryImages();
});
angleLeftEl.addEventListener('click', ()=> {
    lastStoryImages();
});