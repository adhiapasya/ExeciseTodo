import React, { useState } from 'react';
import Todos from './component/Todos';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninjas',
      completed: false,
    },
  ]);

  // console.log(todos)
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
    console.log('toggleCompleted function is called')
    console.log(todoId)

  }

  return (
    <div style={{ textAlign: 'center', padding: '12px' }}>
      <h1 style={{ fontSize: '36px' }}>My Todo List</h1>
      <Todos todosValue={todos}
        toggleCompleted={toggleCompleted} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}
export default App;
