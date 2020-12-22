function coffeeMachine(input) {

    let totalMoney = +0;

    for(let token of input){

        let [coins, drink, type, milk, sugar] = token.split(', ');

        let price = 0.80;

        if (token.includes('decaf')){
           price += 0.10;
        }
        if (token.includes('milk')){
            price += 0.10;
        }
        if (Number(token.split(', ').pop()) > 0){
            price += 0.10;
        }

        let difference = Math.abs(price - Number(coins));

        if (+coins >= price){
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${difference.toFixed(2)}$`);
            totalMoney += price;
        }
        else if (+coins < price) {
            console.log(`Not enough money for ${drink}. Need ${difference.toFixed(2)}$ more.`)
        }

    }
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`)


}

coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);