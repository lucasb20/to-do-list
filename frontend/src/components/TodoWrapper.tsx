import { useEffect, useState } from "react"
import { deleteTodoDetail, getTodoList, postTodo, putTodoDetail } from "../services/APIService";
import { TodoFinal } from "../services/Interfaces";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditingTodoForm";
import { Todo } from "./Todo";

export function TodoWrapper(){
    const [todos, setTodos] = useState<TodoFinal[]>([])

    const addTodo = (todo : string) => {
        postTodo({task: todo, completed: false})
            .then(data => {
                    setTodos([...todos, {id: data.id, task: todo, completed: false, isEditing: false}])
                }
            )
            .catch(err => console.log(err))
    }

    const toggleComplete = (id : number) => {
        putTodoDetail(id, {task: "", completed: false})
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    const deleteTodo = (id : number) => {
        deleteTodoDetail(id)
        .then(data => {
            setTodos(todos.filter( todo => todo.id !== id ))
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    const editTodo = (id : number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (value : string, id : number) => {
        putTodoDetail(id, {task: value, completed: false})
            .then(data => {
                setTodos(todos.map(todo => todo.id === id ? {...todo, task: value, isEditing: !todo.isEditing} : todo ))
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getTodoList()
            .then(data => setTodos(data))
            .catch(err => console.error(err))
    }, [])

    return(
        <div className="todo-wrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
                return (todo.isEditing ? <EditTodoForm editTask={editTask} task={todo}/>:<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
            })}
        </div>
    )
}