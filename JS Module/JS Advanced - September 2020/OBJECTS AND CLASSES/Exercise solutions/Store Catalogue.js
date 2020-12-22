function storeCatalogue(array){
    let result = {};
    let letter = '';

    array.forEach(x => {
        let[product, price] = x.split(" : ");
        price = Number(price);
        result[product] = price;
    });

    let sortedByLetter =  Object.keys(result).sort((a, b) => a.localeCompare(b));

    for (const product of sortedByLetter) {
        if(letter != product[0]){
            letter = product[0];
            console.log(letter);
        }

        console.log(`${product}: ${result[product]}`);
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);