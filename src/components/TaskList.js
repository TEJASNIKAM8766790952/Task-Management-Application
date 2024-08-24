import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleTasks } from '../selectors/taskSelectors';
import TaskItem from './TaskItem';

const TaskList = () => {
  const filter = useSelector(state => state.filter);
  const tasks = useSelector(state => getVisibleTasks(state, filter));

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
