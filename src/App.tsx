import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

import InputField from './components/InputField';
import { Todoprops } from './model/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todoprops[]>([]);
  const [input, setInput] = useState<string>('');


  const addHandler=(e:React.FormEvent)=>{
       e.preventDefault();
       setTodos([...todos, { id: Date.now(), taskname: input, isDone: false }]);
       setInput("");
  }

  const editHandler = (id: number) => {
    setTodos(todos.filter((todoS) =>{ return todoS.id === id ? (todoS.isDone=!todoS.isDone):todos}))
  }
  return (
    <>
       <InputField setInput={setInput} input={input} addHandler={addHandler}/>
       <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
