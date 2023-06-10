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
        <div className='my-5 flex justify-center'>
            <form className='flex gap-5' onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className='bg-transparent border-[#64C8FF] border-[2px] p-3 rounded-xl focus:outline-none focus:border-[#1abc9c] ' maxLength={150} placeholder='Enter Task Here' name='task' required/>
                <input type="submit" className='mt-auto border-b-[4px] font-semibold px-5 py-2 rounded-md border-[#64C8FF] hover:border-[#1abc9c]' value="ADD" />
            </form>
        </div>
    )
}

export default addTaskForm