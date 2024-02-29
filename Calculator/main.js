// დავალება 1

let firstNum = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
let secondNum = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));
let operator = prompt("შეიყვანეთ ოპერატორი ('+' '-' '*' '/'):");
let result;

if (operator === "+") {
    result = firstNum + secondNum;
} else if (operator === "-") {
    result = firstNum - secondNum;
} else if (operator === "*") {
    result = firstNum * secondNum;
} else if (operator === "/") {
    result = secondNum === 0 ? "ნულზე გაყოფა არ შეიძლება" : firstNum / secondNum;
} else {
    result = "თქვენ შეიყვანეთ არასწორი ოპერატორი";
}

alert(result);
