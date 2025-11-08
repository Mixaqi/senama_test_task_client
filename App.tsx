import React from 'react';
import { ScrollView } from 'react-native';
import { AppHeader } from './src/components/AppHeader/AppHeader';
import TodoList from './src/screens/TodoList/TodoList';
import { styles } from './App.styles';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <AppHeader />
      <TodoList />
    </ScrollView>
  );
}
