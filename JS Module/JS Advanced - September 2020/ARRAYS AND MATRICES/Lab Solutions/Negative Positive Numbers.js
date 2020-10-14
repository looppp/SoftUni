function negativeAndPositive(arr) {

    let newArray = [];
    arr.forEach(element => {
        if (element < 0) {
            newArray.unshift(element);
        } else {
            newArray.push(element);
        }
    });

    newArray.forEach(element => { console.log(element); });
}

negativeAndPositive([7, -2, 8, 9]);
negativeAndPositive([3, -2, 0, -1]);