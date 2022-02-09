import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Bread'},
    {id: 2, completed: false, title: 'Butter'},
    {id: 3, completed: false, title: 'Milk'}
  ])


  const toggleToDo = id => {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    )
  }

  return (
    <div className='wrapper'>
    <h1>React tutorial</h1>

    <TodoList todos={todos} onToggle={toggleToDo}/>
    </div>
  )
}

export default App;
