import React, { useCallback, useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { RootStackScreenProps } from '../../@types/navigation';
import theme, { ScrollMainPageTabbar } from '../../global/styles/theme';
import { FabButton, FabButtonText } from './HomeStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { testId } from './../../../e2e/testIds'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMoviment } from '../AddListForm/AddListForm.types';
import data from './../../data/mock.json'
import { formatCurrency } from '../../utils';
import { Box } from '../../components/box';
import IllustrationSVG from '../../assets/svgs/Illustration';

const { fabButtonAdd } = testId.Home

const userMock = [
  { id: 1, name: 'Tiago', age: 39 }, { id: 2, name: 'Poliana', age: 34 }
]

export function Home({ navigation, route }: RootStackScreenProps<'Home'>) {
  const [moviments, setMoviments] = useState<IMoviment[]>([])
  const [loading, setloading] = useState(true)

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName, {
      users: userMock
    })
  }

  const getData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('@moviments_Key')
      setloading(false)
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
    <>
      {loading ?
        <Box flex={1} backgroundColor={theme.colors.white} justifyContent="center" alignItems='center' borderRadius={theme.spacesNumber.large}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </Box> : (
          <ScrollMainPageTabbar >
            <IllustrationSVG color='red' size={20} />
            <Box justifyContent='center' alignItems='center'>
              {<Box backgroundColor={sumGeneral >= 1 ? theme.colors.primaryStrong : theme.colors.danger} style={{ height: 100, alignSelf: 'stretch', borderRadius: theme.spacesNumber.medium, justifyContent: 'center', alignItems: 'center' }} marginHorizontal={16} marginBottom={16}>
                <Text style={{ fontSize: theme.fontSizeNumber.default, letterSpacing: 1, color: theme.colors.white, marginBottom: theme.spacesNumber.small }}>Saldo Total </Text>
                <Text style={{ fontSize: theme.fontSizeNumber.medium, letterSpacing: 1, color: theme.colors.white, fontWeight: "bold" }}>{formatCurrency.format(sumGeneral)}</Text>
              </Box>}
              <Box backgroundColor={theme.colors.primary} style={{ height: 100, alignSelf: 'stretch', borderRadius: theme.spacesNumber.medium, justifyContent: 'center', alignItems: 'center' }} marginBottom={16} marginHorizontal={16}>
                <Text style={{ fontSize: theme.fontSizeNumber.default, letterSpacing: 1, color: theme.colors.white, marginBottom: theme.spacesNumber.small }}>Total Entradas</Text>
                <Text style={{ fontSize: theme.fontSizeNumber.medium, letterSpacing: 1, color: theme.colors.white, fontWeight: "bold" }}>{formatCurrency.format(totalAllEntries)}</Text>
              </Box>
              <Box backgroundColor={theme.colors.grey} style={{ height: 100, alignSelf: 'stretch', borderRadius: theme.spacesNumber.medium, justifyContent: 'center', alignItems: 'center' }} marginBottom={16} marginHorizontal={16}>
                <Text style={{ fontSize: theme.fontSizeNumber.default, letterSpacing: 1, color: theme.colors.white, marginBottom: theme.spacesNumber.small }}>Total Saídas:</Text>
                <Text style={{ fontSize: theme.fontSizeNumber.medium, letterSpacing: 1, color: theme.colors.white, fontWeight: "bold" }}>{formatCurrency.format(totalAllOutputs)}</Text>
              </Box>
            </Box>
          </ScrollMainPageTabbar>
        )
      }
      <FabButton testID={fabButtonAdd} screenPosition='right' onPress={() => handleNavigation('AddListForm')}>
        <FabButtonText>
          <MaterialIcons name='add' size={theme.fontSizeNumber.medium} />
        </FabButtonText>
      </FabButton>
    </>
  );
}
