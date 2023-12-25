import React, { useState, useEffect } from "react";
import {v4} from "uuid";
import { TodoForm } from "./ToDoform";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditingTodoForm";
import { getTodoList, postTodo } from "../services/APIService";

export function TodoWrapper(){
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: v4(), task: todo, completed: false, isEditing: false}])
        postTodo({task: todo})
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    const deleteTodo = id => {
        setTodos(todos.filter( todo => todo.id !== id ))
        //deleteTodo()
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (value, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task: value, isEditing: !todo.isEditing} : todo ))
        //editTodo()
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