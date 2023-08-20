import {BsFillChatLeftQuoteFill} from 'react-icons/bs'
import {FcApproval } from "react-icons/fc";
import { GoX } from "react-icons/go";


import styles from './Todo.module.css'
// import styles2 from './todoIcon.module.css'

const Todo = ({todo, deleteTodo, toggleTodo}) => {
    return (
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
            <BsFillChatLeftQuoteFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo.text}</div>
            <GoX className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
            <FcApproval 
            className={styles.checkIcon} 
            onClick={() => toggleTodo(todo.id)}/>

        </div>
    )
}

export default Todo