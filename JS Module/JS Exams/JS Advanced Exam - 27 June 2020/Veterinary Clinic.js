class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.capacity <= this.currentWorkload) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }

        let curentOwner = this.clients.find(x => x.ownerName === ownerName);
        if (curentOwner && curentOwner.pets.find(x => x.petName === petName)) {
            let pet = curentOwner.pets.find(x => x.petName === petName);
            if (pet.procedures.clients > 0) {
                throw new Error(`This pet is already registered under ${curentOwner.ownerName} name! ${pet.petName} is on our lists, waiting for ${pet.procedures.join(", ")}.`);
            }

        }

        if (!curentOwner) {
            curentOwner = {
                ownerName,
                pets: [],
            };

            this.clients.push(curentOwner);

        }

        curentOwner.pets.push({
            petName,
            kind,
            procedures
        });


        this.currentWorkload++;

        return `Welcome ${petName}!`;
    }


    onLeaving(ownerName, petName) {
        let currentClient = this.clients.find(x => x.ownerName === ownerName);
        if (!currentClient) {
            throw new Error("Sorry, there is no such client!");
        }

        //TODO: do the If checks correctly
        if (currentClient || currentClient.pets.some()) {
            throw new Error(`Sorry, there are no procedures for ${currentClient.petName}!`);
        }

        this.totalProfit += currentClient.procedures.length * 500;
        currentClient.procedures = [];

        return `Goodbye ${currentClient.petName}. Stay safe!`;

    }

    toString() {
        let clinicBusynes = Math.floor(this.currentWorkload / this.capacity) * 100;
        let result = `${this.clinicName} is ${clinicBusynes}% busy today!`;
        result += `Total profit: ${this.totalProfit.toFixed(2)}$`;

        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));
        for (const client of this.clients) {

            client.pets.sort((a, b) => a.petName.localeCompare(b.petName));
            result += '\n';
            result += `${client} with:\n`;

            for (const pet of client.pets) {
                result += `---${pet.petName} - a ${pet.kind} that needs: ${pet.procedures.join(", ")}`;
            }
        }

        return result.trim();
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());



