let salesIncome = document.getElementById('sales-income').value;
let otherIncome = document.getElementById('other-income').value;
let otherCosts = document.getElementById('other-cost');
let totalIncome = document.getElementById('total-income');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    console.log(salesIncome);
    // let sum = salesIncome + otherIncome; 
	// totalIncome.textContent = sum;
});
