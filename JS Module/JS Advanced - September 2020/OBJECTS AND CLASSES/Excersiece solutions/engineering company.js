function carRegistry(array){

    let result = new Map();

    array.forEach(elements => {
        let[brand, model, produced] = elements.split(" | ");
        produced = Number(produced);

        if(!result.has(brand)){
            result.set(brand, new Map());
        }

        let mapModels = result.get(brand);
        
        if(!mapModels.has(model)){
            mapModels.set(model, 0);
        }

        mapModels.set(model, mapModels.get(model) + produced);

    });

    for (const brand of result) {
        console.log(brand[0]);

        let mapedModels = result.get(brand[0]);

        for (const model of mapedModels) {
            console.log(`###${model[0]} -> ${model[1]}`);
        }

    }

}




carRegistry(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);