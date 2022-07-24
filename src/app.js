const express = require('express');
const todoRouter = require('./todos/todos.router').router

const app = express();

app.use(express.json());

app.use('/api/v1', todoRouter)

app.listen(8000, () => {
    console.log("Server started at port 8000");
  });