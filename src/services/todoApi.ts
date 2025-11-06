import axios from 'axios';
import { Todo } from '../interfaces/todo';

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await axios.get<{ todos: Todo[] }>(process.env.EXPO_PUBLIC_API_URL);
  return res.data.todos;
};

export const addTodo = async (title: string): Promise<Todo> => {
  const res = await axios.post<Todo>(process.env.EXPO_PUBLIC_API_URL, { title });
  return res.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/${id}`);
};

export const toggleTodo = async (id: string): Promise<void> => {
  await axios.patch(`${process.env.EXPO_PUBLIC_API_URL}/${id}/toggle`);
};

export const editTodo = async (id: string, title: string): Promise<void> => {
  await axios.put(`${process.env.EXPO_PUBLIC_API_URL}/${id}`, { title });
};
