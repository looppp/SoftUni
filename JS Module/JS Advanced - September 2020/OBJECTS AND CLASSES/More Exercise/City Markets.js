function cityMarket(array) {

    let towns = {};
    let productTotalIncome = 0;

    array.forEach(row => {
        let [town, product, salesArray] = row.split(' -> ');
        let [amountOfSales, priceForUnit] = salesArray.split(' : ');
        amountOfSales = Number(amountOfSales);
        priceForUnit = Number(priceForUnit);
        productTotalIncome = amountOfSales * priceForUnit;

        if (!towns[town]) {
            towns[town] = {};
        }

        towns[town][product] = productTotalIncome;
    });

    for (const town in towns) {
        console.log(`Town - ${town}`);
        for (const product in towns[town]) {
            console.log(`$$$${product} : ${towns[town][product]}`);
        }
    }
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);