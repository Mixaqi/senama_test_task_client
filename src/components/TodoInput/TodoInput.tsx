import React from 'react';
import { View } from 'react-native';
import { Button, Input } from '@ant-design/react-native';

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
}

export const TodoInput: React.FC<Props> = ({ value, onChange, onSubmit }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    }}
  >
    <Input
      value={value}
      onChangeText={onChange}
      style={{
        flex: 1,
        marginRight: 6,
        borderRadius: 8,
        paddingHorizontal: 2,
        backgroundColor: 'white',
        height: '80%',
      }}
    />
    <Button
      type="primary"
      onPress={onSubmit}
      style={{
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        height: '80%',
      }}
    >
      Add
    </Button>
  </View>
);
