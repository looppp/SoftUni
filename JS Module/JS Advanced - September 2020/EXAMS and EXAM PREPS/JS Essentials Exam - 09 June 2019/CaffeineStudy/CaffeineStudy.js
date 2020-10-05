function caffeeStudy(days) {
    let consumedCaffeine = 0;

    for (let i = 1; i <= days; i++) {

        consumedCaffeine += 430;
        if (i % 5 === 0) {
            consumedCaffeine += 450
        }
        else if(i % 9 === 0){
            consumedCaffeine += 380
        }
    }
    console.log(`${consumedCaffeine} milligrams of caffeine were consumed`)
}

caffeeStudy(8);