import React from 'react'
import Todo from './Todo'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const TodoList = ({ todos, filterCheck, filterDelete }) => {
  
  const [animateTodo] = useAutoAnimate();

  const todoListCheck = ( id ) => {
    filterCheck(id);
  }

  const todoListDelete = ( id ) => {
    filterDelete(id);
  }

  return (
    <>
      <div className='bg-veryDarkSaturatedBlue rounded-lg'>
        <div>
          <ul className='flex flex-col' ref={animateTodo}>
            {todos.map((todo,index) => {
              return <Todo key={index} completed={todo.completed} id={todo.id} text={todo.text} todoListCheck = {todoListCheck} todoListDelete = {todoListDelete} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default TodoList