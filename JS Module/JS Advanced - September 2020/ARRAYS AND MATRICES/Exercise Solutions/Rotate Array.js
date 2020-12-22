function rotateArray(array){
    let count = Number(array[array.length - 1]);
    array.pop();
    for (let i = 0; i < count; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    console.log(array.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']);