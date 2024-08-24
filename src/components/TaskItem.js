import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
