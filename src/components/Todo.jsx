import React from 'react'
import checkmark from "../assets/images/icon-check.svg"
import cross from "../assets/images/icon-cross.svg"

const Todo = ({ completed, text, id, todoListCheck, todoListDelete }) => {

  const handleCheck = () => {
    todoListCheck(id);
  }

  const handleDelete = () => {
    todoListDelete(id);
  }

  return (
    <li className='py-6 px-9 border-b-2 border-veryDarkGrayishBlue flex justify-between items-center'>
      <div className='flex items-center gap-10'>
        {completed ? <div className='h-7 w-7 flex items-center rounded-full justify-center ring-2 ring-veryDarkGrayishBlue cursor-pointer bg-gradient-to-br from-cyan-600 via-cyan-600 to-pink-600' onClick={handleCheck}>
          <img src={checkmark} alt="" className='h-3 select-none'/>
        </div> : <div className='h-7 w-7 flex items-center rounded-full justify-center ring-2 ring-veryDarkGrayishBlue cursor-pointer' onClick={handleCheck}>
        </div>}
        {completed ? <span className='text-2xl text-gray-500 line-through select-none'>{text}</span> : <span className='text-2xl text-lightGrayishBlue select-none'>{text}</span>}
      </div>
      <button onClick={handleDelete}><img src={cross} alt="" className='hover:invert transition-all select-none'/></button>
    </li>
  )
}

export default Todo