function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value; 
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    /*
    1. get the element by id
    2. get the value from the element
    3. convert value to a number
    */

    const newDepositAmount = getInputValueById('deposit.field');
})