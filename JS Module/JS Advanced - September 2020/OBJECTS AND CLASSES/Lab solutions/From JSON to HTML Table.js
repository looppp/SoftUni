function solve(array){
    let data = array.shift();
    let objData = JSON.parse(data);

    let html = '<table>';
    html += '<tr><th>Name</th><th>Price</th></tr>';

    for (const obj of objData) {
        html += `<tr><td>${Object.values(obj)[0]}</td><td>${Object.values(obj)[1]}</td></tr>`;

    } 
    
    html += '</table>';

    console.log(html);
}



solve(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);