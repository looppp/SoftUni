class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = [];
        this.totalProfit = 0;
        this.totalTicketsSold = 0;
    }

    newScreening(date, hall, description) {
        let screeningExist = this.screenings.find(x => x.date === date && x.hall === hall);
        if (screeningExist) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }

        this.screenings.push({
            date,
            hall,
            description
        });

        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        let screeningExist = this.screenings.find(x => x.date === date && x.hall === hall);
        let currentScreenProfit = 0;
        let indexOfCurrentMovie = this.screenings.indexOf(screeningExist);
        if (!screeningExist) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        currentScreenProfit = Number(this.ticketPrice) * Number(soldTickets);
        this.totalTicketsSold += soldTickets;
        this.totalProfit += currentScreenProfit;
        this.screenings.splice(indexOfCurrentMovie, 1);
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentScreenProfit}`;
    }

    toString() {
        let result = `${this.movieName} full information:\n`;
        result += `Total profit: ${this.totalProfit}$\n`;
        result += `Sold Tickets: ${this.totalTicketsSold}\n`;
        if (this.screenings.length > 0) {
            result += `Remaining film screenings:\n`;
            this.screenings.sort((a, b) => (a.hall).localeCompare(b.hall));
            for (const key of this.screenings) {
                result += `${key.hall} - ${key.date} - ${key.description}\n`;
            }
        } else if (this.screenings.length <= 0) {
            result += `No more screenings!`;
        }

        return result;
    }
}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());