import React, { useState, useEffect } from "react";
import { TodoForm } from "./ToDoform";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditingTodoForm";
import { deleteTodoDetail, getTodoList, postTodo, putTodoDetail } from "../services/APIService";

export function TodoWrapper(){
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        postTodo({task: todo})
            .then(data => {
                setTodos([...todos, {id: data.id, task: todo, completed: false, isEditing: false}])
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    const deleteTodo = id => {
        deleteTodoDetail(id)
        .then(data => {
            setTodos(todos.filter( todo => todo.id !== id ))
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (value, id) => {
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