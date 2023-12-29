const toDoList = {
    taskList: [],
    addTask(title, priority = 1) {
        this.taskList.push({
            title,
            priority,
            id: this.taskList.reduce((accumulator, item) => {
                    return item.id >= accumulator ? item.id + 1 : accumulator;
                }
                , 0)
        })
    },
    deleteTask(id) {
        this.taskList = this.taskList.filter(item => item.id !== id);
    },
    updateTask(id, {title, priority}) {
        const task = this.taskList.find((task) => task.id === id);
        if (task) {
            if (title) {
                task.title = title;
            }
            if (priority) {
                task.priority = priority;
            }
        }
    },
    sortTask(heightToLow = true) {
        this.taskList.sort((a, b) => a.priority - b.priority);
        if (heightToLow) {
            this.taskList.reverse();
        }
    }
}

const newTasks = {
    taskList: []
}

toDoList.addTask.apply(newTasks, ['test1', 4]);
toDoList.addTask.apply(newTasks, ['test2', 6]);
toDoList.addTask.call(newTasks, 'test2');
toDoList.deleteTask.call(newTasks, 1);
toDoList.updateTask.apply(newTasks, [1, {title: 'test', priority: 0}]);
toDoList.sortTask.call(newTasks);


console.log(newTasks.taskList)