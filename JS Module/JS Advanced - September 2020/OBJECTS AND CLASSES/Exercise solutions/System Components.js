function database(input){
    let register = {};

    input.forEach(row => {
        let [systemName, componentName, subcomponentName] = row.split(' | ');

        if(!register[systemName]){
            register[systemName] = {};
        }

        if(!register[systemName][componentName]){
            register[systemName][componentName] = [];
        }

        register[systemName][componentName].push(subcomponentName);

    });
  
    const sortedSystems = Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));

    for (const systemNames of sortedSystems) {
        console.log(systemNames);

        const sortedConponents = Object.keys(register[systemNames]).sort((a, b) => register[systemNames][b].length - register[systemNames][a].length);

        for (const component of sortedConponents) {
            console.log(`|||${component}`);
            register[systemNames][component].forEach(x => console.log(`||||||${x}`));
        }
    }
}

database(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);