function solve(numbers) {
    numbers = numbers.toString();
    let firstNumber = numbers[0];
    let result = true;
    let sum = +firstNumber;

    for (let i = 1; i < numbers.length; i++) {
        if (firstNumber !== numbers[i]){
            result = false;
        }
        sum += Number(numbers[i]);
    }
    console.log(result);
    console.log(sum);
}

solve(1234);