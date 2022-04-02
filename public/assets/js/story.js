const mainEl = document.querySelector('#tl-main');

const storySections = [
    {   time: '8:00 a.m. Pickup',
        text: 'Participants can opt in to be picked up by ADHC with our door to door van service.'
    },
    {
        time: '9:00 a.m. Snack and Social',
        text: 'Around this time is when everyone has arrived. You will be provided with a snack and drink of your choosing while you socialize with the other participants.'
    },
    {   
        time: '10:00 a.m. Activities and PT',
        text: 'ADHC offers resources such as physical therapy but you can choose to partake in other activities.  '
    },
    {
        time: '12:00 p.m. Lunch',
        text: 'Enjoy lunch custom fit to your nutritional needs.'
    },
    {
        time: '1:00 p.m. Group Activities & Free Time',
        text: 'Roam the garden, play bingo, or just relax and recline. It\'s all up to you.'
    },

    {
        time: '2:30 p.m. Heading Home',
        text: 'It\'s time to head back home.  Don\'t worry you can come back tomorrow!'
    }
    
]

for (let i = 0; i < storySections.length; i++) {
    let sectionEl = document.createElement('section');
    sectionEl.setAttribute('id', `tl-${i}`);
    sectionEl.setAttribute('class', 'tl-sec');
    mainEl.appendChild(sectionEl);
    document.querySelector(`#tl-${i}`).innerHTML=`
        <h3 class='tl-h3'>${storySections[i].time}</h3>
        <div class='tl-img-con'>
        <img
        src="./public/assets/images/story/${i}.webp"
        alt="temp alt" 
        class="tl-img"
        />
        <img
        src="./public/assets/images/story/next${i}.webp"
        alt="temp alt" 
        class="tl-img"
        />
        </div>
        <div class="tl-drp">
          <div class='tl-txt'>
          <p 
          id='tl-txt-${i}'
          style=''>${storySections[i].text}
          </p>
          <div class='tl-txt'>
        </div>
    `
}