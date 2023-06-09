'use client'
import React, { useEffect, useState } from 'react';
import AddTaskForm from "./AddTaskForm";

const TaskList = ({ allTasks }) => {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const responce = await fetch('http://localhost:4000/tasks')
        const allTasks = await responce.json()
        setTasks(allTasks);
    }

    useEffect(() => {
        getTasks()
    }, [])

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.taskId === taskId) {
                    return { ...task, checked: !task.checked };
                }
                return task;
            })
        );
    };

    const deleteTask = async (taskId) => {
        const hasConfirmed = confirm('Are you sure?')
        if (hasConfirmed) {
            try {
                const res = await fetch(`http://localhost:4000/deleteTask/${taskId}`,{
                    method:'DELETE'
                })
                if(res.ok){
                    setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== taskId))
                }
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <>
            <AddTaskForm getTasks={getTasks} />
            <div className='p-2'>
                {tasks.map((task) => (
                    <div key={task.taskId} className='flex gap-10'>
                        <h3
                            className={`text-xl cursor-pointer select-none ${task.checked ? 'line-through' : ''}`}
                            onClick={() => toggleTask(task.taskId)}
                        >
                            {task.Task}
                        </h3>
                        <button onClick={() => deleteTask(task.taskId)}>X</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TaskList;
