function cappyJuice(array) {
    let factory = {};
    let result = {};

    array.forEach(element => {
        let [fruit, quantity] = element.split(" => ");
        quantity = Number(quantity);

        if(!factory[fruit]){
            factory[fruit] = quantity;
        } else {
            factory[fruit] += quantity;
        }

        if(factory[fruit] < 1000){
            delete factory[fruit];
        }
    });

    for (const key in factory) {
        console.log(`${key} => ${Math.floor(factory[key] / 1000)}`);
    }

}

cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);