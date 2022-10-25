import { RootStackScreenProps } from '../../@types/navigation';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import customData from '../../data/mock.json';
import { StackPageTitle } from '../components';
import React, { useEffect, useState } from 'react';
import { Box } from '../components/box';
import { Alert, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import { IMoviment } from './AddListForm.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';


export function AddListForm({ navigation, route }: RootStackScreenProps<'AddListForm'>) {
  const [moviments, setMoviments] = useState<IMoviment[]>([])
  const [moviment, setMoviment] = useState<IMoviment>({ listBalance: 0, id: '', nameList: '', entries: [], outputs: [] })

  const storeData = async (value: IMoviment[]) => {
    try {
      setMoviments(value)
      const dataFilter = (id: string) => moviments.filter(el => el.id === id)
      if (dataFilter(moviment.id).length === 0 && moviment.nameList.length > 2) {
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

  const clearAll = async (value = []) => {
    try {
      setMoviments(value)
      await AsyncStorage.setItem('@moviments_Key', JSON.stringify(value))
      navigation.navigate('Moviments')
      getData()
    } catch (e) {
      console.log("CERTO", e);
    }
  }


  const feedbackAlert = () => {
    Alert.alert(
      'Essa ação apagará todos os dados!',
      'Você tem certeza disso?',
      [
        { text: 'Depois', onPress: () => console.log('Cancel Pressed!') },
        { text: 'Apagar tudo', onPress: () => clearAll() },
      ],
      { cancelable: false }
    )
  }

  useEffect(() => {
    getData()
  }, [moviments])

  return (
    <ContainerMainPage>
      <StackPageTitle title='Add List' />
      <TextInput placeholder='Nome da Lista' style={{ borderWidth: 1, padding: 16, borderRadius: 4, marginBottom: 16 }} onChangeText={(value) => setMoviment({ listBalance: moviment.listBalance, id: uuidv4(), nameList: value, entries: [], outputs: [] })} />
      <TouchableOpacity style={{ backgroundColor: theme.colors.primaryStrong, padding: 16, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }} onPress={() => storeData([...moviments, { listBalance: moviment.listBalance, id: moviment.id, nameList: moviment.nameList, entries: [], outputs: [] }])}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Adicionar lista</Text>
      </TouchableOpacity>
      <Button title='Limpar todos os dados' onPress={feedbackAlert} />
    </ContainerMainPage >
  );
}