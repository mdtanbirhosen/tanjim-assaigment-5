function convertparsetotext(id) {
    const amount = document.getElementById(id).innerText;
    const amountCN = parseFloat(amount);
    return amountCN;
}
// convertparsetotext('Amount')
function convertparsetoInput(id) {
    const input = document.getElementById(id).value;
    const inputCn = parseFloat(input)
    return inputCn;
    
}
