const {getAllTasks, createTask, updatedTask, deleteTask} = require('./todos.controller');

const getAll =  (req, res) => {
    const data = getAllTasks()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const create = (req, res) => {
    const data = createTask(req.body)
    res.status(201).json({
        response: data
    })
}

const update = (req, res) => {
    const data = updatedTask(req.body)
    res.status(200).json({
        response: data
    })
}

const deleteT = (req, res) => {
    const data = deleteTask()
    res.status(200).json({
        response: data
    })
}

module.exports = {getAll, create, update, deleteT}
