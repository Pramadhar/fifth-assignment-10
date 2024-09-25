document.getElementById('addDonateButtonthird').addEventListener('click', function(event){
    console.log('index')
    event.preventDefault()
    const newInputField = getInputFieldById('input-field-third')
    const newAddMoneyId = getTextFieldById('addMoneyIdthird')
    const plusMoney = newInputField + newAddMoneyId
    console.log(plusMoney)
if(isNaN(newInputField)){
    alert('failed')
    return;
};
if (isNaN(newInputField) || parseFloat(newInputField) != newInputField) {
    alert('Failed: Input contains letters or non-numeric characters');
    return;
}
if (isNaN(newInputField) || newInputField < 0) {
    alert('failed');
    return;
}
document.getElementById('addMoneyIdthird').innerText = plusMoney;
const minusMoney = getTextFieldById('main-money')
const finalMoney = minusMoney - plusMoney
document.getElementById('main-money').innerText = finalMoney;
// added to history
const div = document.createElement('div')
div.innerHTML =`
<div style="border: 2px solid grey; padding: 45px; margin-bottom: 20px ;  rounded-lg;">
<h3 class="text-3xl ">${newInputField} Aid for Injured in the Quota Movement </h3>
</div>

`
document.getElementById('historyContainer').appendChild(div)
})