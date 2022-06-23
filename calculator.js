
//choose your operator
const operator = prompt('Enter operator ( either +, -, * or /): ');

///choosing of any number
let firstName = parseFloat(prompt('Enter first number: '));
let secondNumber = parseFloat(prompt("Enter your second number"));

let result;
if(operator == '+'){
    result = firstName + secondNumber;
} else if(operator == '-'){
    result = firstName - secondNumber;
} else if(operator == '*'){
    result = firstName * secondNumber
} else {
    result = firstName / secondNumber
}

//to display our result
alert(`${firstName} ${operator} ${secondNumber} = ${result}`);