function printAnArray(arr){
    let delimiter = arr[arr.length - 1];
    arr.pop();
    return arr.join(delimiter);
    
}

console.log(printAnArray(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']));