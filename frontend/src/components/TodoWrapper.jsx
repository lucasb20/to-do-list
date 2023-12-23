import React, { useState } from "react";
import { TodoForm } from "./ToDoform";

export function TodoWrapper(){
    const [todos, setTodos] = useState([])
    return(
        <div className="todo-wrapper">
            <TodoForm/>
        </div>
    )
}