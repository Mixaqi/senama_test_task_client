import React from 'react';
import { View } from 'react-native';
import { Button } from '@ant-design/react-native';
import { TextInput } from 'react-native';
import styles from './TodoInput.styles';

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
}

export const TodoInput: React.FC<Props> = ({ value, onChange, onSubmit }) => (
  <View style={styles.container}>
    <TextInput value={value} onChangeText={onChange} style={styles.input} />
    <Button type="primary" onPress={onSubmit} style={styles.button}>
      Add
    </Button>
  </View>
);

export default TodoInput;
