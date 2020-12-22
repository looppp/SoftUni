function countWords([input]) {
    let wordArray = input.split(/\W+/).filter(w => w != "" );
    let obj = {};

    for (let word of wordArray) {
        if (!obj.hasOwnProperty(word)){
            obj[word] = Number(1);
        }
        else {
            obj[word]++;
        }
    }
    console.log(JSON.stringify(obj));
}

countWords(["Far too slow, you're far too slow."]);