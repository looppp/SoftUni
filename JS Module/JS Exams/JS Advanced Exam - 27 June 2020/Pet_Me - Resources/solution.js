function solve() {
    let buttonElement = document.querySelector('#container button');
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kindElement, ownerElement] = inputElements;
    let adoptionUlElement = document.querySelector('#adoption ul');
    let adoptedSection = document.querySelector('#adopted ul');

    buttonElement.addEventListener('click', e => {
        e.preventDefault();

        //all inputs are fulled
        if (!inputElements.every(x => x.value)) {
            return;
        }
        //age is a number
        if (!Number(ageElement.value)) {
            console.log("not a number");
        }

        //create new list item and add it to #adobtion
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let secondButtonElement = document.createElement('button');

        pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`;
        spanElement.innerText = `Owner: ${ownerElement.value}`;
        secondButtonElement.innerText = ('Contact with owner');

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(secondButtonElement);
        adoptionUlElement.appendChild(liElement);

        //clear all input
        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        ownerElement.value = '';


        secondButtonElement.addEventListener('click', e => {

            e.currentTarget.remove();

            let divElement = document.createElement('div');
            let thirdButton = document.createElement('button');
            let inputElement = document.createElement('input');

            inputElement.placeholder = 'Enter your names';
            thirdButton.innerText = 'Yes! I take it!';

            divElement.appendChild(inputElement);
            divElement.appendChild(thirdButton);
            liElement.appendChild(divElement);

            thirdButton.addEventListener('click', e => {

                e.currentTarget.remove();

                adoptedSection.appendChild(liElement);

                let checkedButton = document.createElement('button');
                checkedButton.innerText = 'Checked';


                liElement.querySelector('input').remove();
                liElement.querySelector('div').remove();
                liElement.querySelector('span').textContent = `New Owner: ${inputElement.value}`;
                liElement.appendChild(checkedButton);

                checkedButton.addEventListener('click', e => {
                    adoptedSection.querySelector('li').remove();
                });
            });

        });
    });
}