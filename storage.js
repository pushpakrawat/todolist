// storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = 'tasks';

export const saveTasksToStorage = async (tasks) => {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to storage:', error);
  }
};

export const loadTasksFromStorage = async () => {
  try {
    const tasks = await AsyncStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Error loading tasks from storage:', error);
    return [];
  }
};
