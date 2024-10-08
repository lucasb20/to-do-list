import { TodoBase } from "./Interfaces"

const API_URL = "http://localhost:8001"

export async function getTodoList(){
    const response = await fetch(`${API_URL}/todo/`)
    return response.json()
}

export async function postTodo(data : TodoBase){
    const response = await fetch(`${API_URL}/todo/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

export async function putTodoDetail(pk : number, data : TodoBase){
    const response = await fetch(`${API_URL}/todo/${pk}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

export async function deleteTodoDetail(pk : number){
    const response = await fetch(`${API_URL}/todo/${pk}`, {
        method: 'DELETE',
    })
    return response.json()
}