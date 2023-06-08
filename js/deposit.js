document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-amount');
    const newdepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newdepositAmountString)
    const depositTotalElement = document.getElementById('deposit-total');
    const prevdepositTotalString = depositTotalElement.innerText;
    const prevdepositTotal = parseFloat(prevdepositTotalString)
    const currentDepositTotal = prevdepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal; 

    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalElementString = balanceTotalElement.innerText;
    const prevBalancceTotal = parseFloat(prevBalanceTotalElementString)

    const currentBalanceTotal = prevBalancceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';   
})