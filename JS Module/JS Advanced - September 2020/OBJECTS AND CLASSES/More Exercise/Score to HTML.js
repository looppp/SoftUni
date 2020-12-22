function solveScoreHTML(jsonString) {

    let dataArray = JSON.parse(jsonString);
    let result = '<table>\n';
    result += '  <tr><th>name</th><th>score</th></tr>\n';

    dataArray.forEach(row => {
        let name = row.name;
        let score = row.score;

        if(name.includes('&')){
            let [nameOne, nameTwo] = name.split('&');
            let newName = nameOne + '&amp;' + nameTwo;
            result += `  <tr><td>${newName}</td><td>${score}</td></tr>\n`;
            
        } else{
            result += `  <tr><td>${name}</td><td>${score}</td></tr>\n`;
        }
        

    });
    result += '</table>';

    console.log(result);
}



solveScoreHTML(['[{"name":"Pesho & Kiro","score": 479},{"name": "Gosho, Maria & Viki","score": 205}]']);