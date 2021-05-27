import Task from './Task'
function Tasks({ tasks, onDelete, onToggle }) {
    return (
        <div className="tasks">
            <Task onDelete={onDelete} onToggle={onToggle} tasks={tasks} />
        </div>
    );
}
export default Tasks;