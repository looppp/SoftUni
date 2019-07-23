function solve() {
    let targetDiv = document.getElementsByClassName('my-message')[0];
    let sendButton = document.getElementById('send');
    let inputTextArea = document.getElementById('chat_input');
    let chatMessageArea = document.getElementById('chat_messages');

    sendButton.addEventListener("click", function () {
        let targetDivClone = targetDiv.cloneNode(true);
        let textAreaContent = inputTextArea.value;
        targetDivClone.textContent = textAreaContent;
        chatMessageArea.appendChild(targetDivClone);

        inputTextArea.value = "";
    })
}


