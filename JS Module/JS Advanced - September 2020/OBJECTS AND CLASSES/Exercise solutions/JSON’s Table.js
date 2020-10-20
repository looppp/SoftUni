function employeeTable(array){
    let result = '<table>\n';

    let arrayData = [];

    array.forEach(x => {
        arrayData.push(JSON.parse(x));
    });

    arrayData.forEach(obj => {
        result += '\t<tr>\n';
        Object.values(obj).forEach(x => {
            result += `\t\t<td>${x}</td>\n`;
        });
        result += '\t</tr>\n';
    });


    result += '</table>';

    console.log(result);
    return result;
}

employeeTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);