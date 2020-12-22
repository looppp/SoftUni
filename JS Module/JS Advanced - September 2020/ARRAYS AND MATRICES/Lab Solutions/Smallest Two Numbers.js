function solveSmallestNumbers(numbers){
    return numbers.sort((a, b) => a - b).slice(0, 2).join(' ');
}

console.log(solveSmallestNumbers([3, 0, 10, 4, 7, 3]));