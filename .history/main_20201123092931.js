let salesIncome = document.getElementById('sales-income');
let otherIncome = document.getElementById('other-income');
let otherCosts = document.getElementById('other-cost');
let totalIncome = document.getElementById('total-income');
let calculate = document.getElementById('calculate');

const sum = (a,b) => {
    return a + b;
}
calculate.addEventListener('click', function(){
    if (!((salesIncome.value === null || salesIncome.value === '') && (otherIncome.value === null || otherIncome.value === '')) ){
        let total = sum(salesIncome.value,otherIncome.value);
        console.log(`total income: ${total}`);
    }
   
    console.log(`other income: ${otherIncome.value}`);
    // let sum = salesIncome + otherIncome; 
	
});
