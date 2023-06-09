'use client'
import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { title: 'Do work', checked: false },
    { title: 'Do work', checked: false },
    { title: 'Do work', checked: false },
    { title: 'Do work', checked: false },
    { title: 'Do work', checked: false },
  ]);

  const toggleTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].checked = !updatedTasks[index].checked;
      return updatedTasks;
    });
  };

  return (
    <div className='select-none'>
      {tasks.map((task, index) => (
        <h3
          key={index}
          className={`text-xl w-fit ${task.checked ? 'line-through' : ''}`}
          onClick={() => toggleTask(index)}
        >
          {task.title}
        </h3>
      ))}
    </div>
  );
};

export default TaskList;
