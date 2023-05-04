import React, { useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdDoneOutline } from 'react-icons/md';
import { Todoprops } from '../model/todo';

type props = {
    todo: Todoprops,
    setTodos: React.Dispatch<React.SetStateAction<Todoprops[]>>,
    todos: Todoprops[],
}

function SingleTodo({ todo, setTodos, todos }: props) {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.taskname);


    const deleteHadler = (id: number) => {
        setTodos(todos.filter((todo) => { return todo.id !== id }));
    }
    const completeHandler = (id: number) => {
        setTodos(todos.map((singleTodo) => singleTodo.id === id ? { ...singleTodo, isDone: !singleTodo.isDone } : singleTodo))
    }
    const editHadler = (id: number, taskname: string) => {
        setEdit(!edit);
    }
    const submitHandler = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, taskname: editTodo } : todo));
        setEdit(false);
    }

    return (
        <form className="todo" onSubmit={(e) => submitHandler(e, todo.id)}>
                <div className='todoTask'>
                {!edit ? (todo.isDone ? <s>{todo.taskname}</s> : <p>{todo.taskname}</p>) : <input type="text" onChange={(e) => { setEditTodo(e.target.value) }} value={editTodo} />}
                </div>
                <div className="icons">
                    <span>
                        <GrEdit onClick={() => editHadler(todo.id, todo.taskname)} />
                    </span>
                    <span>
                        <AiOutlineDelete onClick={() => deleteHadler(todo.id)} />
                    </span>
                    <span>
                        <MdDoneOutline onClick={() => completeHandler(todo.id)} />
                    </span>
                </div>
        </form>
    )
}

export default SingleTodo
