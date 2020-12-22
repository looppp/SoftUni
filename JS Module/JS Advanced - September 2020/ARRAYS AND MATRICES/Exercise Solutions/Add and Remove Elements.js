function solveElements(array){
    let output = [];
    let number = 1;
    array.forEach(comand => {
        if(comand === 'add'){
            output.push(number);
        } else if(comand === 'remove'){
            output.pop();
        }

        number++
    });
    output.length == 0 ? console.log('Empty') : console.log(output.join("\n"));
}

solveElements(['add', 
'add', 
'remove', 
'add', 
'add']);