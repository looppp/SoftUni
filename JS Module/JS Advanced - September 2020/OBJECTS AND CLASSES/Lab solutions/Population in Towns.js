function solvePopulation(args) {

    let townsAndPopulation = {};

    for (const pair of args) {
        let [town, population] = pair.split(' <-> ');
        if (!townsAndPopulation.hasOwnProperty(town)) {
            townsAndPopulation[town] = Number(population);
        } else {
            townsAndPopulation[town] += Number(population);
        }
    }

    for (const key in townsAndPopulation) {
        console.log(`${key} : ${townsAndPopulation[key]}`);
    }

}



solvePopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);