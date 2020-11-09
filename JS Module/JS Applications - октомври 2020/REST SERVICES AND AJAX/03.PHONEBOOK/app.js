/*jshint esversion: 6 */
function attachEvents() {

    let phoneBookUl = document.getElementById('phonebook');
    let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    loadBtn.addEventListener('click', () => {
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            Object.keys(data).forEach(key => {
                let liElement = document.createElement('li');
                let deleteBtn = document.createElement('button');
                let deleteURL = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;

                liElement.textContent = `${data[key].person}: ${data[key].phone}`;
                deleteBtn.textContent = 'DELETE';
                liElement.appendChild(deleteBtn);
                phoneBookUl.appendChild(liElement);

                deleteBtn.addEventListener('click', () => {
                    fetch(deleteURL, { method: 'DELETE'});
                    liElement.remove();
                });
            });
        });
    });
    
    createBtn.addEventListener('click', () => {
        let result = {
            person: person.value,
            phone: phone.value
        };
        fetch(url, {method: 'POST', body: JSON.stringify(result)});
    });
}

attachEvents();