function countWords(array){
    let cleanArray = array.split();
    let result = {};
    cleanArray.forEach(element => {
        if(!result[element]){
            result[element] = 1;
        }else {
            result[element]++;
        }
    });

    console.log(result);
}
//TODO: Find a Regex For the split.
countWords(['Far too slow, you']);