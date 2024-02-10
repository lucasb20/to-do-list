const API_URL = 'http://127.0.0.1:5000'

export async function getTodoList(){
    //const response = await axios.get(`${API_URL}/todo`)
    const response = await fetch(`${API_URL}/todo`)
    return response.json()
}

export async function postTodo(data=null){
    //const response = await axios.post(`${API_URL}/todo`,data)
    const response = await fetch(`${API_URL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

export async function putTodoDetail(pk=null, data=null){
    //const response = await axios.put(`${API_URL}/todo/${pk}`,data)
    const response = await fetch(`${API_URL}/todo/${pk}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

export async function deleteTodoDetail(pk=null){
    //const response = await axios.delete(`${API_URL}/todo/${pk}`)
    const response = await fetch(`${API_URL}/todo/${pk}`, {
        method: 'DELETE',
    })
    return response.json()
}