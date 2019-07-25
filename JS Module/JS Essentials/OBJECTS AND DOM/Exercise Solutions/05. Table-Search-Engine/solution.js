function solve() {
    let searchButton = document.getElementById("searchBtn");
    searchButton.addEventListener("click", clickEvent);

    function clickEvent() {
        let selectedRows = document.getElementsByClassName("select");
        Array.from(selectedRows).forEach(row => row.classList.remove("select"));

        let inputField = document.getElementById("searchField");
        let inputValue = inputField.value.toLowerCase();
        inputField.value = "";

        let rows = Array.from(document.querySelector("table tbody").children);

        for (let row of rows){
            let cells = Array.from(row.children);

            for (let cell of cells){
                if (cell.textContent.toLowerCase().includes(inputValue)){
                    row.classList.add("select")
                }
            }
        }

    }
}