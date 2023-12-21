const toDoList = {
    taskList: [],
    addTask: function (title, priority = 1) {
        this.taskList.push({
            title,
            priority,
            id: this.taskList.reduce((accumulator, item) => {
                    return item.id >= accumulator ? item.id + 1 : accumulator;
                }
                , 0)
        })
    },
    deleteTask: function (id) {
        this.taskList = this.taskList.filter(item => item.id !== id);
    },
    updateTask: function (id, {title, priority}) {
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
    sortTask: function (heightToLow = true) {
        this.taskList.sort((a, b) => a.priority - b.priority);
        if (heightToLow) {
            this.taskList.reverse();
        }
    }
}