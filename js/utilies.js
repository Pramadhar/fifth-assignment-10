function getInputFieldById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}
function getTextFieldById(id){
    const textField = document.getElementById(id).innerText;
    const textNumber = parseFloat(textField)
    return textNumber;
}
function  showAnSectionById(id){
    document.getElementById('donationDiv').classList.add('hidden')
    document.getElementById('historyDiv').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}