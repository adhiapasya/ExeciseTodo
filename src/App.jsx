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

  return (
    <div style={{ textAlign: 'center', padding: '12px' }}>
      <h1 style={{ fontSize: '36px' }}>My Todo List</h1>
      <Todos todosValue={todos} />
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
