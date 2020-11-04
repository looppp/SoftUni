function solveValidator(input){

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^([a-zA-Z0-9.]+)$|\*/g;
    let messageRegex = /^([^<>\\&'"]*)$/g;

    let [method, uri, version, message] = Object.values(input);

    if(!validMethods.includes(method)){
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!validVersion.includes(version)){
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!uri.match(uriRegex)){
        throw new Error('Invalid request header: Invalid Uri');
    }

    if(!message.match(messageRegex)){
        throw new Error('Invalid request header: Invalid message');
    }
    
    console.log(input);
}

solveValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  });