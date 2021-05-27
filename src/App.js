import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);

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
  const changeStatus = (id) => {
    setTasks(tasks.map((task) =>
      id === task.id ? { ...task, status: !task.status } : task)
    )
    tasks.map((task) =>
      console.log(task.status)
    )
  }
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask onAdd={addTask} />
        <Tasks Status={changeStatus} tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
