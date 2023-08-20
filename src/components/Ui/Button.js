import {FaTrashAlt} from 'react-icons/fa'
import {HiRefresh} from 'react-icons/hi'
// import styles from './todoIcon.module.css'
import styles from './Button.module.css'



const Buttons = ({deleteTodos, resetTodos, todos}) => {
    const newTodoList = todos.filter(todo => todo.isCompleted === true)
    return (
        <div className={styles.buttons}> 
            <button title='reset todos' onClick={resetTodos}><HiRefresh /></button>
            <button className={`${styles.buttons} ${newTodoList.length > 0? styles.buttons : styles.hideButton}`} title='move completed todos to trash' onClick={deleteTodos}><FaTrashAlt /></button>
        </div>
    )
}

export default Buttons

// className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}