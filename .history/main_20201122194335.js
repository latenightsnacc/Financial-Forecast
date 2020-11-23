let salesIncome = document.getElementById('sales-income').value;
let otherIncome = document.getElementById('other-income');
let otherCosts = document.getElementById('other-cost');
let totalIncome = document.getElementById('total-income');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    $sum = salesIncome.value() + otherIncome.value(); 
	totalIncome.write($sum);
});
