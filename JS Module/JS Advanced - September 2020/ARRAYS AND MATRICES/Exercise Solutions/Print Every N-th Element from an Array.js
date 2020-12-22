function printElementFromArray(arr){
    let stepSize = Number(arr[arr.length - 1]);
    arr.pop();
    for (let i = 0; i < arr.length; i+= stepSize) {
        console.log(arr[i]);
    }
}

printElementFromArray(['dsa',
'asd', 
'test', 
'tset', 
'2']);