
export const getVisibleTasks = (state, filter) => {
    switch (filter) {
      case 'COMPLETED':
        return state.tasks.filter(task => task.completed);
      case 'INCOMPLETE':
        return state.tasks.filter(task => !task.completed);
      default:
        return state.tasks;
    }
  };
  