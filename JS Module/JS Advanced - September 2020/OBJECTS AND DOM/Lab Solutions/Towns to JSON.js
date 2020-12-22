function solve(input) {
    let towns = [];
    let regex = /\s*\|\s*/;

    for (let line of input.splice(1)){
        let token = line.split(regex);
        let result = {"Town":token[1],"Latitude":Number(token[2]),"Longitude":Number(token[3])};
        towns.push(result);
    }
    console.log(JSON.stringify(towns));;
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);