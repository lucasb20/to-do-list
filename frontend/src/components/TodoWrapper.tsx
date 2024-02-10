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
    }

    const toggleComplete = (id : number) => {
        for(let i = 0; i < todos.length; i++){
            if(todos[i].id === id){
                putTodoDetail(id, {task: todos[i].task, completed: !todos[i].completed})
                break
            }
        }
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    const deleteTodo = (id : number) => {
        deleteTodoDetail(id)
        .then(() => {
            setTodos(todos.filter( todo => todo.id !== id ))
        })
    }

    const editTodo = (id : number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (value : string, id : number) => {
        putTodoDetail(id, {task: value, completed: false})
            .then(() => {
                setTodos(todos.map(todo => todo.id === id ? {...todo, task: value, isEditing: !todo.isEditing} : todo ))
            })
    }

    useEffect(() => {
        getTodoList()
        .then(data => {
            setTodos(data)
        })
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