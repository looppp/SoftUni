function solve() {
    function clickEventAdd(i) {
        let name = document.getElementsByClassName('product-title')[i].textContent;
        if (!orderList.some(x => x === name)){
            orderList.push(name);
        }
        let price = document.getElementsByClassName('product-line-price')[i].textContent;

        totalSum += +price;
        result += `Added ${name} for ${price} to the cart.\n`;
        textArea.value = result;

    }
    let result = '', totalSum = 0, orderList = [];
    let textArea = document.getElementsByTagName('textarea')[0];
    let buttons = document.getElementsByClassName('add-product');

    function clickAction() {
        result += `You bought ${orderList.join(', ')} for ${totalSum.toFixed(2)}.`;
        textArea.value = result;

        for (let button of buttons){
            button.disabled = true;
        }
        checkButton.disabled = true;

    }

    for(let i = 0; i <= buttons.length - 1; i++){
        buttons[i].addEventListener("click",  function() {
            clickEventAdd(i);
        }, false);
    }

    let checkButton = document.getElementsByClassName('checkout')[0];
    checkButton.addEventListener("click", clickAction)

}

