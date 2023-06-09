'use client'
import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Complete project proposal', checked: false },
        { id: 2, title: 'Attend team meeting', checked: false },
        { id: 3, title: 'Send out client emails', checked: false },
        { id: 4, title: 'Review documentation', checked: false },
        { id: 5, title: 'Prepare presentation slides', checked: false },
    ]);

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, checked: !task.checked };
                }
                return task;
            })
        );
    };

    const deleteTask = (taskId) => {
        const hasConfirmed = confirm('Are you sure?')
        if (hasConfirmed) setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
    };

    return (
        <div className='p-2'>
            {tasks.map((task) => (
                <div key={task.id} className='flex gap-10'>
                    <h3
                        className={`text-xl cursor-pointer select-none ${task.checked ? 'line-through' : ''}`}
                        onClick={() => toggleTask(task.id)}
                    >
                        {task.title}
                    </h3>
                    <button onClick={() => deleteTask(task.id)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
