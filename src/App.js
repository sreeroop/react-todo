import { useEffect, useState } from 'react';
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
    console.log(tasks)
  }
  //delete task
  const deleteTask = (id) => {
    console.log(id)
    setTasks(tasks.filter((task) => id !== task.id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    console.log("toggle", id)
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask onAdd={addTask} />
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
