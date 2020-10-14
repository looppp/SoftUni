function evenPosition(arr){
    let newObj = [];

    for (let i = 0; i < arr.length; i+= 2) {
        newObj.push(arr[i]);      
    }
    console.log(newObj.join(' '));
}

evenPosition(['20', '30', '40']);
evenPosition(['5', '10']);