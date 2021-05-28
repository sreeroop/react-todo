import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import './App.css';

function App() {
  const [taskStatus, setStatus] = useState('all')
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTask] = useState([...tasks])

  // filter tasks
  const filterTask = () => {
    console.log(taskStatus)
    if (taskStatus === 'all')
      setFilteredTask(tasks)
    else if (taskStatus === 'completed')
      setFilteredTask(tasks.filter((task) => task.status === true))
    else
      setFilteredTask(tasks.filter((task) => task.status === false))
  }
  useEffect(() => {
    filterTask()
  }, [tasks, taskStatus])
  
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task }
    setTasks(tasks => [...tasks, newTask])
  }
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => id !== task.id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }
  //change status of tasks
  const changeStatus = (id) => {
    setTasks(tasks.map((task) =>
      id === task.id ? { ...task, status: !task.status } : task)
    )
  }
  return (
    <div className="App">
      <div className="container">
        <Header taskStatus={taskStatus} setStatus={setStatus} />
        <AddTask onAdd={addTask} />
        <Tasks Status={changeStatus} tasks={filteredTasks} onToggle={toggleReminder} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;