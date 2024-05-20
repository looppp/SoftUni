function movieTicketPrice(age) {
  let ticketPrice;

  if (age >= 0 && age <= 12) {
    ticketPrice = 5;
  } else if (age >= 13 && age <= 19) {
    ticketPrice = 8;
  } else {
    ticketPrice = 10;
  }

  console.log(`$${ticketPrice}`);
}

movieTicketPrice(10);
