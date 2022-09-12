import { RootStackScreenProps } from '../../@types/navigation';
import { ContainerMainPage } from '../../global/styles/theme';
import customData from '../../data/mock.json';
import { ListItemButton, ListItemButtonText } from './MovimentsStyles';
import { TabBarPageTitle } from '../components';

export function Moviments({ navigation, route }: RootStackScreenProps<'Moviments'>) {

  function handleListView(id: number, nameList: string) {
    const filterDataForId = customData.filter(x => x.id === id).map(x => x);
    navigation.navigate('MovimentItems', {
      listItems: filterDataForId,
      nameList,
    })
  }

  return (
    <ContainerMainPage>
      <TabBarPageTitle title='My lists' />
      {customData?.map(list => (
        <ListItemButton key={list.id} onPress={() => handleListView(list.id, list.nameList)}>
          <ListItemButtonText>{list.nameList}</ListItemButtonText>
        </ListItemButton>
      ))}
    </ContainerMainPage>
  );
}