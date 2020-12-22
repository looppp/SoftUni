function heroicInentory(array){
    let resultArray = [];

    for (const row of array) {
        let [heroName, heroLevel, items] = row.split(" / ");
        heroLevel = Number(heroLevel);

        items = items ? items.split(", "): [];

        resultArray.push({heroName, heroLevel, items});
    }
    console.log(resultArray);
    console.log(JSON.stringify(resultArray));
}

heroicInentory(['Jake / 1000 / Gauss, HolidayGrenade']);