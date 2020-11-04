function solveSum(arr, start, end) {


    function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }

    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length) {
        end = arr.length;
    }

    let result = arr.slice(start, end + 1).reduce((a, b) => Number(a) + Number(b));
    if (isFloat(result)) {
        result = result.toFixed(1);
    }
    return result;
}

console.log(solveSum('text', 0, 2));