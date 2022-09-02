import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackScreenProps, RootStackParamList } from '../../@types/navigation';
import theme from '../../global/styles/theme';

const userMock = [
  { id: 1, name: 'Tiago', age: 39 }, { id: 2, name: 'Poliana', age: 34 }
]

export function Home({ navigation, route }: RootStackScreenProps<'Home'>) {

  const handleNavigation = () => {
    navigation.navigate('Profile', {
      users: [...userMock]
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', letterSpacing: 1, marginBottom: 8 }}>Home</Text>
      <Text style={{ fontSize: 16, letterSpacing: 1 }}>Parametros</Text>
      <Button title='Profile' onPress={() => handleNavigation()} />
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