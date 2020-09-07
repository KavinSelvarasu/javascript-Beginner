// variables
var button = document.getElementById('button');
var clear = document.getElementById('clear');
button.addEventListener('click', function(){

    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percent').value;

    if(isNaN(billAmount) || isNaN(tipPercentage))
        alert('Invalid Input');

    if (billAmount == '')
        alert('Enter Bill Amount');
    else if(tipPercentage == '')
        alert('Enter Tip percentage');
    
    let calculation = (billAmount * (tipPercentage/100));

    let totalAmount = (parseInt(calculation) + parseInt(billAmount));

    document.getElementById('tip-amount').value = calculation;
    document.getElementById('total-bill').value = totalAmount;
        
});


clear.addEventListener('click', function(){

    let billAmount = document.getElementById('bill-amount').value = '';
    let tipPercentage = document.getElementById('tip-percent').value = '';
    let tipAmount = document.getElementById('tip-amount').value = '';
    let totalBill = document.getElementById('total-bill').value = '';
})