function solve(array){
    let result = [];
    let cleanArray = array.map(row => row.split('|').filter(x => x != '').map(y => y.trim()));
    let properties = cleanArray.shift();
    
    for (const values of cleanArray) {
         let town = {
            [properties[0]] : values[0],
            [properties[1]] : Number(Number(values[1]).toFixed(2)),
            [properties[2]] : Number(Number(values[2]).toFixed(2)),
         };

         result.push(town);
    }
    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);