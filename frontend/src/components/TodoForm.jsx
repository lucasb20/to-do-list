import React, {useState} from "react";

export function TodoForm({addTodo}){
    const [value, setValue] = useState("")

    const handlerSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handlerSubmit}>
            <input type="text" id="todo-input" placeholder="What is going on?"
            onChange={e => setValue(e.target.value)} value={value} />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}