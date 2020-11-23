// INCOME VARIABLES
let salesIncome = document.getElementById('sales-income');
let otherIncome = document.getElementById('other-income');
let totalIncome = document.getElementById('total-income');

// STARTUP COSTS
let webDevCost = document.getElementById('web-dev-cost');
let carsVans = document.getElementById('cars-vans');
let rentRates = document.getElementById('rent-rates');
let initialStockPurchase = document.getElementById('initial-stock-purchase');

let otherCosts = document.getElementById('other-cost');

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
