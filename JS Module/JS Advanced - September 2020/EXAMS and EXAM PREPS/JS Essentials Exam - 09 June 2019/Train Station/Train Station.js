function trainStation(wagonSize, passengers) {

    let leftPassangers = 0;
    let train = [];

    for (let i = 0; i < passengers.length; i++) {
        leftPassangers += passengers[i];

        if (leftPassangers <= wagonSize){
            train.push(leftPassangers);
            leftPassangers = 0;
        }else{
            train.push(wagonSize);
            leftPassangers -= wagonSize;
        }

    }

    console.log(train);

    if (leftPassangers) {
        console.log(`Could not fit ${leftPassangers} passengers`);
    }
    else {
        console.log('All passengers aboard');
    }
}

trainStation(10, [9, 39, 1, 0, 0]);
