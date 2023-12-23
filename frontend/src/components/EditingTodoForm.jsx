import React, {useState} from "react";

export function EditTodoForm({editTask, task}){
    const [value, setValue] = useState("")

    const handlerSubmit = e => {
        e.preventDefault()
        editTask(value, task.id)
        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handlerSubmit}>
            <input type="text" id="todo-input" placeholder="UpdateTask"
            onChange={e => setValue(e.target.value)} value={value} />
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}