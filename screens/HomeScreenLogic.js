import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask, loadTasksFromStorage } from '../store/actions/taskActions';

const useHomeScreenLogic = () => {
  const [taskText, setTaskText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    loadInitialTasks();
  }, []);

  const loadInitialTasks = async () => {
    const loadedTasks = await loadTasksFromStorage();
    setTasks(loadedTasks);
  };

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      const newTask = { id: new Date().getTime(), text: taskText };
      dispatch(addTask(newTask));
      setTaskText('');
    }
  };

  return {
    taskText,
    setTaskText,
    handleAddTask,
    tasks,
  };
};

export default useHomeScreenLogic;
