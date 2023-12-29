import axios from "axios"

//const API_URL = process.env.REACT_APP_API_URL

const API_URL = 'http://127.0.0.1:5000'

export async function getTodoList(){
    const response = await axios.get(`${API_URL}/todo`)
    return response.data
}

export async function postTodo(data=null){
    const response = await axios.post(`${API_URL}/todo`,data)
    return response.data
}

export async function putTodoDetail(pk=null, data=null){
    const response = await axios.put(`${API_URL}/todo/${pk}`,data)
    return response.data
}

export async function deleteTodoDetail(pk=null){
    const response = await axios.delete(`${API_URL}/todo/${pk}`)
    return response.data
}