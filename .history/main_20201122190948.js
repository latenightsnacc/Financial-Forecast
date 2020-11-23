let salesIncome = document.getElementById('sales-income');
let otherIncome = document.getElementById('other-income');
let otherCosts = document.getElementById('other-cost');
let totalIncome = document.getElementById('total-income');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
	totalIncome.write(salesIncome + otherIncome);
});
