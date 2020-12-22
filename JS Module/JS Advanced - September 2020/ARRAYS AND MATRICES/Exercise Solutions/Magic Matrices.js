function solveMatrix(matrix) {
    let result = true;
    const arrayColumn = (arr, n) => arr.map(x => x[n]);
    let startNumber = arrayColumn(matrix, 0).reduce((a, b) => a + b);
    let currentNumber = 0;

    const array_column = (array, column) => array.reduce((a, c) => {
        a.push(c[column]);
        return a;
    }, []);

    for (let col = 0; col < 3; col++) {
        currentNumber = array_column(matrix, col).reduce((a, b) => a + b);
        if (startNumber !== currentNumber) {
            result = false;
        }
    }
    matrix.forEach(row => {
        currentNumber = row.reduce((a, c) => a + c);
        if (startNumber !== currentNumber) {
            result = false;
        }
    });

    console.log(result);
}

solveMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

    //Second SOLUTION
    /* function solve(matrix) {
        let isEqual = true;
        let previousRowSum = matrix[0].map(Number).reduce((a, b) => a + b);
        for (let row = 1; row < matrix.length; row++) {
            let currentRowSum = matrix[row].map(Number).reduce((a, b) => a + b);
            if (currentRowSum !== previousRowSum) {
                isEqual = false;
                break;
            }
            previousRowSum = currentRowSum;
        }
        console.log(isEqual);
    }
    
    solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]); */