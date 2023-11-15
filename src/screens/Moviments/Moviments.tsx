import { RootStackScreenProps } from '../../@types/navigation';
import { ContainerMainPage, ScrollMainPage, ScrollMainPageTabbar } from '../../global/styles/theme';
import { ListItemButton, ListItemButtonText } from './MovimentsStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { IMoviment } from '../AddListForm/AddListForm.types';
import { Text } from 'react-native'
import { TabBarPageTitle } from '../../components';

export function Moviments({ navigation, route }: RootStackScreenProps<'Moviments'>) {
  const [moviments, setMoviments] = useState<IMoviment[]>([])

  function handleListView(id: string, nameList: string) {
    const filterDataForId = moviments.filter(x => x.id === id).map(x => x);
    navigation.navigate('MovimentItems', {
      items: moviments,
      nameList,
      id,
    })
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

  const removeItem = async (id: string) => {
    try {
      const value = await AsyncStorage.getItem('@moviments_Key')

      let usersArray = value && JSON.parse(value);
      const alteredUsers = usersArray.filter(function (e: { id: string }) {
        return e.id !== id
      })
      await AsyncStorage.setItem('@moviments_Key', JSON.stringify(alteredUsers));
      setMoviments(alteredUsers)
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData()
    });
    return unsubscribe;
  }, [moviments])

  return (
    <ScrollMainPageTabbar withPadding={true}>
      <TabBarPageTitle title='My lists' />
      {moviments.length > 0 ? moviments?.map(list => (
        <ListItemButton key={list.id} onLongPress={() => removeItem(list.id)} onPress={() => handleListView(list.id, list.nameList)}>
          <ListItemButtonText>{list.nameList}</ListItemButtonText>
        </ListItemButton>
      )) : <Text>Empty</Text>
      }
    </ScrollMainPageTabbar >
  );
}