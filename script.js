let btn = document.getElementById("togglebutton");

function printMessage(){
    document.getElementById('button').innerHTML = "More information about Project 1 can be found here";
}
function printMessage2(){
    document.getElementById('button2').innerHTML = "More information about Project 2 can be found here";
}
function printMessage3(){
    document.getElementById('button3').innerHTML = "More information about Project 3 can be found here";
}
function printMessage4(){
    document.getElementById('button4').innerHTML = "More information about Project 4 can be found here";
}

btn.onClick = () => {
    document.body.classList.toggle('darkMode');
}

const form = document.getElementById("Contact Form")

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const numberError = document.getElementById("numberError");

const successMessage = document.getElementById("successMessage");



form.addEventListener('submit'), function(event){
    nameError.textContent ='';
}

if(nameInput.value.trim() ===''){
    nameError.textContent = 'Please enter your Full Name';
    event.preventDefault();
}
if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please enter your email address';
    event.preventDefault();}
    else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        event.preventDefault();
    }
    if (numberInput.value.trim() === '') {
        numberError.textContent = 'Please enter your Phone Number';
        event.preventDefault();
    } else if (numberInput.value.length < 10) {
        numberError.textContent = 'Please Enter a valid Phone Number';
        event.preventDefault();
    }
