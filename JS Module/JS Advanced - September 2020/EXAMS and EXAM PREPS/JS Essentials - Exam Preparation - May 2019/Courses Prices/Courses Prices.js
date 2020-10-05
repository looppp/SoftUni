function coursePrice(courseOne, courseTwo, courseTree, courseType) {

    let totalCost = 0;

    let courses = {
        JSFundamentals: 170,
        JSAdvanced : 180,
        JSApps: 190
    };

    if (courseOne && courseTwo){
        courses.JSAdvanced -= courses.JSAdvanced * 0.1;

        if(courseTree){
            totalCost = courses.JSFundamentals + courses.JSAdvanced + courses.JSApps;
            totalCost -= totalCost * 0.06;
        }else {
            totalCost = courses.JSFundamentals + courses.JSAdvanced;
        }
    } else {
        totalCost += courseOne ? courses.JSFundamentals : 0;
        totalCost += courseTwo ? courses.JSAdvanced : 0;
        totalCost += courseTree ? courses.JSApps : 0;
    }

    if (courseType === 'online'){
        totalCost -= totalCost * 0.06;
    }

    console.log(Math.round(totalCost));
}

coursePrice(true, false, false, "online");