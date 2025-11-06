import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './App.styles';
import { AppHeader } from './src/components/AppHeader/AppHeader';
import TodoList from './src/screens/TodoList/TodoList';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
      <AppHeader />
      <TodoList />
      </ScrollView>
    </View>
  );
}
