function solve() {
    let lectureNameElement = document.getElementsByClassName('form-control')[0].lastElementChild;
    let dateElement = document.getElementsByClassName('form-control')[1].lastElementChild;
    let moduleElement = document.getElementsByClassName('form-control')[2].lastElementChild;
    let addButtonElement = document.getElementsByClassName('form-control')[3].lastElementChild;
    let modulesNodeElement = document.getElementsByClassName('modules')[0];


    addButtonElement.addEventListener('click', e => {
        e.preventDefault();

        if (lectureNameElement.value === '' || dateElement.value === '' || moduleElement.value === 'Select module') {
            return;
        }

        let [yearTokens, hoursTokens] = dateElement.value.split('T');
        let [year, month, day] = yearTokens.split('-');
        let [hour, minutes] = hoursTokens.split(':');
        let formatedTimeModule = `${year}/${month}/${day} - ${hour}:${minutes}`;

        let moduleDivElement = document.createElement('div');
        let h3ModuleElement = document.createElement('h3');
        let ulElement = document.createElement('ul');
        let liFlexElement = document.createElement('li');
        let h4DateElement = document.createElement('h4');
        let deleteRedButtonElement = document.createElement('button');

        h4DateElement.textContent = `${lectureNameElement.value} - ${formatedTimeModule}`;
        deleteRedButtonElement.className = 'red';
        deleteRedButtonElement.textContent = 'Del';
        liFlexElement.className = 'flex';
        h3ModuleElement.textContent = `${moduleElement.value.toUpperCase()}-MODULE`;
        moduleDivElement.className = 'module';
        let checkForModules = modulesNodeElement.getElementsByClassName('module').length;



        if (checkForModules > 0) {
            for (let i = 0; i < checkForModules; i++) {
                let currentModule = modulesNodeElement.getElementsByClassName('module')[i];
                let currentModuleCheckH3 = currentModule.getElementsByTagName('h3')[0];
                let [moduleToken, textToken] = currentModuleCheckH3.textContent.split('-');
                let currentUlTarget = currentModule.getElementsByTagName('ul')[0];
                console.log(currentUlTarget);
                console.log(currentUlTarget.value);
                console.log(currentUlTarget.textContent);


                if (moduleToken === moduleElement.value.toUpperCase()) {

                    let liFlexElement = document.createElement('li');
                    let h4DateElement = document.createElement('h4');
                    let deleteRedButtonElement = document.createElement('button');

                    h4DateElement.textContent = `${lectureNameElement.value} - ${formatedTimeModule}`;
                    deleteRedButtonElement.className = 'red';
                    deleteRedButtonElement.textContent = 'Del';
                    liFlexElement.className = 'flex';

                    liFlexElement.appendChild(h4DateElement);
                    liFlexElement.appendChild(deleteRedButtonElement);
                    currentUlTarget.appendChild(liFlexElement);

                } else {
                    liFlexElement.appendChild(h4DateElement);
                    liFlexElement.appendChild(deleteRedButtonElement);
                    ulElement.appendChild(liFlexElement);
                    moduleDivElement.appendChild(h3ModuleElement);
                    moduleDivElement.appendChild(ulElement);
                    modulesNodeElement.appendChild(moduleDivElement);
                }
            }
        } else {
            liFlexElement.appendChild(h4DateElement);
            liFlexElement.appendChild(deleteRedButtonElement);
            ulElement.appendChild(liFlexElement);
            moduleDivElement.appendChild(h3ModuleElement);
            moduleDivElement.appendChild(ulElement);
            modulesNodeElement.appendChild(moduleDivElement);
        }



        deleteRedButtonElement.addEventListener('click', e => {
            liFlexElement.remove();

            if (ulElement.getElementsByTagName('li').length <= 0) {
                moduleDivElement.remove();
            }
        });


        lectureNameElement.value = '';
        dateElement.value = '';
        moduleElement.value = 'Select module';


    });



}