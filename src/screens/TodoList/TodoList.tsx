import { List, WhiteSpace } from '@ant-design/react-native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TodoInput } from '../../components/TodoInput/TodoInput';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { Todo } from '../../interfaces/todo';
import { addTodo, deleteTodo, editTodo, fetchTodos, toggleTodo } from '../../services/todoApi';
import { styles } from './TodoList.styles';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');

  const loadTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!newTitle.trim()) return;
    try {
      const newTodo = await addTodo(newTitle);
      setTodos((prev) => [...prev, newTodo]);
      setNewTitle('');
    } catch {
      console.error('Error', 'Could not add todo');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t._id !== id));
    } catch {
      console.error('Error', 'Could not delete todo');
    }
  };

  const handleEdit = async (id: string, title: string) => {
    try {
      await editTodo(id, title);
      setTodos((prev) => prev.map((t) => (t._id === id ? { ...t, title } : t)));
    } catch {
      console.error('Error', 'Could not edit todo');
    }
  };

  const handleToggle = async (id: string) => {
    try {
      await toggleTodo(id);
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? { ...t, isCompleted: !t.isCompleted } : t))
      );
    } catch {
      console.error('Error', 'Could not toggle todo');
    }
  };

  return (
    <View style={styles.container}>
      <TodoInput value={newTitle} onChange={setNewTitle} onSubmit={handleAdd} />
      <WhiteSpace size="lg" />
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </List>
    </View>
  );
}
