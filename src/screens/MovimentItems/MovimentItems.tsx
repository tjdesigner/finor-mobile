import { RootStackScreenProps } from '../../@types/navigation';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import { ItemName, ItemContainer, Title } from './MovimentItemsStyles';
import { formatCurrency } from '../../utils';
import { StackPageTitle } from '../components';
import { Box } from '../components/box';

export function MovimentItems({ navigation, route }: RootStackScreenProps<'MovimentItems'>) {
  const { listItems, nameList } = route.params

  return (
    <ContainerMainPage>
      <StackPageTitle title={nameList} />
      <Box marginBottom={theme.spacesNumber.large}>
        <Title>Entries</Title>
        {listItems.map(list => (
          list.items?.entries?.map((el, index) => (
            <ItemContainer key={index}>
              <ItemName>{el.itemName}</ItemName>
              <ItemName>{el.price && formatCurrency.format(el?.price)}</ItemName>
            </ItemContainer>
          ))))
        }
      </Box>
      <Title>Outputs</Title>
      {listItems.map((list) => (
        list.items?.outputs?.map((el, index) => (
          <ItemContainer key={index}>
            <ItemName>{el.itemName}</ItemName>
            <ItemName>{el.price && formatCurrency.format(el?.price)}</ItemName>
          </ItemContainer>
        ))))}
    </ContainerMainPage >
  );
}