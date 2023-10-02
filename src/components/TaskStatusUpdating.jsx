import { useState } from "react";
import Task from "./Task";

const TaskStatusUpdating = () => {
  const todos = [
    {
      id: 1,
      name: "Task 1",
      status: "pending",
    },
    {
      id: 2,
      name: "Task 2",
      status: "pending",
    },
    {
      id: 3,
      name: "Task 3",
      status: "pending",
    },
    {
      id: 4,
      name: "Task 4",
      status: "pending",
    },
  ];

  const allStatus = ["pending", "running", "done", "archive"];

  const [tasks, setTasks] = useState(todos);

  const handleChangeStatus = (task) => {
    console.log(task.id);
    let taskStatus = task.status;

    // if(task.status === 'pending') taskStatus = 'running';
    // if(task.status === 'running') taskStatus = 'done';
    // if(task.status === 'done') taskStatus = 'archive';
    // if(task.status === 'archive') taskStatus = 'pending';

    const changedStatus =
      allStatus[(allStatus.indexOf(taskStatus) + 1) % allStatus.length];

    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) return { ...item, status: changedStatus };
      else return item;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="flex justify-center gap-28">
      <div>
        <p>Pending</p>
        {tasks
          .filter((task) => task.status === "pending")
          .map((item) => (
            <Task
              key={item.id}
              task={item}
              handleChangeStatus={handleChangeStatus}
            ></Task>
          ))}
      </div>
      <div>
        <p>Running</p>
        {tasks
          .filter((task) => task.status === "running")
          .map((item) => (
            <Task
              key={item.id}
              task={item}
              handleChangeStatus={handleChangeStatus}
            ></Task>
          ))}
      </div>
      <div>
        <p>Done</p>
        {tasks
          .filter((task) => task.status === "done")
          .map((item) => (
            <Task
              key={item.id}
              task={item}
              handleChangeStatus={handleChangeStatus}
            ></Task>
          ))}
      </div>
      <div>
        <p>Archive</p>
        {tasks
          .filter((task) => task.status === "archive")
          .map((item) => (
            <Task
              key={item.id}
              task={item}
              handleChangeStatus={handleChangeStatus}
            ></Task>
          ))}
      </div>
    </div>
  );
};

export default TaskStatusUpdating;
