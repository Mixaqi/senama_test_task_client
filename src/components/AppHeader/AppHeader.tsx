import React from 'react';
import { View } from 'react-native';
import { Text } from '@ant-design/react-native';
import { styles } from './AppHeader.styles';


export const AppHeader: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO LIST</Text>
    </View>
  );
};
