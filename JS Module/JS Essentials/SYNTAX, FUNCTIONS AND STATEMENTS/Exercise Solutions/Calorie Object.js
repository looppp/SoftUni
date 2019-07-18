function toObject(arr) {
    let newObj = {};

    for (let i = 0; i < arr.length; i+= 2) {
         newObj[arr[i]] = Number(arr[i + 1]);
    }
    console.log(newObj);
}

toObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);