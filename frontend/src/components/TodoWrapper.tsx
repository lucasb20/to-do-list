import { useState } from "react"
import { postTodo, putTodoDetail } from "../services/APIService";
import { TodoFinal } from "../services/Interfaces";

export function TodoWrapper(){
    const [todos, setTodos] = useState<TodoFinal[]>([])

    const addTodo = (todo : string) => {
        postTodo({task: todo, completed: false})
            .then(data => {
                setTodos([...todos, {id: data.id, task: todo, completed: false, isEditing: false}])
        })
    }

    const toggleComplete = (id : number) => {
        putTodoDetail(id, {completed: false})
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    return(
        <div>teste</div>
    )
}