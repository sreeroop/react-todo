import { useState } from "react";

function AddTask({ onAdd }) {
    const [name,setName] = useState('')
    const [date,setDate] = useState('')
    const [reminder, setReminder] = useState(false)
    const Submit = (e) => {
        e.preventDefault()

        onAdd({ name, date, reminder });
        setName('')
        setDate('')
        setReminder(false)
    }
    return (
        <form onSubmit={Submit} className="add">
            <input value={name} name="name" type="text" onChange={(t)=>setName(t.target.value)} className="taskName" placeholder="enter task name"/>
            <input value={date} name="date" type="text" onChange={(r) => setDate(r.target.value)} className="taskTime" placeholder="enter task date" />
            <label> Reminder
             
            <input value={reminder} name="reminder" type="checkbox" onChange={(e)=>setReminder(e.currentTarget.checked)} className="taskReminder" />
            </label>
            <button className="btn">Sumbit</button>
        </form>  
    );
}
export default AddTask;