

const Task = ({task, handleChangeStatus}) => {
    return (
        <div className='bg-cyan-100 p-5 mb-7'>
            <p>{task.name}</p>
            <p>{task.status}</p>
            <button onClick={() =>handleChangeStatus(task)} className="border-2 rounded px-3 py-1 pt-2 bg-slate-400">Next</button>
        </div>
    );
};

export default Task;