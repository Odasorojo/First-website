var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required.';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full name.';
        return false;
    }
    nameError.innerHTML='<i class="fa-sharp fa-solid fa-badge-check"></i>';
        return true;
    }

function validatePhone(){
    var phone = document.getElementById('number').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone No. is required.';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = '10 digit Phone No. is required.';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone No. is required.';
        return false;
    }
    phoneError.innerHTML='<i class="fa-sharp fa-solid fa-badge-check"></i>';
        return true;
    }

function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required.';
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email is invalid'
        return false;
    }
    emailError.innerHTML='<i class="fa-sharp fa-solid fa-badge-check"></i>';
        return true;
    }
function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;
    if(left > 0){
        messageError.innerHTML = left + 'More characters required.';
        return false;
     }
     messageError.innerHTML='<i class="fa-sharp fa-solid fa-badge-check"></i>';
        return true;
    }
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please review & resubmit.';
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
       return false;
    }
}