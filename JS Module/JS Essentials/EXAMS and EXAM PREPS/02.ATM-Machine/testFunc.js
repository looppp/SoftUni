function testATM(input) {

    let counter = 0;
    let newArr = input;
    newArr.forEach(function (inputNumber) {
        if (inputNumber === 10){
            counter++;
        }
    });

    console.log(counter);
}

testATM([10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20]);