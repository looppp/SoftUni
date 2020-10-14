function solveElements(array){
    let number = 0;
    array.forEach(element => {
        if(element === 'add'){
            number++;
            console.log(number);
        } else if(element === 'remove'){
            number--;
            if(number >= 1){
                console.log(number);
            } else {
                console.log('Empty');
            }
        }
    });
    
}

solveElements(['add', 
'add', 
'remove', 
'add', 
'add']);