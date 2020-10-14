function solveBiggestElement(matrix) {
    let singleArray = [];
    function printRow(row) {
        row.forEach(x => singleArray.push(x));
    }
    matrix.forEach(printRow);
    return Math.max(...singleArray);
}

console.log(solveBiggestElement([[20, 50, 10], [8, 33, 145]]));