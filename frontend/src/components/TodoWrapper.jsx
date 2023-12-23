import React, { useState } from "react";
import {v4} from "uuid";
import { TodoForm } from "./ToDoform";
import { Todo } from "./Todo";

export function TodoWrapper(){
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: v4(), task: todo, completed: false, isEditing: false}])
    }

    return(
        <div className="todo-wrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
                <Todo task={todo} key={index}/>
            })
            }
        </div>
    )
}