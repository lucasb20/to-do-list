import React, { useState } from "react";
import {v4} from "uuid";
import { TodoForm } from "./ToDoform";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditingTodoForm";

export function TodoWrapper(){
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: v4(), task: todo, completed: false, isEditing: false}])
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    const deleteTodo = id => {
        setTodos(todos.filter( todo => todo.id !== id ))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (value, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task: value, isEditing: !todo.isEditing} : todo ))
    }

    return(
        <div className="todo-wrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
                return (todo.isEditing ? <EditTodoForm editTask={editTask} task={todo}/>:<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
            })}
        </div>
    )
}