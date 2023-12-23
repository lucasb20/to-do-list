import React, { useState } from "react";
import {v4} from "uuid";
import { TodoForm } from "./ToDoform";
import { Todo } from "./Todo";

export function TodoWrapper(){
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([{id: v4(), task: todo, completed: false, isEditing: false}, ...todos])
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    return(
        <div className="todo-wrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
                return <Todo task={todo} key={index}
                toggleComplete={toggleComplete}/>
            })}
        </div>
    )
}