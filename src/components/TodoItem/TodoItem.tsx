import React, { useState } from 'react';
import { View, TextInput, Modal } from 'react-native';
import { Button, List, Text } from '@ant-design/react-native';
import { Todo } from '../../interfaces/todo';
import { styles } from './TodoItem.styles';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(todo.title);

  return (
    <>
      <List.Item>
        <View style={styles.container}>
          <Text style={styles.todoText}>{todo.title}</Text>

          <View style={styles.buttonsGroup}>
            <Button
              size="small"
              type={todo.isCompleted ? 'primary' : 'ghost'}
              style={[styles.button, todo.isCompleted && styles.undoButton]}
              onPress={() => onToggle(todo._id)}
            >
              {todo.isCompleted ? 'Undo' : 'Done'}
            </Button>
            <Button
              size="small"
              type="primary"
              style={styles.button}
              onPress={() => setIsEditing(true)}
            >
              Edit
            </Button>
            <Button
              size="small"
              type="warning"
              style={styles.button}
              onPress={() => onDelete(todo._id)}
            >
              Delete
            </Button>
          </View>
        </View>
      </List.Item>

      <Modal
        visible={isEditing}
        transparent
        animationType="slide"
        onRequestClose={() => setIsEditing(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              value={draftTitle}
              onChangeText={setDraftTitle}
              style={styles.input}
              autoFocus
            />
            <Button
              type="primary"
              onPress={() => {
                if (draftTitle.trim() !== '') {
                  onEdit(todo._id, draftTitle);
                }
                setIsEditing(false);
              }}
              style={{ marginBottom: 10 }}
            >
              Save
            </Button>
            <Button type="ghost" onPress={() => setIsEditing(false)}>
              Cancel
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};
