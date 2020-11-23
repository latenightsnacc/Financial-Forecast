// INCOME VARIABLES
let salesIncome = document.getElementById('sales-income');
let otherIncome = document.getElementById('other-income');
let totalIncome = document.getElementById('total-income');

// STARTUP COSTS
let webDevCost = document.getElementById('web-dev-cost');
let carsVans = document.getElementById('cars-vans');
let rentRates = document.getElementById('rent-rates');
let initialStockPurchase = document.getElementById('initial-stock-purchase');
let bizReg = document.getElementById('business-registration');
let initialMarketing = document.getElementById('initial-marketing');
let companyIdentity = document.getElementById('company-identity');

// MONTHLY COSTS
let insurance = document.getElementById('insurance');
let tradeSub = document.getElementById('trade-subscriptions');
let vehicleMtnce = document.getElementById('vehicle-maintenance');
let utilityCost = document.getElementById('utility-cost');
let wageSalaries = document.getElementById('wages-salaries');
let accounting = document.getElementById('accounting-cost');
let marketing = document.getElementById('marketing-cost');
let stationery = document.getElementById('stationery-cost');
let travelEntmnt = document.getElementById('travel-entertainment');
let pensionMedical = document.getElementById('pension-medical');
let staffSubs = document.getElementById('pension-medical');
let pensionMedical = document.getElementById('pension-medical');


// CALCULATE BUTTON
let calculate = document.getElementById('calculate');

const sum = (a,b) => {
    return parseInt(a,10) + parseInt(b,10);
};
const sumAll = (accumulator, item) => {
    return accumulator + item;
};
calculate.addEventListener('click', function(){
    if (!((salesIncome.value === null || salesIncome.value === '') && (otherIncome.value === null || otherIncome.value === '')) ){
        let total = sum(salesIncome.value,otherIncome.value);
        totalIncome.textContent = total;
    }	
});
