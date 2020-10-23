function solve() {
    let taskElement = document.querySelector('#task');
    let descriptionElement = document.querySelector('#description');
    let dateElement = document.querySelector('#date');
    let addButtonElement = document.querySelector('#add');
    let openSectionElement = document.getElementsByTagName('section')[1];
    let inProgressSectionElement = document.getElementById('in-progress');
    let completedSectionElement = document.getElementsByTagName('section')[3];

    
    addButtonElement.addEventListener('click', e => {
        e.preventDefault();

        if(taskElement.value === '' || descriptionElement.value === '' ||  dateElement.value === '' ){
            return;
        }

        let articleElement = document.createElement('article');
        let h3Element = document.createElement('h3');
        let pElementOne = document.createElement('p');
        let pElementTwo = document.createElement('p');
        let divElement = document.createElement('div');
        let buttonElementStart = document.createElement('button');
        let buttonElementDelete = document.createElement('button');

        h3Element.textContent = taskElement.value;
        pElementOne.textContent = `Description: ${descriptionElement.value}`;
        pElementTwo.textContent = `Due Date: ${dateElement.value}`;
        buttonElementStart.className = 'green';
        buttonElementStart.textContent = 'Start';
        buttonElementDelete.textContent = 'Delete';
        buttonElementDelete.className = 'red';
        divElement.className = 'flex';

        articleElement.appendChild(h3Element);
        articleElement.appendChild(pElementOne);
        articleElement.appendChild(pElementTwo);
        divElement.appendChild(buttonElementStart);
        divElement.appendChild(buttonElementDelete);
        articleElement.appendChild(divElement);
        openSectionElement.lastElementChild.appendChild(articleElement);
        

        taskElement.value = '';
        descriptionElement.value = '';
        dateElement.value = '';

        buttonElementStart.addEventListener('click', e => {
            e.currentTarget.remove();

            let buttonElementFinish = document.createElement('button');
            buttonElementFinish.className = 'orange';
            buttonElementFinish.textContent = 'Finish';
            divElement.appendChild(buttonElementFinish);
            inProgressSectionElement.appendChild(articleElement);

            buttonElementFinish.addEventListener('click', e => {
                articleElement.lastElementChild.remove();
                completedSectionElement.lastElementChild.appendChild(articleElement);
            });
        });
        buttonElementDelete.addEventListener('click', e => {
            articleElement.remove();
        });
    });
}