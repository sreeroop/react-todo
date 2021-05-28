import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import './App.css';

function App() {
  const [taskStatus, setStatus] = useState('all')
  let [tasks, setTasks] = useState([]);
  let [filteredTasks, setFilteredTask] = useState([...tasks])

  useEffect(() => {
    getLocal()
  }, [])

  useEffect(() => {
    filterTask()
    saveLocal()
  }, [tasks, taskStatus])

  const saveLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  const getLocal = () => {
    if (JSON.parse(localStorage.getItem('tasks')) === null)
      localStorage.setItem('tasks', JSON.stringify([]))
    else {
      let local = JSON.parse(localStorage.getItem('tasks'))
      setTasks(local)

    }
  }
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