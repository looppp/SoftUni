function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            if (priority === 'high') {
                this.tasks.unshift({
                    id,
                    taskName,
                    priority
                });

                return `Task id ${id}, with ${priority} priority, has been added.`;
            }
            this.tasks.push({
                id,
                taskName,
                priority
            });

            return `Task id ${id}, with ${priority} priority, has been added.`;

        }

        doTask() {
            let newestTask = this.tasks[0];
            let taskName = newestTask.taskName;
            this.tasks.shift();

            if (this.tasks.length <= 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            } 
        
            return taskName;
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {
            let result = `Tasks, that need to be completed:\n`;
            this.tasks.forEach(x => {
                result += `${x.id}: ${x.taskName} - ${x.priority}\n`;
            });

            return result.trim();
        }

    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName, experience);
            this.bonus = bonus;
            this.baseSalary = Number(1000) + Number(bonus);
            this.tasks = [];
            this.experience = experience;
        }

        learn(years) {
            this.experience += years;
        }

    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName, experience);
            this.bonus = bonus;
            this.baseSalary = 1000 + Number(bonus);
            this.tasks = [];
            super.experience += 5 + experience;
        }


        changeTaskPriority(taskId) {
            let currentTask = this.tasks.find(x => x.id === taskId);
            let taskCurrentIndex = this.tasks.indexOf(currentTask);

            if (currentTask.priority === 'high') {
                currentTask.priority = 'low';
                let removedElement = this.tasks.splice(taskCurrentIndex, 1);
                this.tasks.push(removedElement);
            } else if (currentTask.priority === 'low') {
                currentTask.priority = 'high';
                let removedElement = this.tasks.splice(taskCurrentIndex, 1);
                this.tasks.unshift(removedElement);
            }

            return currentTask;
        }
    }


    return {
        Developer,
        Junior,
        Senior
    };
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
console.log(junior.learn(4));

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);




