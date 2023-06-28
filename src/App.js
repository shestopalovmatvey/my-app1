import React, { useState } from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [tasks, setTasks] = useState([])

  let todoListTask = tasks

  const [filter, setFilter] = useState('all')

  function addTask(title) {
    const newTask = {
      id: uuidv4(),
      title: title,
      isDone: false,
    }
    setTasks([...tasks, newTask])
  }

  function removeTask(id) {
    const newTasks = tasks.filter(elem => elem.id !== id)

    setTasks(newTasks)
  }

  function changeFilterStatus(value) {
    setFilter(value)
  }


  function changeCheckStatus(id, isDone) {
    const task = tasks.find(elem => elem.id ===  id)
    if (task) {
      task.isDone = isDone
    }
    setTasks([...tasks])
  }

  if (filter === 'active') {
    todoListTask = tasks.filter(elem => elem.isDone === false)
  }

  if (filter === 'done') {
    todoListTask = tasks.filter(elem => elem.isDone === true)
  }


  return (
    <TodoList
      task={todoListTask}
      addTask={addTask}
      removeTask={removeTask}
      changeFilter={changeFilterStatus}
      changeCheckStatus={changeCheckStatus}
    />
  );
}

export default App;
