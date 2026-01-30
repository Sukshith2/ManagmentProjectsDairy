import React, { useState } from 'react'

const NewTask = ({onAdd}) => {
    const [Entertask, setEntertask] = useState('')

function handleChnage (event){  
    setEntertask(event.target.value);
}

function handleClick(){
    onAdd(Entertask);
    setEntertask('');

}


  return (
    <div className='flex items-center gap-4'>
        <input onChange={handleChnage}  value={Entertask} type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
        <button className='text-stone-700 hover:text-stone-950' onClick={handleClick}>Add Task</button>
        </div>
  )
}

export default NewTask