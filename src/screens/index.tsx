import { useRef, useState } from 'react';
import { FlatList, Text, View, Alert, TextInput } from 'react-native';
import { Header } from '../components/Header';
import { Task } from '../components/Task';
import { TaskDTO } from '../dto/TaskDTO';
import { styles } from './style';
import { Empty } from '../components/Empty';
import uuid from '../utils/uuid';

export function HomeScreen() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState('');
  const newTaskInputRef = useRef<TextInput>(null);
  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter(
    ({ isCompleted }) => isCompleted,
  ).length;

  function handleTaskAdd() {
    if (newTask !== '' && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim() },
      ]);

      setNewTask('');
      newTaskInputRef.current?.blur();
    }
  }

  function handleTaskDone(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      }),
    );
  }

  function handleTaskDeleted(id: string) {
    Alert.alert('Excluir tarefa', 'Deseja excluir esta tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () =>
          setTasks((task) => task.filter((task) => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleTaskEdit(id: string) {
    Alert.alert('Editar tarefa', 'Deseja editar a tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () => {
          Alert.prompt('Editar Tarefa', 'Digite a nova tarefa:', (text) => {
            if (text !== null) {
              setTasks((tasks) =>
                tasks.map((task) =>
                  task.id === id ? { ...task, title: text } : task,
                ),
              );
            }
          });
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Header
        inputRef={newTaskInputRef}
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleTaskAdd}
      />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCreated}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCompleted}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDeleted={() => handleTaskDeleted(item.id)}
              onTaskEdit={() => handleTaskEdit(item.id)}
              // isCompleted={item.isCompleted}
              // title={item.title}
              // comentado pois podemos passar todos os nossos itens com a chamada no objeto abaixo com item
              {...item}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
}
