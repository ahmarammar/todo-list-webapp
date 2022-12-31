import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai"

const Form = ({ handleTodos }) => {

  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text !== ""){
      handleTodos(text);
      setText("");
    }
  }

  return (
    <>
      <form action="#">
        <div className='flex justify-between items-center bg-veryDarkSaturatedBlue w-full pt-3 pb-3.5 pl-16 pr-8 rounded-md text-extraLightGray text-2xl shadow-2xl'>
          <input type="text" placeholder='Create a new todo...' className='placeholder:text-lightGrayishBlue placeholder:text-xl placeholder:font-normal placeholder:tracking-normal bg-transparent outline-none select-none' value={text} onChange={handleText} />
          <button type='submit' className='opacity-80 hover:opacity-100 p-2 rounded-lg transition-all' onClick={handleSubmit}><AiOutlinePlusCircle fontSize={"2.1rem"}/></button>
        </div>
      </form>
    </>
  )
}

export default Form