function solve(number1, number2) {
    let num1 = +number1;
    let num2 = +number2;
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;

    }
    console.log(result);
}

solve('1', '5');