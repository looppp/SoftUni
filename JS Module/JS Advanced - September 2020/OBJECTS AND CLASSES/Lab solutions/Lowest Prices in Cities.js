function solveLowestPrice(array){
    let products = new Map();

    for (let tokens of array) {
        let[town, product, price] = tokens.split(" | ");

        if(!products.has(product)){
            products.set(product, new Map());
        }

        products.get(product).set(town, Number(price));
    }

    for (let [keys, values] of products) {
        
        let lowest = ([...values].reduce(function(a, b) {
            if(a[1] < b[1]){
                return a;
            } else if(a[1] > b[1]){
                return b;
            }
            return a;
        }));
        console.log(`${keys} -> ${lowest[1]} (${lowest[0]})`);
    }

}

solveLowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);