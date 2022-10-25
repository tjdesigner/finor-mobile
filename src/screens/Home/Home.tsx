import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackScreenProps } from '../../@types/navigation';
import theme from '../../global/styles/theme';
import { FabButton, FabButtonText } from './HomeStyles';
import { MaterialIcons } from '@expo/vector-icons'
import { testId } from './../../../e2e/testIds'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMoviment } from '../AddListForm/AddListForm.types';
import data from './../../data/mock.json'
import { formatCurrency } from '../../utils';

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

  const getData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('@moviments_Key')

      if (value) {
        const dataParse = await JSON.parse(value)
        return value !== null ? setMoviments(dataParse) : null
      }
    } catch (e) {
      console.log(e)
    }
  }, [moviments])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData()
      setMoviments([...moviments])
    });
    return unsubscribe;
  }, [moviments])

  const totalEntries = moviments?.map((item) => item?.entries.map(e => e.price))
  const totalUniqueListEntries = totalEntries?.map(e => e.length && e.concat().reduce((sum, e) => sum + e))
  const totalAllEntries = totalUniqueListEntries.length && totalUniqueListEntries.reduce((sum, e) => sum + e)

  const totalOutputs = moviments?.map((item) => item?.outputs.map(e => e.price))
  const totalUniqueListOtputs = totalOutputs?.map(e => e.length && e.concat().reduce((sum, e) => sum + e))
  const totalAllOutputs = totalUniqueListOtputs.length && totalUniqueListOtputs.reduce((sum, e) => sum + e)

  const sumGeneral = totalAllEntries - totalAllOutputs

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', letterSpacing: 1, marginBottom: 8 }}>Saldo</Text>
      <Text style={{ fontSize: 16, letterSpacing: 1 }}>Total Entries: {formatCurrency.format(totalAllEntries)}</Text>
      <Text style={{ fontSize: 16, letterSpacing: 1 }}>Total Outputs: {formatCurrency.format(totalAllOutputs)}</Text>
      <Text style={{ fontSize: 16, letterSpacing: 1, color: sumGeneral >= 1 ? theme.colors.black : theme.colors.danger }}>Saldo Total: {formatCurrency.format(sumGeneral)}</Text>
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
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
});