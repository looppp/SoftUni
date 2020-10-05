function atmMachine(input) {

    let totalCashInATM = [];

    input.forEach(commandArray => {
        if(commandArray.length > 2){
            insert(commandArray);
        }
        else if (commandArray.length === 2){
            let [balance, moneyToWithdraw] = commandArray;

            if (balance < moneyToWithdraw){
                console.log(`Not enough money in your account. Account balance: ${balance}$.`)
            }
            else if (getSum(totalCashInATM) < moneyToWithdraw){
                console.log("ATM machine is out of order!")
            }
            else {
                withdraw(balance, moneyToWithdraw);
            }
        }
        else if (commandArray.length === 1){
            report(commandArray)
        }
    });

    function getSum(banknotes) {
        return banknotes.reduce((a,b)=> a + b, 0);
    }

    function insert(banknotes) {
        totalCashInATM.push(...banknotes);
        console.log(`Service Report: ${getSum(banknotes)}$ inserted. Current balance: ${getSum(totalCashInATM)}$.`)
    }

    function withdraw(balance, moneyToWithdraw) {

        totalCashInATM = totalCashInATM.sort((a, b) => b - a);

        let sum = 0;
        for (let i = 0; i < totalCashInATM.length; i++) {
            if(sum === moneyToWithdraw){
                break;
            }

            if (sum + totalCashInATM[i] <= moneyToWithdraw) {
                sum += +totalCashInATM.splice(i, 1);
                i--;
            }

        }

        console.log(`You get ${sum}$. Account balance: ${balance - sum}$. Thank you!`)
    }

    function report(commandArray) {

        let counter = 0;
        totalCashInATM.forEach(function (numbers) {
            if (commandArray[0] === numbers){
                counter++;
            }
        });

        console.log(`Service Report: Banknotes from ${commandArray[0]}$: ${counter}.`)
    }
}


atmMachine([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
]);