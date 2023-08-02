import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import TaskList from '../components/TaskList/TaskList';
import useHomeScreenLogic from './HomeScreenLogic';
import styles from '../styles/globalStyles';

const HomeScreen = () => {
  const { taskText, setTaskText, handleAddTask } = useHomeScreenLogic();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <TaskList />
    </View>
  );
};

export default HomeScreen;
