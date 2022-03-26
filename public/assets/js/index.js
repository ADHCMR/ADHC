const emailEl = document.querySelector('#email-address');
const emailHeaderEl = document.querySelector('#email-address-header');
const addressEl = document.querySelector('#address');

emailEl.addEventListener('click', function (){
    window.open('mailto:adhcofmadriver@outlook.com');
});
addressEl.addEventListener('click', function (){
    window.open('map:3800 Jane Road Arcata, CA 95521/95518');
});
emailHeaderEl.addEventListener('click', function (){
    window.open('mailto:adhcofmadriver@outlook.com');
});