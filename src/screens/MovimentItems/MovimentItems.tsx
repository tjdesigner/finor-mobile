import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../../@types/navigation';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import customData from '../../data/mock.json';
import { ItemName, ItemContainer, Title } from './MovimentItemsStyles';
import { formatCurrency } from '../../utils';

export function MovimentItems({ navigation, route }: RootStackScreenProps<'MovimentItems'>) {
  const { listItems } = route.params

  return (
    <ContainerMainPage>
      <Title>Entries</Title>
      {listItems.map(list => (
        list.items?.entries?.map((el, index) => (
          <ItemContainer key={list.id}>
            <ItemName>{el.itemName}</ItemName>
            <ItemName>{el.price && formatCurrency.format(el?.price)}</ItemName>
          </ItemContainer>
        ))))
      }
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