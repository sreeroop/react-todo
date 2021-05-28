function Task({ tasks, onDelete, onToggle, Status }) {
    return (
        tasks.map((task) => {
            return (
                <div key={task.id} onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder && 'remind'}`}>
                    <div className={`task-info ${task.status && "completed"}`}>
                        <div className="Name">{task.name}</div>
                        <div className="Date">{task.date}</div>
                    </div>
                    <div className="task-btns">
                        <div onClick={(_id) => Status(task.id)} className="task-complete">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" /></svg>
                        </div>
                        <div onClick={() => onDelete(task.id)} className="task-delete">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" /></svg>
                        </div>
                    </div>
                </div>
            );
        })

    );
}
export default Task;