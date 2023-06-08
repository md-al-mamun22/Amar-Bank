document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawField = document.getElementById('width-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalElement.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString)

    const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    withdrawField.value = ''

    const balanceTotalElemnt = document.getElementById('balance-total')
    const prevBalanceTotalElementString = balanceTotalElemnt.innerText;
    const prevBalancceTotal = parseFloat(prevBalanceTotalElementString)
    console.log(prevBalancceTotal)

    const newBalanceTotal = prevBalancceTotal - newWithdrawAmount;
    balanceTotalElemnt.innerText = newBalanceTotal;
})