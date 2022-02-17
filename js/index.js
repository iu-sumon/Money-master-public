function getInput(list) {
    const expensesField = document.getElementById(list + '-field');
    const expensesFieldValue = parseFloat(expensesField.value);
    //expensesField.value = '';
    return expensesFieldValue;

}
function getTotalExpenses(food, rent, clothes) {

    const previousTotalExpenses = document.getElementById('total-expenses');
    const previousTotalExpensesValue = parseFloat(previousTotalExpenses.innerText);
    const updateTotalExpenses = food + rent + clothes + previousTotalExpensesValue;
    previousTotalExpenses.innerText = updateTotalExpenses;
    return updateTotalExpenses;
}

function getBalance(salary, totalExpenses) {

    const previousBalance = document.getElementById('balance');
    const previousBalanceValue = parseFloat(previousBalance.innerText);
    const updateBalanceAmount = salary - totalExpenses;
    previousBalance.innerText = updateBalanceAmount;
    return updateBalanceAmount;
}

function getSavingAmount(salaryAmount, saveAmount) {
    const previousSavingAmount = document.getElementById('saving-amount');
    const previousSavingAmountValue = parseFloat(previousSavingAmount.innerText);
    const updateSavingAmount = (salaryAmount * saveAmount) / 100;
    previousSavingAmount.innerText = updateSavingAmount;
    return updateSavingAmount;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const currentFoodAmount = getInput('food');
    const currentRentAmount = getInput('rent');
    const currentClothesAmount = getInput('clothes');
    const currentSalaryAmount = getInput('salary');
    const currentTotalExpenses = getTotalExpenses(currentFoodAmount, currentRentAmount, currentClothesAmount);
    getBalance(currentSalaryAmount, currentTotalExpenses);

})
document.getElementById('save-btn').addEventListener('click', function () {
    const newSavePercentage = getInput('save');
    const newSalaryAmount = getInput('salary');
   const newSavingAmount=  getSavingAmount(newSalaryAmount, newSavePercentage);
   const  currentBalance=document.getElementById('balance').innerText;
    const previousRemainingBalance = document.getElementById('remaining-balance');
     const previousRemainingBalanceValue = parseFloat(previousRemainingBalance.innerText);
     const updateRemainingBalance=(currentBalance-newSavingAmount);
     previousRemainingBalance.innerText = updateRemainingBalance;
    
})












// function getRemainingBalance(updateBalanceAmount, UpdateSavingAmount) {
   
// }





