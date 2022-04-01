emailEl = document.querySelector('#email-address');
addressEl = document.querySelector('#address');

emailEl.addEventListener('click', function (){
    window.open('mailto:adhcofmadriver@outlook.com');
});
addressEl.addEventListener('click', function (){
    window.open('map:3800 Jane Road Arcata, CA 95521/95518');
});
