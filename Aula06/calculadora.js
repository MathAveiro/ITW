var numberOpe = 0;
var numberNum = 0;
var oper = new Array();
var numbers = new Array();
var newNumber = true;
var validOper = true;
var isNegative = false;

function clearResult() {
    numberOpe = 0;
    numberNum = 0;
    oper = [];
    numbers = [];
    newNumber = true;
    validOper = true;
    document.getElementById("res").innerHTML = 0;
}

function addNumber() {

    if (event.target.value == "0") {
        if (oper[numberOpe - 1] == "/") {
            alert("Não é possível dividir por 0!");
            validOper = false;
        } else {
            validOper = true;
        }
    } else {
        validOper = true;
    }
    if (validOper) {
        if (!newNumber) {
            var tempNum = numbers[numberNum - 1] + "" + event.target.value;
            numbers.pop();
            numbers.push(tempNum);
        }
        else {
            if (isNegative) {
                oper.push("-");
                numberOpe++;
                numbers.push("0");
                numberNum++;
                numbers.push(event.target.value);
            } else {
                numbers.push(event.target.value);
            }
            
            numberNum++;
        }
        if (document.getElementById("res").innerHTML == 0) {
            if (isNegative) document.getElementById("res").innerHTML = "-" + event.target.value;
            else document.getElementById("res").innerHTML = event.target.value;
        }
        else document.getElementById("res").innerHTML += event.target.value;
        newNumber = false;
    }

}

function addOperation() {

    if (numberNum == 0) isNegative = true;
    else {
        oper.push(event.target.value);
        numberOpe++;
        document.getElementById("res").innerHTML += event.target.value;
        isNegative = false;
    }
    newNumber = true;

}

function calculate() {

    var result = 0;

    for (var i = 0; i < oper.length; i++) {
        var temp = 0;
        if (i == 0) {
            switch (oper[i]) {
                case "+":
                    temp = parseFloat(numbers[i]) + parseFloat(numbers[i + 1]);
                    break;
                case "-":
                    temp = parseFloat(numbers[i]) - parseFloat(numbers[i + 1]);
                    break;
                case "*":
                    temp = parseFloat(numbers[i]) * parseFloat(numbers[i + 1]);
                    break;
                case "/":
                    temp = parseFloat(numbers[i]) / parseFloat(numbers[i + 1]);
                    break;
                default:
                    alert("Operação inválida");
                    break;
            }
            result = temp;
        } else {
            switch (oper[i]) {
                case "+":
                    temp = parseFloat(result) + parseFloat(numbers[i + 1]);
                    break;
                case "-":
                    temp = parseFloat(result) - parseFloat(numbers[i + 1]);
                    break;
                case "*":
                    temp = parseFloat(result) * parseFloat(numbers[i + 1]);
                    break;
                case "/":
                    temp = parseFloat(result) / parseFloat(numbers[i + 1]);
                    break;
                default:
                    alert("Operação inválida");
                    break;
            }
        }  
    }

    result = temp;
    oper = [];
    numbers = [result];
    numberOpe = 0;
    numberNum = 1;

    document.getElementById("res").innerHTML = result;
}