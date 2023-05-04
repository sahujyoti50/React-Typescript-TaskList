import React from 'react';
import { Todoprops } from '../model/todo';
import SingleTodo from './SingleTodo';
type props={
  todos:Todoprops[],
  setTodos: React.Dispatch<React.SetStateAction<Todoprops[]>>
}

function TodoList({todos,setTodos}:props) {
  return (
    <div className='todoList'>
    {todos && todos.map((todo) =><SingleTodo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>)}
  </div>
  )
}

export default TodoList
