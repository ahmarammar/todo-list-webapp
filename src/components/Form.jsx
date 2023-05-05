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
        <div className='flex justify-between items-center bg-veryDarkSaturatedBlue w-full md:pt-3 md:pb-3.5 md:pl-16 md:pr-8 pt-5 pb-6 pl-10 pr-4 rounded-md text-extraLightGray md:text-2xl text-xl shadow-2xl'>
          <input type="text" placeholder='Create a new todo...' className='placeholder:text-lightGrayishBlue md:placeholder:text-xl placeholder:text-lg placeholder:font-normal placeholder:tracking-normal bg-transparent outline-none select-none' value={text} onChange={handleText} maxLength={"45"} />
          <button type='submit' className='hidden md:inline opacity-80 hover:opacity-100 p-2 rounded-lg transition-all' onClick={handleSubmit}><AiOutlinePlusCircle fontSize={"2.1rem"}/></button>
        </div>
      </form>
    </>
  )
}

export default Form