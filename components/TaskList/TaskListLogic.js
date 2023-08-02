import { useSelector } from 'react-redux';

const TaskListLogic = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return {
    tasks,
  };
};

export default TaskListLogic;
