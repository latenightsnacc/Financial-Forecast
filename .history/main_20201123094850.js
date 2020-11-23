// INCOME VARIABLES
let salesIncome = document.getElementById('sales-income');
let otherIncome = document.getElementById('other-income');

//
let otherCosts = document.getElementById('other-cost');
let totalIncome = document.getElementById('total-income');
let calculate = document.getElementById('calculate');

const sum = (a,b) => {
    return parseInt(a,10) + parseInt(b,10);
}
const sumAll = (accumulator, item) => {
    return accumulator + item;
  };
calculate.addEventListener('click', function(){
    if (!((salesIncome.value === null || salesIncome.value === '') && (otherIncome.value === null || otherIncome.value === '')) ){
        let total = sum(salesIncome.value,otherIncome.value);
        totalIncome.textContent = total;
    }	
});
