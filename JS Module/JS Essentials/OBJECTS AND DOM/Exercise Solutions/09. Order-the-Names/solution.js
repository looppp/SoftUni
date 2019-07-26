function solve() {
    function addFunction() {
        let inputText = document.getElementsByTagName('input')[0].value.toLowerCase();
        let name = inputText[0].toUpperCase() + inputText.slice(1);
        let charCode = name.charCodeAt(0);

        let row = document.getElementsByTagName('li')[charCode - 65];
        let namesList = row.textContent.split(', ').filter(n => n);
        namesList.push(name);
        row.textContent = namesList.join(', ');

        document.getElementsByTagName('input')[0].value = '';
        console.log(namesList);
    }

    let addButton = document.getElementsByTagName('button')[0];
    addButton.addEventListener("click", addFunction)
}