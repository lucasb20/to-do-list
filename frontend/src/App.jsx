import { useState } from 'react'
import { TodoWrapper } from './components/TodoWrapper'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To Do List</h1>
      <TodoWrapper/>
    </>
  )
}

export default App
