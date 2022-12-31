import React, { useState } from 'react'
import Header from './components/Header'
import backgroundImage from "./assets/images/bg-desktop.jpg"
import Form from './components/Form'
import TodoList from './components/TodoList'
import uuid from 'react-uuid';
import Status from './components/Status'

const App = () => {

  const [todos, setTodos] = useState([]);

  const handleTodos = ( text ) => {
    setTodos([...todos, {text:text, id:uuid(), completed: false}]);
  }

  const filterCheck = ( id ) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id){
        if(todo.completed === false){
          todo.completed = true;
        }else{
          todo.completed = false;
        }
      }
      return todo;
    }))
  }

  const filterDelete = ( id ) => {
    setTodos(todos.filter((todo) => id != todo.id));
  }

  return (
    <>
      <div
        className='min-h-screen bg-veryDarkBlue relative z-0 grid place-items-center'
      >
        <img src={backgroundImage} alt="" className='absolute inset-0 w-full min-h-[300px] h-96 object-cover -z-10'/>
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-900 via-pink-900 to-pink-900 opacity-50 w-full min-h-[300px] h-96 -z-10'>
        </div>
        <div className='flex flex-col py-8 px-12 min-h-[85vh] container max-w-3xl mx-auto gap-16'>
          <Header />
          <div>
            <div className='flex gap-10 flex-col w-full'>
              <Form handleTodos = {handleTodos} />
              <TodoList todos={todos} filterCheck = {filterCheck} filterDelete = {filterDelete} />
            </div>
            {todos.length > 0 && <Status todos={todos} setTodos={setTodos}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App