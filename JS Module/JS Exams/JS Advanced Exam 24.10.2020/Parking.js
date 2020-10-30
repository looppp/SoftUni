class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Not enough parking space.");
        }
        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let carCheck = this.vehicles.find(x => x.carNumber === carNumber);
        let carIndex = this.vehicles.indexOf(carCheck);
        if (!carCheck) {
            throw new Error("The car, you're looking for, is not found.");
        }
        if (carCheck.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.vehicles.splice(carIndex, 1);
            return `${carNumber} left the parking lot.`;
        }


    }

    pay(carNumber) {
        let carCheck = this.vehicles.find(x => x.carNumber === carNumber);
        if (!carCheck) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else if (carCheck.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        } else {
            carCheck.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }

       
    }

    getStatistics(carNumber) {
        let carCheck = this.vehicles.find(x => x.carNumber === carNumber);
        let result = '';
        let carPayedCheck = '';
        let emptySlots = this.capacity - this.vehicles.length;
        if (carCheck) {
            if (carCheck.payed === 'true') {
                carPayedCheck = 'Has payed';
            } else {
                carPayedCheck = 'Not payed';
            }
            result += `${carCheck.carModel} == ${carCheckcar.Number} - ${carPayedCheck}`;
        } else {
            result += `The Parking Lot has ${emptySlots} empty spots left.\n`;
            this.vehicles.sort((a, b) => (a.carModel).localeCompare(b.carModel));
            this.vehicles.forEach(x => {
                if (x.payed === 'true') {
                    carPayedCheck = 'Has payed';
                } else {
                    carPayedCheck = 'Not payed';
                }
                result += `${x.carModel} == ${x.carNumber} - ${carPayedCheck}`;
            });
        }

        return result.trim();
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
