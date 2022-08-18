// Geting HTML Elements 

const previousDepositBalance = document.getElementById('deposit');
const previousWithdrawBalance = document.getElementById('withdraw');
const previousBalance = document.getElementById('balance'); 
const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount =document.getElementById('withdraw-amount');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

// deposit funcrtionality here
depositBtn.addEventListener('click', function() {
    // console.log('Deposit Button Clicked!');
    if(depositAmount.value == '' || null || NaN) {
        alert('Please enter a valid amount!')
    }
    else{
        // Updating deposit amount here
        previousDepositBalance.innerText = parseFloat(previousDepositBalance.innerText) + parseFloat(depositAmount.value);
        // Updating Balance amount here
        previousBalance.innerText = parseFloat(previousBalance.innerText) + parseFloat(depositAmount.value);
        depositAmount.value = ''
    }
});


withdrawBtn.addEventListener('click', function() {
    // console.log('Withdraw Button Clicked');
    if(withdrawAmount.value == '' || null || NaN) {
        alert('Please entter a valid amount!');
    }
    else{
        if(parseFloat(withdrawAmount.value) > parseFloat(previousBalance.innerText)) {
            alert('Tor baper bank e eto taka nai!');
        }
        else{
            // Updating withdraw amount
        previousWithdrawBalance.innerText = parseFloat(previousWithdrawBalance.innerText) + parseFloat(withdrawAmount.value);
        // Updating balance amount
        previousBalance.innerText = parseFloat(previousBalance.innerText) - parseFloat(withdrawAmount.value);
        withdrawAmount.value = '';
        }


    }
})

