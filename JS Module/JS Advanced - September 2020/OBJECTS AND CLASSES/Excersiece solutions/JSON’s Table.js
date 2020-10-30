function solveJson(arrayObj) {

    let result = '<table>\n';


    let employees = [];

    arrayObj.forEach(x => {
        employees.push(JSON.parse(x));
    });

    employees.forEach(employee => {
        result += '\t<tr>\n';

        Object.values(employee).forEach(x => {
            result += `\t\t<td>${x}</td>\n`;
        });

        result += '\t<tr>\n';
    });

    result += '</table>';
    return result;
}

solveJson(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);