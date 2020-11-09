/*jshint esversion: 6 */
function attachEvents() {
    let refreshBtn = document.getElementById('refresh');
    let submitBtn = document.getElementById('submit');
    let author = document.getElementById('author');
    let content = document.getElementById('content');
    let messagesArea = document.getElementById('messages');
    let url = `https://rest-messanger.firebaseio.com/messanger.json`;

    refreshBtn.addEventListener('click', () => {
        fetch(url)
        .then(result => result.json())
        .then(data => {
            Object.values(data).forEach(person => {
                messagesArea.textContent += `${person.author}: ${person.content}\n`;
            });
        });
    });
    submitBtn.addEventListener('click', () => {
        let result = {
            author: author.value,
            content: content.value
        };
        fetch(url, {method: 'POST', body: JSON.stringify(result)});
    });

}

attachEvents();