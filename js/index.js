//................This Function for get all input Field Value..............\\

function getInput(list) {
    const expensesField = document.getElementById(list + '-field');
    const expensesFieldValue = parseFloat(expensesField.value);
    return expensesFieldValue;

}

//................This Function for get Total Expenses Value..............\\


function getTotalExpenses(food, rent, clothes) {

    const previousTotalExpenses = document.getElementById('total-expenses');
    const previousTotalExpensesValue = parseFloat(previousTotalExpenses.innerText);
    const updateTotalExpenses = food + rent + clothes + previousTotalExpensesValue;
    previousTotalExpenses.innerText = updateTotalExpenses;
    return updateTotalExpenses;
}

//................This Function for get Balance Value..............\\


function getBalance(salary, totalExpenses) {

    const previousBalance = document.getElementById('balance');
    const previousBalanceValue = parseFloat(previousBalance.innerText);
    const updateBalanceAmount = salary - totalExpenses;
    previousBalance.innerText = updateBalanceAmount;
    return updateBalanceAmount;
}

//................This Function for get Saving Amount..............\\

function getSavingAmount(salaryAmount, saveAmount) {
    const previousSavingAmount = document.getElementById('saving-amount');
    const previousSavingAmountValue = parseFloat(previousSavingAmount.innerText);
    const updateSavingAmount = (salaryAmount * saveAmount) / 100;
    previousSavingAmount.innerText = updateSavingAmount;
    return updateSavingAmount;
}

//..........Calculate-Button addEventListener code start here............\\

document.getElementById('calculate-btn').addEventListener('click', function () {

    const currentFoodAmount = getInput('food');
    const currentRentAmount = getInput('rent');
    const currentClothesAmount = getInput('clothes');
    const currentSalaryAmount = getInput('salary');
    const notifyNegative = document.getElementById('notify-negative')
    
    //..................Control Error Message code Start here.............\\

    if (currentFoodAmount < 0 || currentRentAmount < 0 || currentClothesAmount < 0 || currentSalaryAmount < 0) {

        notifyNegative.style.display = 'block';
        notifyNan.style.display = 'none';
    }
     else if (currentSalaryAmount > (currentFoodAmount + currentRentAmount + currentClothesAmount)) {
        const currentTotalExpenses = getTotalExpenses(currentFoodAmount, currentRentAmount, currentClothesAmount);
        getBalance(currentSalaryAmount, currentTotalExpenses);
    }
    else
    {
        const insufficientSalary = document.getElementById('insufficient-salary');
        insufficientSalary.style.display = 'block';
    }

     //..................Control Error Message code End here..................\\

})

//..........Calculate-Button addEventListener code end here .............\\



//...........Save-Button addEventListener code Start here..............\\

document.getElementById('save-btn').addEventListener('click', function () {

    const newSavePercentage = getInput('save');
    const newSalaryAmount = getInput('salary');
    const notifyNegative = document.getElementById('notify-negative')
    const currentBalance = document.getElementById('balance').innerText;

    //..................Control Error Message code Start here............\\

    if (newSavePercentage > 0 &&  newSalaryAmount > 0) {
        const newSavingAmount = getSavingAmount(newSalaryAmount, newSavePercentage);
        if (newSavingAmount > currentBalance) {
            const insufficientBalance = document.getElementById('insufficient-balance');
            insufficientBalance.style.display = 'block';
           }
           else {
            const previousRemainingBalance = document.getElementById('remaining-balance');
            const previousRemainingBalanceValue = parseFloat(previousRemainingBalance.innerText);
            const updateRemainingBalance = (currentBalance - newSavingAmount);
            previousRemainingBalance.innerText = updateRemainingBalance;
    
        }
     }
    else if (newSavePercentage < 0 || newSalaryAmount < 0)
    {
        notifyNegative.style.display = 'block';
        notifyNan.style.display = 'none';
    }
//..................Control Error Message code End here..................\\
})

//............Save-Button addEventListener code End here..............\\
















