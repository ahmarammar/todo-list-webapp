import React from 'react'

const Status = ({ todos, setTodos }) => {

  const itemsLeft = todos.filter((todo, index) => todo.completed != true);

  const handleClear = () => {
    setTodos(itemsLeft);
  }

  return (
    <>
      <div className='bg-veryDarkSaturatedBlue p-5 flex justify-between font-bold text-sm text-gray-500'>
        <span>{itemsLeft.length} items left</span>
        <button onClick={handleClear}>Clear Completed</button>
      </div>
    </>
  )
}

export default Status