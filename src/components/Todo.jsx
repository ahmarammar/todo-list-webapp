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
    <li className='py-6 md:px-9 px-7 border-b-2 border-veryDarkGrayishBlue'>
      <div className='flex items-center justify-between w-full gap-10'>
        <div className='flex gap-8 items-center justify-center'>
          {completed ? <div className='h-7 min-w-[1.75rem] flex items-center rounded-full justify-center ring-2 ring-veryDarkGrayishBlue cursor-pointer bg-gradient-to-br from-cyan-600 via-cyan-600 to-pink-600' onClick={handleCheck}>
            <img src={checkmark} alt="" className='h-3 select-none'/>
          </div> : <div className='h-7 min-w-[1.75rem] flex items-center rounded-full justify-center ring-2 ring-veryDarkGrayishBlue cursor-pointer' onClick={handleCheck}>
          </div>}
          {completed ? <span className='md:text-2xl text-xl text-gray-500 line-through select-none w-auto'>{text}</span> : <span className='md:text-2xl text-xl text-lightGrayishBlue select-none'>{text}</span>}
        </div>
        <button onClick={handleDelete}><img src={cross} alt="" className='h-5 min-w-[1.25rem] hover:invert transition-all select-none'/></button>
      </div>
      
    </li>
  )
}

export default Todo