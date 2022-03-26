const mainEl = document.querySelector('#offer');

const offerSections = [
    {title: 'Rehabilitative Therapy', description: 'Includes physical, occupational and speech therapy with individual and group sessions based on individual needs.'},
    {title: 'Skilled Nursing', description: 'Registered nurses provide care and intervention while working closely witih care givers and primary physicians to meet medical needs.'},
    {title: 'Social Workers', description: 'Assist with the admission process and offer resources, referrals, coordination with other service providers and advocacy for individual needs. They also lead guided discussion groups including a group just for Veterans.'},
    {title: 'Recreational Activities', description: 'Activities such as group outings, arts and crafts, games, live music, dancing, singing, storytelling, bingo, trivia, walks in the garden and Bible study.'},
    {title: 'Nutritional Services', description: 'A mid-morning snack and a nutritious hot meal at lunch time are included every day. Dietary counseling is also available with a registered dietician.'},
    {title: 'Alzheimer\'s & Dementia', description: 'A specialized program in a safe, secure environment, caring for individuals with early through late stage dementia.'},
    {title: 'Transportation', description: 'Door-to-door van service is available to participants living within our transportation radius. Our service areas include: Eureka, Arcata, Blue Lake and McKinleyville.'}
]

for (let i = 0; i < offerSections.length; i++) {
    const innerHtml = [
        `<div class="offer-con">
        <img src="./public/assets/images/offer/${i}.jpeg" />
        <div class="offer-txt-container">
          <h2>${offerSections[i].title}</h2>
          <p>${offerSections[i].description}</p>
          <div class="heart-img-container">
            <img src="./public/assets/images/offer/logo-heart.png" />
          </div>
        </div>
      </div>`,
      `<div class="offer-con">
      <div class="offer-txt-container">
        <h2>${offerSections[i].title}</h2>
        <p>${offerSections[i].description}</p>
        <div class="heart-img-container">
          <img src="./assets/images/offer/logo-heart.png" />
        </div>
      </div>
      <img src="./public/assets/images/offer/${i}.jpeg" />
    </div>`
    ]
    let sectionEl = document.createElement('section');
    sectionEl.setAttribute('id', `o-${i}`);
    sectionEl.setAttribute('class', 'o-sec');
    mainEl.appendChild(sectionEl);
    document.querySelector(`#o-${i}`).innerHTML= innerHtml[i%2];
}
