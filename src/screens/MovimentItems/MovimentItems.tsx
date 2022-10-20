import { IEntriesOutputs, IMoviment, RootStackScreenProps } from '../../@types/navigation';
import theme, { ContainerMainPage, ScrollMainPage } from '../../global/styles/theme';
import { ItemName, ItemContainer, Title } from './MovimentItemsStyles';
import { formatCurrency } from '../../utils';
import { StackPageTitle } from '../components';
import { Box } from '../components/box';
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ControlledInput } from './../components/controlledInput'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface ItemProps {
  id: string
  itemName: string
  price: number
}

const schema = yup.object({
  itemName: yup.string().required("Informe o nome do item").min(3, "Mínimo de 3 caracteres"),
  price: yup.number().required("Informe o preço do item").min(1).typeError("Somente números")
})

export function MovimentItems({ navigation, route }: RootStackScreenProps<'MovimentItems'>) {
  const { items, nameList, id } = route.params
  const listFilter = items.filter(el => el.id === id)
  const [moviments, setMoviments] = useState<IMoviment[]>(items)
  const [moviment, setMoviment] = useState<IMoviment>({ id: listFilter[0].id, nameList: listFilter[0].nameList, entries: listFilter[0].entries, outputs: listFilter[0].outputs })

  const { control: entriesControl, handleSubmit: handleEntriesSubmit, formState: { errors: errorsEntries }, reset: resetEntries } = useForm<ItemProps>({
    resolver: yupResolver(schema)
  })
  const { control: outputsControl, handleSubmit: handleOutputsSubmit, formState: { errors: errorOutputs }, reset: resetOutputs } = useForm<ItemProps>({
    resolver: yupResolver(schema)
  })

  const inputRef = useRef<TextInput>(null)

  const storeData = useCallback(async (value: IMoviment[]) => {
    getData()
    try {
      await AsyncStorage.setItem('@moviments_Key', JSON.stringify(value))
      getData()
    } catch (e) {
      console.log("ERROR", e);
    }
  }, [moviments])

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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData()
    });
    console.log('MMMMMM', moviments);

    return unsubscribe;

  }, [moviment])

  const newMoviments = [...moviments]

  const addEntries = useCallback(async (data: IEntriesOutputs) => {
    const newData = { ...data, price: Number(data.price), id: uuidv4() }
    moviment.entries.push(newData)
    storeData([...moviments])
    resetEntries(moviment)
  }, [])

  const addOutputs = useCallback(async (data: IEntriesOutputs) => {
    const newData = { ...data, price: Number(data.price), id: uuidv4() }
    moviment.outputs.push(newData)
    storeData(newMoviments)
    resetOutputs(moviment)
  }, [])

  const allEntries = listFilter[0].entries.map(e => e.price)
  const allOutputs = listFilter[0].outputs.map(e => e.price)

  const totalEntriesSum = allEntries.length ? allEntries.reduce((soma, i) => soma + i) : 0
  const totalOutputsSum = allOutputs.length ? allOutputs.reduce((soma, i) => soma + i) : 0
  const sumTotal = totalEntriesSum - totalOutputsSum

  return (
    <ContainerMainPage>
      <StackPageTitle title={nameList} />
      <Title>Total: <Text style={{ color: sumTotal >= 0 ? theme.colors.primaryStrong : 'red' }}>{formatCurrency.format(sumTotal)}</Text></Title>
      <Box style={{ flexDirection: 'row', alignItems: 'flex-start', marginVertical: theme.spacesNumber.small }}>
        <Box style={{ flexDirection: 'column' }}>
          <ControlledInput clearButtonMode='always' name="itemName" control={entriesControl} placeholder="entrada/nome" error={errorsEntries.itemName} />
          <ControlledInput clearButtonMode='always' name="price" control={entriesControl} placeholder="entrada/valor" error={errorsEntries.price} />
        </Box>
        <TouchableWithoutFeedback onPress={handleEntriesSubmit(addEntries)}><MaterialIcons name="add-circle" color={theme.colors.primary} size={theme.spacesNumber.large2} /></TouchableWithoutFeedback>
      </Box>

      <Box style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Box style={{ flexDirection: 'column' }}>
          <ControlledInput name="itemName" control={outputsControl} placeholder="saída/nome" error={errorOutputs.itemName} />
          <ControlledInput name="price" control={outputsControl} placeholder="saída/valor" error={errorOutputs.price} />
        </Box>
        <TouchableWithoutFeedback onPress={handleOutputsSubmit(addOutputs)}><MaterialIcons name="add-circle" color={theme.colors.primary} size={theme.spacesNumber.large2} /></TouchableWithoutFeedback>
      </Box>

      <ScrollMainPage>
        <Title>Entradas: <Text>{formatCurrency.format(totalEntriesSum)}</Text></Title>
        {listFilter.map(list => (
          list?.entries?.map((el, index) => (
            list?.entries ? (<ItemContainer key={index}>
              <ItemName key={index}>{el.itemName}</ItemName>
              <ItemName>{el.price && formatCurrency.format(el?.price)}</ItemName>
            </ItemContainer>) : <Title>NADA</Title>
          ))))
        }
        <Title>Saídas: <Text>{formatCurrency.format(totalOutputsSum)}</Text></Title>
        {listFilter.map((list) => (
          list?.outputs?.map((el, index) => (
            <ItemContainer key={index}>
              <ItemName>{el.itemName}</ItemName>
              <ItemName>{el.price && formatCurrency.format(el?.price)}</ItemName>
            </ItemContainer>
          ))
        ))}
        <View style={{ marginBottom: theme.spacesNumber.xxxLarge }} />
      </ScrollMainPage >
    </ContainerMainPage>
  );
}