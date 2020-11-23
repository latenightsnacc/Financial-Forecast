let salesIncome = document.getElementById('sales-income');
let otherIncome = document.getElementById('other-income');
let otherCosts = document.getElementById('other-cost');
let totalIncome = document.getElementById('total-income');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    if (!((salesIncome.value === null || salesIncome.value === '') && (otherIncome.value === null || otherIncome.value === '')) ){
        totalIncome.textContent = salesIncome.value + otherIncome.value;
        console.log(`sales income: ${salesIncome.value}`);
    }
   
    console.log(`other income: ${otherIncome.value}`);
    // let sum = salesIncome + otherIncome; 
	
});
