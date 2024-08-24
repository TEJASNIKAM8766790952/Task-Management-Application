import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      return state.map(task =>
        task.id === action.payload.taskId
          ? { ...task, ...action.payload.updates }
          : task
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

export default tasksReducer;
