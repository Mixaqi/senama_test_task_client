import { Button, List, Input } from '@ant-design/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Todo } from '../../interfaces/todo';

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
    <List.Item
      key={todo._id}
      extra={
        <View style={{ flexDirection: 'row', pointerEvents: 'auto' }}>
          <Button
            size="small"
            type="ghost"
            onPress={() => onToggle(todo._id)}
            style={{ marginRight: 6 }}
          >
            {todo.isCompleted ? 'Undo' : 'Done'}
          </Button>

          {isEditing ? (
            <>
              <Input value={draftTitle} onChangeText={setDraftTitle} />
              <Button
                size="small"
                type="primary"
                onPress={() => {
                  if (draftTitle.trim() !== '') {
                    onEdit(todo._id, draftTitle);
                  }
                  setIsEditing(false);
                }}
                style={{ marginRight: 6 }}
              >
                Save
              </Button>
              <Button
                size="small"
                type="warning"
                onPress={() => {
                  setDraftTitle(todo.title);
                  setIsEditing(false);
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              size="small"
              type="primary"
              onPress={() => setIsEditing(true)}
              style={{ marginRight: 6 }}
            >
              Edit
            </Button>
          )}

          <Button size="small" type="warning" onPress={() => onDelete(todo._id)}>
            Delete
          </Button>
        </View>
      }
    >
      {isEditing ? null : todo.title}
    </List.Item>
  );
};
