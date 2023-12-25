import axios from "axios"

//const API_URL = process.env.REACT_APP_API_URL

const API_URL = 'http://localhost:8000'

export async function getTodoList(){
    const response = await axios.get(`${API_URL}/api/todo/`)
    return response.data
}

export async function postTodo(data=null){
    const response = await axios.post(`${API_URL}/api/todo/`,data)
    return response.data
}

export async function getTodoDetail(pk=null){
    const response = await axios.get(`${API_URL}/api/todo/${pk}/`)
    return response.data
}

export async function putTodoDetail(pk=null, data=null){
    const response = await axios.put(`${API_URL}/api/todo/${pk}/`,data)
    return response.data
}

export async function deleteTodoDetail(pk=null){
    const response = await axios.delete(`${API_URL}/api/todo/${pk}/`)
    return response.data
}