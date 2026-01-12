import React from 'react'
import noProjectImg from '../assets/no-projects.png'
import Button from './Button'

const NoprojectSelected = ({onStartAddProject}) => {
  return (
    <div className='mt-24 text-center w-2/3 '>
        <img src={noProjectImg} className='w-16 h-16 object-contain mx-auto' alt="An Empty task list" />
        <h2 className='text-xl font-bold text-stone-500 my-4 '>No projecte selected</h2>
        <p className='text-stone-400 mb-4'>select a  project or get started with a new project</p>
        <p className='mt-8'>
         <Button onClick = {onStartAddProject}>create new projects</Button>
        </p>

    </div>
  )
}

export default NoprojectSelected