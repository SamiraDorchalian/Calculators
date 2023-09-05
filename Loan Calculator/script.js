function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value;
    interestRateValue = document.getElementById("interest-rate").value;
    monthToPayValue = document.getElementById("month-to-pay").value;
    
    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthToPayValue;
    monthlyPayment = (loanAmountValue / monthToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = 
    `Monthly Payment: ${monthlyPayment}`;
}