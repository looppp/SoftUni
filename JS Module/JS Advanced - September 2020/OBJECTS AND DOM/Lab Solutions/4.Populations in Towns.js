function townPopulation(input) {
    let map = new Map();

    for (let line of input) {
        let token = line.split(/\s+<->\s+/);
        let town = token[0];
        let population = Number(token[1]);

        if (!map.has(town)) {
            map.set(town, 0);
        }
        map.set(town, map.get(town) + population)
    }

    for (let city of map){
        console.log(`${city[0]} : ${city[1]}`)
    }
}

townPopulation(["Sofia <-> 1200000"]);