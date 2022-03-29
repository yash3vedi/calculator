
function addition() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) + parseInt(num2);
    document.getElementById('result').innerHTML = result;
}

function subtract() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) - parseInt(num2);
    document.getElementById('result').innerHTML = result;
}

function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) * parseInt(num2);
    document.getElementById('result').innerHTML = result;
}

function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseInt(num1) / parseInt(num2);
    document.getElementById('result').innerHTML = result;
}