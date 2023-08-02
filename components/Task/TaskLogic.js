import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, saveTasksToStorage } from '../../store/actions/taskActions';

const TaskLogic = ({ task }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    saveTasksToStorage(tasks); // Call the function to save tasks to local storage
  };

  return {
    handleDelete,
  };
};

export default TaskLogic;
