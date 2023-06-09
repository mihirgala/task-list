'use client'
import React, { useState } from 'react'

const addTaskForm = ({getTasks}) => {


    const [task, setTask] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = {task};
            const res = await fetch('http://localhost:4000/addTask', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if(res.ok){
                alert('Task added!')
                getTasks()
            }
        } catch (error) {
            console.log(error)
            alert('Error occured!')
        } finally {
            setTask('')
        }

    }
    return (
        <div className='m-5'>
            <form className='gap-5' onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className='border-[1px] border-black' name='task' />
                <input type="submit" className='border-[1px] border-black' value="Add Task" />
            </form>
        </div>
    )
}

export default addTaskForm