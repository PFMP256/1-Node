const router = require('express').Router();
const httpTodos = require('./todos.http');

router.route('/todos').get(httpTodos.getAll).post(httpTodos.create).put(httpTodos.update).delete(httpTodos.deleteT);

module.exports = { router }