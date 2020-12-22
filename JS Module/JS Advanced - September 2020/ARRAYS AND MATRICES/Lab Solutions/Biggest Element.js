function solveBiggestElement(matrix) {
    let singleArray = [];
    matrix.forEach(x => x.forEach(z => singleArray.push(z)));
    return Math.max(...singleArray);
}

console.log(solveBiggestElement([[20, 50, 10], [8, 33, 145]]));