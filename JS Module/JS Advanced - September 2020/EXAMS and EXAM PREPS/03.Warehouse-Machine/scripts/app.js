function coffeeStorage() {

    let textarea = JSON.parse(document.querySelector('textarea').value);
    let [report, inspection] = document.getElementsByTagName('p');

    let brands = {};

    for(let tokens of textarea){
        let [command, brand, coffeeType, date, quantity] = tokens.split(', ');

        if (command === 'IN'){
            if (!brands[brand]) {
                brands[brand] = {};
            }
            if(!brands[brand][coffeeType]){
                brands[brand][coffeeType] = {date, quantity: Number(quantity)}
            }
            if(brands[brand][coffeeType].date === date){
                brands[brand][coffeeType] = {date, quantity: Number(quantity)}
            }
            if(brands[brand][coffeeType].date < date){
                brands[brand][coffeeType] = {date, quantity: Number(quantity)}
            }
        } else if(command === 'OUT'){
            if (brands[brand] &&
                brands[brand][coffeeType] &&
                brands[brand][coffeeType].date > date &&
                brands[brand][coffeeType].quantity >= quantity ) {

                brands[brand][coffeeType].quantity -= Number(quantity);
            }
        }
    }
}