/*jshint esversion: 6 */
function solve() {
    var devInfo = document.getElementById('info');
    let url = `https://judgetests.firebaseio.com/schedule/depot.json`;

    function changeButton() {
        var departButton = document.getElementById('depart');
        var arriveButton = document.getElementById('arrive');

        if (departButton.disabled === false) {
            departButton.disabled = true;
            arriveButton.disabled = false;
        } else {
            departButton.disabled = false;
            arriveButton.disabled = true;
        }
    }
    function depart() {
        fetch(url)
            .then(responce => responce.json())
            .then(data => {
                devInfo.textContent = `Next stop ${data.name}`;
            });

            changeButton();
    }

    function arrive() {
        fetch(url)
            .then(responce => responce.json())
            .then(data => {
                devInfo.textContent = `Arriving at ${data.name}`;
                url = `https://judgetests.firebaseio.com/schedule/${data.next}.json`;
            });

            changeButton();
    }

    return {
        depart,
        arrive
    };
}

let result = solve();