function solve(number1, number2, stringOperator) {
    let result = 0;
switch (stringOperator) {
    case '+': result = number1 + number2;
        break;
    case '-': result = number1 - number2;
        break;
    case '/': result = number1 / number2;
        break;
    case '*': result = number1 * number2;
        break;
    case '%': result = number1 % number2;
        break;
    case '**': result = number1 ** number2;
        break;
}
    console.log(result);
}

solve(3, 5.5, '*');