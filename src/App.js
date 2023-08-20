import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import Buttons from './components/Ui/Button';

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = { 
      text,
      isCompleted: false,
      id: uuidv4()
    }
    // console.log(newTodo)
    setTodos ([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id ))
  }

  const toggleTodoHandler =(id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return {...todo}
    }))
  }

  const resetTodosHandler =() => {
    setTodos([])
  }

  const deleteCompletedTodosHandler =() => {
    setTodos(todos.filter(todo => todo.isCompleted === false))
  }

  const totalCompletedTodoCounter = todos.filter(todo => todo.isCompleted === true).length
    
  

  

  return (
    <div className="App">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodoHandler}/>
        {/* {!todos.length ? null : <Buttons deleteTodos={deleteCompletedTodosHandler} resetTodos={resetTodosHandler}/>} */}
        {todos.length > 0 && <Buttons deleteTodos={deleteCompletedTodosHandler} resetTodos={resetTodosHandler} todos={todos}/>}
        <TodoList 
          todos={todos} 
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
          />
          <h3>{totalCompletedTodoCounter > 0 ? `You have completed ${totalCompletedTodoCounter} ${totalCompletedTodoCounter > 1 ? 'todos' : 'todo'}!` : null}</h3>
    </div>
  )
}

export default App;
