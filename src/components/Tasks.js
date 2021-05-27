import Task from './Task'
function Tasks({ tasks, onDelete, onToggle, Status }) {
    return (
        <div className="tasks">
            <Task onDelete={onDelete} onToggle={onToggle} tasks={tasks} Status={Status} />
        </div>
    );
}
export default Tasks;