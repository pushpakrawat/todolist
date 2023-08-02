import React from 'react';
import { View, FlatList } from 'react-native';
import TaskListLogic from './TaskListLogic';
import Task from '../Task/Task';

const TaskList = () => {
  const { tasks } = TaskListLogic();

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Task task={item} />}
      />
    </View>
  );
};

export default TaskList;
