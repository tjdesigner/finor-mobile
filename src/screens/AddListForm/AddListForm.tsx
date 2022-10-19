import { RootStackScreenProps } from '../../@types/navigation';
import { ContainerMainPage } from '../../global/styles/theme';
import customData from '../../data/mock.json';
import { StackPageTitle } from '../components';
import React, { useEffect, useState } from 'react';
import { Box } from '../components/box';
import { Button, Text, TextInput } from 'react-native';
import { IMoviment } from './AddListForm.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';


export function AddListForm({ navigation, route }: RootStackScreenProps<'AddListForm'>) {

  const [moviments, setMoviments] = useState<IMoviment[]>([])
  const [moviment, setMoviment] = useState<IMoviment>({ id: '', nameList: '', entries: [], outputs: [] })

  const storeData = async (value: IMoviment[]) => {
    try {
      setMoviments(value)
      console.log(moviments);

      const dataFilter = (id: string) => moviments.filter(el => el.id === id)
      if (dataFilter(moviment.id).length === 0 && moviment.nameList.length > 4) {
        await AsyncStorage.setItem('@moviments_Key', JSON.stringify(value))
        navigation.navigate('Moviments')
      }
      getData()
    } catch (e) {
      console.log("CERTO", e);
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@moviments_Key')
      if (value) {
        const dataParse = JSON.parse(value)
        setMoviments(dataParse)
        return value !== null ? dataParse : null
      }
    } catch (e) {
      console.log(e)
    }
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
      getData()
    } catch (e) {
      console.log(e);
      console.log('Done.')
    }
  }

  useEffect(() => {

    getData()
    console.log(moviment)

  }, [])

  return (
    <ContainerMainPage>
      <StackPageTitle title='Add List' />
      <Box backgroundColor='red' margin={0} padding={16} borderRadius={5} borderWidth={1}>
        <TextInput onChangeText={(value) => setMoviment({ id: uuidv4(), nameList: value, entries: [], outputs: [] })} />
      </Box>
      <Button title='SETDATA' onPress={() => storeData([...moviments, { id: moviment.id, nameList: moviment.nameList, entries: [], outputs: [] }])} />
      <Button title='CLEAR' onPress={clearAll} />
      {moviments.map((item, index) =>
        <Text key={index} style={{ color: 'blue', fontSize: 20 }}>
          {item.nameList}
        </Text>
      )}
    </ContainerMainPage >
  );
}