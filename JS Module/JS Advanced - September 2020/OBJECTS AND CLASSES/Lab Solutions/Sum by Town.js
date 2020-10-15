function solve(array) {
    let result = {};

    for (let i = 0; i < array.length; i+= 2) {
        if (result[array[i]]) {
            result[array[i]] += Number(array[i + 1]);
        }
        else {
            result[array[i]] = Number(array[i + 1]);
        }
    }

    console.log(JSON.stringify(result));
}