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
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodCost = getInput('food');
    const rentCost = getInput('rent');
    const clothesCost = getInput('clothes');
    getTotalExpenses(foodCost, rentCost, clothesCost);
})