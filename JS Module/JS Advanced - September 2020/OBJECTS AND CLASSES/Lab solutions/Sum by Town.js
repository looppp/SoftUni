function solveSum(array){
    let result = {};

    for (let i = 0; i < array.length; i+= 2) {
        let town = array[i];
        let income = Number(array[i + 1]);

        if(town in result){
            result[town] += income;
        } else {
            result[town] = income;
        }
    }

    console.log(JSON.stringify(result));
}

solveSum(['Sofia','20','Varna','3','sofia','5','varna','4']);