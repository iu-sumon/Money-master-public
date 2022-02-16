function getInput(list) {
    const expensesField = document.getElementById(list + '-field');
    const expensesFieldValue = parseFloat(expensesField.value);
    expensesField.value = '';
    return expensesFieldValue;

}
function getTotalExpenses(food, rent, clothes) {
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesValue = parseFloat(totalExpenses.innerText);
    const total = food + rent + clothes + totalExpensesValue;
    totalExpenses.innerText = total;
    return total;
}
function getBalance(expenses, salary) {
    const balance = document.getElementById('balance');
    const previousBalance = parseFloat(balance.innerText);
    const balanceAmount = salary - expenses;
    balance.innerText = balanceAmount;

}
function getSavingAmount(SaveField,salary)
{
    const UpdateSavingAmount = (SaveField * salary) / 100;
    const savingAmount = document.getElementById('saving-amount');
    const previousSavingAmount = parseFloat(savingAmount.innerText);
    savingAmount.innerText = UpdateSavingAmount;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodCost = getInput('food');
    const rentCost = getInput('rent');
    const clothesCost = getInput('clothes');
    const salary = getInput('salary');
    const total = getTotalExpenses(foodCost, rentCost, clothesCost);
    getBalance(total, salary);

})

document.getElementById('save-btn').addEventListener('click', function () {
    const SaveField = getInput('save');
    const salary = getInput('salary');
   getSavingAmount(SaveField,salary);


})