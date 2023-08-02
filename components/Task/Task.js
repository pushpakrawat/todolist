import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TaskLogic from './TaskLogic';
import styles from '../../styles/globalStyles';

const Task = ({ task }) => {
  const { handleDelete } = TaskLogic({ task });

  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{task.text}</Text>
      <TouchableOpacity onPress={handleDelete}>
        <Text style={styles.taskDelete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
