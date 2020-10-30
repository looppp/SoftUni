(function(scope){
    let message = "hello from consoleleeee";

    function printMessage(additionalMessage){
        console.log(message, additionalMessage);
    }

    scope.printMessage = printMessage;
    
})(window);

