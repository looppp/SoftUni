function solveArray(array){
    let resultAray = [];
    let currentSequentNumber = Number.MIN_SAFE_INTEGER;

    array.forEach(number => {
        if(number >= currentSequentNumber) {
            resultAray.push(number);
            currentSequentNumber = number;
        }
    });

    console.log(resultAray.join("\n"));
}

solveArray([1, 
    2, 
    3,
    4]);