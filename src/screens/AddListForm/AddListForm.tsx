import { RootStackScreenProps } from '../../@types/navigation';
import { ContainerMainPage } from '../../global/styles/theme';
import customData from '../../data/mock.json';
import { ListItemButton, ListItemButtonText } from './AddListFormStyles';
import { StackPageTitle, TabBarPageTitle } from '../components';
import React from 'react';
import { Box } from '../components/box';
import { Text } from 'react-native';

export function AddListForm({ navigation, route }: RootStackScreenProps<'AddListForm'>) {

  function handleListView(id: number, nameList: string) {
    const filterDataForId = customData.filter(x => x.id === id).map(x => x);
    navigation.navigate('MovimentItems', {
      listItems: filterDataForId,
      nameList,
    })
  }

  return (
    <ContainerMainPage>
      <StackPageTitle title='Add List' />
      <Box backgroundColor='red' margin={0} padding={16} borderRadius={5} borderWidth={1}>
        <Text>Tiago</Text>
      </Box>
    </ContainerMainPage>
  );
}