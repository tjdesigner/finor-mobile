import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '../../@types/navigation';
import theme from '../../global/styles/theme';

export function Moviments({ navigation, route }: RootStackScreenProps<'Moviments'>) {
  const { params } = route

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', letterSpacing: 1, marginBottom: 8 }}>{route.name}</Text>
      {params?.users?.map(user => (
        <Text key={user.id} style={{ fontSize: 16, letterSpacing: 1 }}>{user.name} {`tem ${user.age} anos`}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
});