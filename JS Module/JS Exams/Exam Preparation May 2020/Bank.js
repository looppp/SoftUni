class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer({
        firstName,
        lastName,
        personalId
    }) {
        let hasCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (hasCustomer) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }

        let customer = {
            firstName,
            lastName,
            personalId
        };
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let currentCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        }

        if (currentCustomer.totalMoney) {
            currentCustomer.totalMoney += Number(amount);
            currentCustomer.transactions.push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);
        } else {
            currentCustomer.totalMoney = Number(amount);
            currentCustomer.transactions = [];
            currentCustomer.transactions.push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);
        }

        return `${currentCustomer.totalMoney}$`;

    }

    withdrawMoney(personalId, amount) {
        let currentCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        }
        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        }else{
            currentCustomer.totalMoney -= amount;
        currentCustomer.transactions.push(`${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);
        }

        return `${currentCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let currentCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        }
        let counter = currentCustomer.transactions.length;
        let result = `Bank name: ${this._bankName}\n`;
        result += `Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\n`;
        result += `Customer ID: ${currentCustomer.personalId}\n`;
        result += `Total Money: ${currentCustomer.totalMoney}$\n`;
        result += `Transactions:\n`;
        currentCustomer.transactions.sort().reverse();
        currentCustomer.transactions.forEach(t => {
            result += `${counter}. ${t}\n`;
            counter--;
        });

        return result.trim();
    }
}


let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
