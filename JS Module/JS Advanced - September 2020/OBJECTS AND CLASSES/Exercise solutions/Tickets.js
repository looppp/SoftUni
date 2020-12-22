function solveTickets(array, sorting) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    array.forEach(row => {
        let [destination, price, status] = row.split('|');
        price = Number(price);

        result.push(new Ticket(destination, price, status));
    });

    switch (sorting) {
        case 'destination':
            result.sort(function (a, b) {
                if (a.destination > b.destination) {
                    return 1;
                } else if (a.destination < b.destination) {
                    return -1;
                }
                return 0;
            });
            break;

        case 'status':
            result.sort(function (a, b) {
                if (a.status > b.status) {
                    return 1;
                } else if (a.status < b.status) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'price':
            result.sort();
            break;
        default:
            break;
    }

    return result;
}

solveTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination');