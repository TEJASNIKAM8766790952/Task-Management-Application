import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <Filter />
      <TaskList />
    </div>
  );
};

export default App;