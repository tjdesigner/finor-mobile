import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../../@types/navigation';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import customData from '../../data/mock.json';
import { ListItemButton } from './MovimentsStyles';

export function Moviments({ navigation, route }: RootStackScreenProps<'Moviments'>) {

  function handleListView(id: number) {
    const filterDataForId = customData.filter(x => x.id === id).map(x => x);
    navigation.navigate('MovimentItems', {
      listItems: filterDataForId
    })
  }

  return (
    <ContainerMainPage>
      {customData?.map(list => (
        <ListItemButton key={list.id} onPress={() => handleListView(list.id)}>
          <Text>{list.nameList}</Text>
        </ListItemButton>
      ))}
    </ContainerMainPage>
  );
}