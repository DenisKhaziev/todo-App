import Todo from "./Todo";

const TodoList = ({todos, deleteTodo, toggleTodo}) => {


    return (
        <div>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo) => {
                    return (
                        <Todo 
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                       />
                    )
                })
            }
        </div>
        
    )
}

export default TodoList