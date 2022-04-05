const submitButtonEl = document.querySelector('#submit-button');

let formInput = [
    {name: ''},
    {age: ''},
    {address: ''},
    {contactName: ''},
    {contactNumber: ''},
    {referral: ''}
]
function formChange() {
    formInput.name = document.getElementsByName("name")[0].value;
    formInput.age = document.getElementsByName("age")[0].value;
    formInput.address = document.getElementsByName("address")[0].value;
    formInput.contactName = document.getElementsByName("contactName")[0].value;
    formInput.contactNumber = document.getElementsByName("contactNumber")[0].value;
    formInput.referral = document.getElementsByName("referral")[0].value;
}



submitButtonEl.addEventListener('click', function() {
    let allFill = false;
    if (!formInput.name || !formInput.age || !formInput.address || !formInput.contactName || !formInput.contactNumber || !formInput.referral) {
        window.alert('Please fill in every section.')
    } else {
        window.open(`mailto:adhcofmadriver@outlook.com?subject=${formInput.name} Information&body=Participant Name: ${formInput.name}
        Age: ${formInput.age}
        Address: ${formInput.address}
        Contact name: ${formInput.contactName}
        Contact phone number: ${formInput.contactNumber}
        Referral reason: ${formInput.referral}
        `);
    }
})