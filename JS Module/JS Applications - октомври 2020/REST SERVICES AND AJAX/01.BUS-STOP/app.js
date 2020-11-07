/*jshint esversion: 6 */
function getInfo() {
    let stopId = document.getElementById('stopId');
    let stopInfo = document.getElementById('stopName');
    let validBusses = ['1287', '1308', '1327', '2334'];
    let busesUl = document.getElementById('buses');

    const httpRequest = new XMLHttpRequest();

    if (!validBusses.includes(stopId.value)) {
        stopInfo.textContent = 'Error';
    }

    let url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        stopInfo.textContent = `${data.name}`;
        Object.keys(data.buses).forEach(key => {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${data.buses[key]}`;
            console.log(li);
            busesUl.appendChild(li);
        });
    });

}