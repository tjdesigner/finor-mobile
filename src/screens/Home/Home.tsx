import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackScreenProps } from '../../@types/navigation';
import theme from '../../global/styles/theme';
import { FabButton, FabButtonText } from './HomeStyles';
import { MaterialIcons } from '@expo/vector-icons'
import { testId } from './../../../e2e/testIds'

const { fabButtonAdd, fabButtonProfile } = testId.Home

const userMock = [
  { id: 1, name: 'Tiago', age: 39 }, { id: 2, name: 'Poliana', age: 34 }
]

export function Home({ navigation, route }: RootStackScreenProps<'Home'>) {

  const handleNavigation = () => {
    navigation.navigate('AddListForm', {
      users: userMock
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', letterSpacing: 1, marginBottom: 8 }}>Home</Text>
      <Text style={{ fontSize: 16, letterSpacing: 1 }}>Parametros</Text>
      <FabButton testID={fabButtonProfile} screenPosition='left' onPress={() => handleNavigation()}>
        <FabButtonText>
          <MaterialIcons name='person' size={theme.fontSizeNumber.medium} />
        </FabButtonText>
      </FabButton>
      <FabButton testID={fabButtonAdd} screenPosition='right' onPress={() => handleNavigation()}>
        <FabButtonText>
          <MaterialIcons name='add' size={theme.fontSizeNumber.medium} />
        </FabButtonText>
      </FabButton>
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