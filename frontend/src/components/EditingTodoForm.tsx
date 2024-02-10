import {ChangeEvent, FormEvent, useState} from "react";

type Todo = {
    id: number;
    name: string;
}

type EditTodoFormProps = {
    editTask: (taskName: string, taskId: number) => void;
    task: Todo;
}

export function EditTodoForm({editTask, task} : EditTodoFormProps){
    const [value, setValue] = useState("")

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        editTask(value, task.id)
        setValue("")
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }    
    
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="todo-input"
            placeholder="UpdateTask"
            onChange={handleChange}
            value={value}
          />
          <button type="submit" className="todo-btn">
            Update Task
          </button>
        </form>
      )
}