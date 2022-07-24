//todo schema
const todoDB = [];

  const getAllTasks = () => {
    return todoDB;
  };

  const createTask = (taskObj) => {
    if (todoDB.length === 0) {
      const newTask = {
        id: 1,
        title: taskObj.title,
        description: taskObj.description,
        completed: false,
      };
      todoDB.push(newTask);
      return todoDB;
    }
   
}

//find and update task

const updatedTask = (taskObj) => {
  const taskIndex = 0;
  const newTask= {
    id: 1,
    title: taskObj.title,
    description: taskObj.description,
    completed: taskObj.status,
  };;

  todoDB[taskIndex] = newTask;
  return todoDB;
};

const deleteTask = () => {
  const taskIndex = 0;
  todoDB.splice(taskIndex, 1);
  return todoDB;
}

module.exports = {
    getAllTasks,
    createTask,
    updatedTask,
    deleteTask
  };
