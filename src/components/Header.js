function Header({ taskStatus, setStatus }) {
    return (
        <div className="header">
            <h3>TODO</h3>
            <select onChange={(e) => setStatus(e.target.value)} value={taskStatus} >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="notcompleted">Not completed</option>=
            </select>
        </div>
    );
}
export default Header;