import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { TodoProps } from "../services/Interfaces"


export function Todo({task, toggleComplete, editTodo, deleteTodo} : TodoProps){
    return(
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed?"completed":""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}