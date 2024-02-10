import { ChangeEvent, FormEvent, useState } from "react";

interface TodoFormProps{
    addTodo: (todo: string) => void
}

export function TodoForm({addTodo} : TodoFormProps){
    const [value, setValue] = useState("")

    const handlerSubmit = (e : FormEvent) => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    
    return (
        <form className="TodoForm" onSubmit={handlerSubmit}>
            <input
                type="text"
                id="todo-input"
                placeholder="What is going on?"
                onChange={handleChange}
                value={value}
            />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}