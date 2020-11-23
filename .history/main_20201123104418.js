// INCOME VARIABLES
let salesIncome = document.getElementById('sales-income');
let otherIncome = document.getElementById('other-income');
let totalIncome = document.getElementById('total-income');

// STARTUP COSTS
let webDevCost = document.getElementById('website-dev-cost');
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
let staffSubs = document.getElementById('staff-subsistence');
let stockPurchase = document.getElementById('stock-purchase');
let otherCost = document.getElementById('other-cost');

// TOTAL VALUES
let totalCosts = document.getElementById('total-costs');
let netFlow = document.getElementById('net-flow-value');

let initialValue = 0;
    let costs = [webDevCost.value, carsVans.value, rentRates.value, initialStockPurchase.value, bizReg.value, initialMarketing.value, companyIdentity.value,
         insurance.value, tradeSub.value, vehicleMtnce.value, utilityCost.value, wageSalaries.value, accounting.value, marketing.value,
        stationery.value, travelEntmnt.value, pensionMedical.value, staffSubs.value, stockPurchase.value, otherCost.value];

// CALCULATE BUTTON
let calculate = document.getElementById('calculate');

const sum = (a,b) => {
    return parseFloat(a) + parseFloat(b);
};
const sumAll = (accumulator, item) => {
    return parseFloat(accumulator) + parseFloat(item);
};
const netValue = (a, b) => {
    return a - b;
}
const checkValue = a => {
    if(a.value === null || a.value === ''){
        return a.value = 0;
    } else {
        return a.value;
    }
}
calculate.addEventListener('click', function(){
    // Total Income Calculation
    let a = checkValue(salesIncome);
    let b = checkValue(otherIncome);
    let total = sum(a,b);
    totalIncome.textContent = total;

    let sumCosts = costs.map(val => checkValue(val)).reduce(sumAll, initialValue);
    totalCosts.textContent = sumCosts;
    netFlow.textContent = netValue(totalIncome,totalCosts);
});