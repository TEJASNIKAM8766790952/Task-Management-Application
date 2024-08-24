import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../actions/taskActions';

const TaskForm = ({ task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(editTask(task.id, { title }));
    } else {
      dispatch(addTask({ id: Date.now(), title, completed: false }));
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <button type="submit">{task ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
