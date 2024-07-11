import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  VirtualizedList,
} from 'react-native';

const TodoApp = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [taskText, setTaskText] = useState<any>('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks((oldTasks) => [...oldTasks, taskText]);
      setTaskText('');
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
        />
        <TouchableOpacity
          testID="addTodoBtn"
          style={styles.addButton}
          onPress={addTask}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <VirtualizedList
        getItem={(data, index) => data[index]}
        getItemCount={() => tasks.length}
        data={tasks}
        keyExtractor={(item: string) => item}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(item)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
  },
  deleteButton: {
    color: 'red',
  },
});

export default TodoApp;