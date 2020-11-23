let salesIncome = document.getElementById('sales-income');
let otherIncome = document.getElementById('other-income');
let otherCosts = document.getElementById('other-cost');
let totalIncome = document.getElementById('total-income');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    if (!(salesIncome === null || salesIncome === '')){
        console.log(`sales income: ${salesIncome.value}`);
    }
   
    console.log(`other income: ${otherIncome.value}`);
    // let sum = salesIncome + otherIncome; 
	totalIncome.textContent = 20000;
});
