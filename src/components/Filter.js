import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../actions/taskActions'; // Correct path based on the directory structure




const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
      <button onClick={() => dispatch(setFilter('COMPLETED'))}>Completed</button>
      <button onClick={() => dispatch(setFilter('INCOMPLETE'))}>Incomplete</button>
    </div>
  );
};

export default Filter;
