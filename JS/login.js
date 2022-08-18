// step-1 getting the Element
const loginBtn = document.getElementById('login-btn')
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// console.log(loginBtn);
// Adding event listner to the  button

loginBtn.addEventListener('click', function() {
    // console.log('LOGIN BUTTON CLLICKED');
    // console.log(emailInput, passwordInput);
    if(emailInput.value == 'sontan@baperbank.com' && passwordInput.value =='secret123') {
        window.location.href = 'transaction.html';
    }
    else{
        alert('Password vule gacis. Toke tyajjo korlam!');
    }
    
});