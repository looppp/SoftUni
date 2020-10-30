function solve() {
    let nameElement = document.getElementsByTagName('input')[0];
    let hallElement = document.getElementsByTagName('input')[1];
    let thicketPriceElement = document.getElementsByTagName('input')[2];
    let onScreenButtonElement = document.getElementsByTagName('button')[0];
    let clearButtonElement = document.getElementsByTagName('button')[1];
    let moviesOnScreen = document.getElementById('movies');
    let archiveElement = document.getElementsByTagName('ul')[1];

    onScreenButtonElement.addEventListener('click', e => {
        e.preventDefault();

        if (nameElement.value === '' || hallElement.value === '' || thicketPriceElement.value === '' || thicketPriceElement.value === 0) {
            return;
        }

        if (!Number(thicketPriceElement.value)) {
            console.log("not a number");
        }

        let liElement = document.createElement('li');
        let spanElement = document.createElement('span');
        let strongHallElement = document.createElement('strong');
        let divElement = document.createElement('div');
        let strongPriceElement = document.createElement('strong');
        let inputElement = document.createElement('input');
        let archiveButtonElement = document.createElement('button');

        let ticketPriceNumber = Number(thicketPriceElement.value);

        strongPriceElement.textContent = `${ticketPriceNumber.toFixed(2)}`;
        inputElement.placeholder = 'Tickets Sold';
        archiveButtonElement.textContent = 'Archive';

        strongHallElement.textContent = `Hall: ${hallElement.value}`;
        spanElement.textContent = `${nameElement.value}`;

        liElement.appendChild(spanElement);
        liElement.appendChild(strongHallElement);
        divElement.appendChild(strongPriceElement);
        divElement.appendChild(inputElement);
        divElement.appendChild(archiveButtonElement);
        liElement.appendChild(divElement);

        moviesOnScreen.lastElementChild.appendChild(liElement);



        archiveButtonElement.addEventListener('click', e => {
            if (inputElement.value <= 0) {
                return;
            }
            e.currentTarget.remove();

            let totalAmountOfProfit = Number(inputElement.value) * Number(ticketPriceNumber);
            let deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';

            strongHallElement.textContent = `Total amount: ${totalAmountOfProfit.toFixed(2)}`;
            inputElement.remove();
            strongPriceElement.remove();
            divElement.remove();
            liElement.appendChild(deleteButtonElement);
            archiveElement.appendChild(liElement);

            deleteButtonElement.addEventListener('click', e => {
                liElement.remove();
            });

            clearButtonElement.addEventListener('click', e => {
                archiveElement.firstElementChild.remove();
            });
        });

        nameElement.value = '';
        hallElement.value = '';
        thicketPriceElement.value = '';
    });

}