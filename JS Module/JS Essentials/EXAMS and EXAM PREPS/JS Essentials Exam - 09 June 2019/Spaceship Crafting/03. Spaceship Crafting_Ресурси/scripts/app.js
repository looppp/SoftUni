function spaceshipCrafting() {

    let result = [];

    let titaniumCore = document.getElementById('titaniumCoreFound').value;
    let aluminiumCore = document.getElementById('aluminiumCoreFound').value;
    let magnesiumCore = document.getElementById('magnesiumCoreFound').value;
    let carbonCore = document.getElementById('carbonCoreFound').value;


    let loosesPercent = document.getElementById('lossesPercent').value / 4;
    loosesPercent = (100 - loosesPercent) / 100;

    let titaniumBar = Math.round((titaniumCore * loosesPercent) / 25);
    let aluminiumBar = Math.round((aluminiumCore * loosesPercent) / 50);
    let magnesiumBar = Math.round((magnesiumCore * loosesPercent) / 75);
    let carbonBar = Math.round( (carbonCore * loosesPercent) / 100);
    
    let ships = {
        'The-Undefined-Ship': 0,
        'Null-Master': 0,
        'JSON-Crew': 0,
        'False-Fleet': 0,
    };


    while (titaniumBar >= 2 && aluminiumBar >= 2 && magnesiumBar >= 3 && carbonBar >= 1) {
        if (titaniumBar >= 7 && aluminiumBar >= 9 && magnesiumBar >= 7 && carbonBar >= 7) {
            titaniumBar -= 7;
            aluminiumBar -= 9;
            magnesiumBar -= 7;
            carbonBar -= 7;
            ships['The-Undefined-Ship']++;
        }
        if (titaniumBar >= 5 && aluminiumBar >= 7 && magnesiumBar >= 7 && carbonBar >= 5) {
            titaniumBar -= 5;
            aluminiumBar -= 7;
            magnesiumBar -= 7;
            carbonBar -= 5;
            ships['Null-Master']++;
        }
        if (titaniumBar >= 3 && aluminiumBar >= 5 && magnesiumBar >= 5 && carbonBar >= 2) {
            titaniumBar -= 3;
            aluminiumBar -= 5;
            magnesiumBar -= 5;
            carbonBar -= 2;
            ships['JSON-Crew']++;
        }
        if (titaniumBar >= 2 && aluminiumBar >= 2 && magnesiumBar >= 3 && carbonBar >= 1) {
            titaniumBar -= 2;
            aluminiumBar -= 2;
            magnesiumBar -= 3;
            carbonBar -= 1;
            ships['False-Fleet']++;
        }
    }

    let allBuildShips = document.getElementById('builtSpaceships').getElementsByTagName('p')[0];

    let allAvailableBars = document.getElementById('availableBars').getElementsByTagName('p')[0];

    allAvailableBars.textContent =
        `${titaniumBar} titanium bars, `
        + `${aluminiumBar} aluminum bars, `
        + `${magnesiumBar} magnesium bars, `
        + `${carbonBar} carbon bars`;

    for (let ship in ships){
        if(ships[ship]){
            result.push(`${ships[ship]} ${ship.toUpperCase()}`)
        }
    }

        allBuildShips.textContent = result.join(', ');

}