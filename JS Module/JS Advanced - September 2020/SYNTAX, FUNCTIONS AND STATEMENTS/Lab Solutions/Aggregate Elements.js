function specialCalculations(array) {
    let sumOfElements = array.reduce((a, b) => a + b, 0);
    let sumOfFloatingNumbers = 0;
    let concatedElements = array.join('');
    for (let number of array) {
        sumOfFloatingNumbers += 1 / number;
    }

    console.log(sumOfElements);
    console.log(sumOfFloatingNumbers.toFixed(4));
    console.log(concatedElements);
}

specialCalculations([1, 2, 3]);