function solve(input) {
    let result = 0;
    let typeOfArgumet = typeof(input)
    if (typeOfArgumet === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We cannot calculate the circle area, because we receive a ${typeOfArgumet}.`);
    }
}

solve('hoho');