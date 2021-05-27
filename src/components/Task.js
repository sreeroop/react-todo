function Task({ tasks,onDelete,onToggle}) {
    return (
        tasks.map((task) => {
            return (
                <div key={task.id} onMouseDown={()=>onToggle(task.id)} onDoubleClick={()=>onToggle(task.id)} className={`task ${task.reminder ? 'remind' : ''}`}>
                    <div>
                        <div className="Name">{task.name}</div>
                        <div className="Date">{task.date}</div>
                    </div>
                    <div onClick={() => onDelete(task.id)}className="task-delete">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>
                    </div>
                </div>
            );
        })
       
    );
}
export default Task;