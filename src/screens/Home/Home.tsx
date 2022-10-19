import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackScreenProps } from '../../@types/navigation';
import theme from '../../global/styles/theme';
import { FabButton, FabButtonText } from './HomeStyles';
import { MaterialIcons } from '@expo/vector-icons'
import { testId } from './../../../e2e/testIds'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMoviment } from '../AddListForm/AddListForm.types';
import data from './../../data/mock.json'

const { fabButtonAdd, fabButtonProfile } = testId.Home

const userMock = [
  { id: 1, name: 'Tiago', age: 39 }, { id: 2, name: 'Poliana', age: 34 }
]

export function Home({ navigation, route }: RootStackScreenProps<'Home'>) {
  const [moviments, setMoviments] = useState<IMoviment[]>([])

  const handleNavigation = () => {
    navigation.navigate('AddListForm', {
      users: userMock
    })
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@moviments_Key')

      if (value) {
        const dataParse = await JSON.parse(value)
        return value !== null ? setMoviments(dataParse) : null
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData()
    });
    console.log('==========', moviments);
    return unsubscribe;
  }, [moviments])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', letterSpacing: 1, marginBottom: 8 }}>Home</Text>
      {data?.map((item, index) => item.items?.entries.map(e => (
        <View key={index}>
          <Text style={{ fontSize: 16, letterSpacing: 1 }}>{e.itemName}</Text>
          <Text style={{ fontSize: 16, letterSpacing: 1 }}>{e.price}</Text>
        </View>
      )))}
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