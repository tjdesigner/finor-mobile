import { IEntriesOutputs, IMoviment, RootStackScreenProps } from '../../@types/navigation';
import theme, { ContainerMainPage, ScrollMainPage } from '../../global/styles/theme';
import { ItemName, ItemContainer, Title, ChevronDown, ChevronUp } from './MovimentItemsStyles';
import { formatCurrency } from '../../utils';
import { StackPageTitle } from '../components';
import { Box } from '../components/box';
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput, View, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';
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

const tabsType = ['Entries', 'Outputs'];

export function MovimentItems({ navigation, route }: RootStackScreenProps<'MovimentItems'>) {
  const { items, nameList, id } = route.params
  const [activeTab, setActiveTab] = useState(tabsType[0]);
  const [visible, setVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const listFilter = items.filter(el => el.id === id)
  const [moviments, setMoviments] = useState<IMoviment[]>(items)
  const [moviment, setMoviment] = useState<IMoviment>({ id: listFilter[0].id, listBalance: listFilter[0].listBalance, nameList: listFilter[0].nameList, entries: listFilter[0].entries, outputs: listFilter[0].outputs })

  const { colors, fontSize, fontSizeNumber, fonts, spaces, spacesNumber } = theme

  const { control: entriesControl, handleSubmit: handleEntriesSubmit, formState: { errors: errorsEntries }, reset: resetEntries } = useForm<ItemProps>({
    resolver: yupResolver(schema)
  })
  const { control: outputsControl, handleSubmit: handleOutputsSubmit, formState: { errors: errorOutputs }, reset: resetOutputs } = useForm<ItemProps>({
    resolver: yupResolver(schema)
  })

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

  const removeItemEntries = useCallback(async (id: string, idItemEntries: string) => {
    try {
      const data = await getData()
      const alteredEntries = data.filter(function (e: { id: string }) {
        return e.id === id
      })
      setMoviments(data.filter((e: IMoviment) => e.id !== alteredEntries[0].id))
      let alteredEntriesItems = alteredEntries[0].entries.filter(function (e: { id: string }) {
        return e.id !== idItemEntries
      })
      await AsyncStorage.setItem('@moviments_Key', JSON.stringify([...data.filter((e: IMoviment) => e.id !== alteredEntries[0].id), { ...moviment, entries: alteredEntriesItems }]));

      await getData()

      console.log('===================', moviments);


    }
    catch (error) {
      console.log(error)
    }
  }, [moviments]);

  const removeItemOutputs = useCallback(async (id: string, idItemOutputs: string) => {
    try {
      const data = await getData()

      //console.log('DATA==', data);

      const alteredOutputs = data.filter(function (e: { id: string }) {
        return e.id === id
      })

      setMoviments(data.filter((e: IMoviment) => e.id !== alteredOutputs[0].id))

      const othersList = data.filter((e: IMoviment) => e.id !== alteredOutputs[0].id)

      const alteredOutputsItems = alteredOutputs[0].outputs.filter(function (e: { id: string }) {
        return e.id !== idItemOutputs
      })

      //const newWWW = await othersList.concat(alteredEntries.splice(1, 0))

      console.log('xxxxxxxxxx', othersList.concat(alteredOutputsItems))

      setMoviments(othersList.concat(alteredOutputsItems))
      //console.log('========', newWWW.concat(alteredEntriesItems));
      //console.log('zzzzzzzz', newWWW);

      //console.log('Nova lista de Entradas', alteredEntriesItems);
      //console.log('ID', idItemEntries);

      await storeData([{ ...moviment, outputs: alteredOutputsItems }])
      setMoviments([{ ...moviment, outputs: alteredOutputsItems }])

      // await AsyncStorage.setItem('@moviments_Key', JSON.stringify(alteredUsers));
      // setMoviments(alteredUsers)
    }
    catch (error) {
      console.log(error)
    }
  }, [moviments]);

  const addEntries = useCallback(async (data: IEntriesOutputs) => {
    const newData = { ...data, price: Number(data.price), id: uuidv4() }
    console.log(newData)
    moviment.entries.push(newData)
    storeData([...moviments])
    resetEntries(moviment)
  }, [])

  const addOutputs = useCallback(async (data: IEntriesOutputs) => {
    const newData = { ...data, price: Number(data.price), id: uuidv4() }
    moviment.outputs.push(newData)
    storeData([...moviments])
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
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Box paddingTop={spacesNumber.default} flexDirection='row' alignItems='center' justifyContent='space-between'>
          <Box backgroundColor={!visible ? colors.light : 'transparent'} style={{ height: spacesNumber.medium, borderRadius: spacesNumber.xs, width: Dimensions.get('window').width - spacesNumber.largestOfAll }}>
            {visible && <Text style={{ color: sumTotal >= 0 ? colors.black : colors.danger, fontWeight: '600', fontSize: fontSizeNumber.medium }}>Saldo: {formatCurrency.format(sumTotal)}</Text>}
          </Box>
          {visible ?
            <MaterialIcons
              name="visibility"
              color={colors.primary}
              size={spacesNumber.medium} />
            :
            <MaterialIcons
              name="visibility-off"
              color={colors.primary}
              size={spacesNumber.medium} />
          }
        </Box>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setShowForm(!showForm)} style={{ alignSelf: 'center', marginVertical: spacesNumber.default }}>
        <Box style={{ height: 38, backgroundColor: colors.light, justifyContent: 'center', borderRadius: 38, }} paddingVertical={4} marginVertical={spacesNumber.default} flexDirection='row' alignItems='center' justifyContent='center' paddingLeft={12}>
          <Text style={{ color: colors.grey, fontSize: fontSizeNumber.default, fontWeight: '500' }}>Novo Registro</Text>
          {showForm ?
            <ChevronUp
              name="chevron-left"
              color={colors.primary}
              size={spacesNumber.large2} />
            :
            <ChevronDown
              name="chevron-left"
              color={colors.primary}
              size={spacesNumber.large2} />
          }
        </Box>
      </TouchableOpacity>

      {
        showForm && <Box>
          {activeTab === 'Entries' && <Box >
            <Box flexDirection='column'>
              <ControlledInput
                clearButtonMode='always'
                name="itemName"
                control={entriesControl}
                placeholder="Nome da entrada"
                error={errorsEntries.itemName} />

              <ControlledInput
                clearButtonMode='always'
                name="price"
                control={entriesControl}
                placeholder="valor"
                error={errorsEntries.price} />
            </Box>

            <TouchableOpacity style={{ marginBottom: spacesNumber.large, backgroundColor: colors.primaryStrong, alignSelf: 'stretch', alignItems: 'center', padding: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'center' }}
              onPress={handleEntriesSubmit(addEntries)}>
              <Text style={{ paddingRight: 16, fontSize: 16, color: 'white' }}>Adicionar</Text>
              <MaterialIcons
                name="add-circle"
                color={colors.primary}
                size={spacesNumber.large} />
            </TouchableOpacity>
          </Box>}

          {activeTab === 'Outputs' && <Box>
            <Box flexDirection='column'>
              <ControlledInput
                name="itemName"
                control={outputsControl}
                placeholder="Nome da saída"
                error={errorOutputs.itemName}
              />
              <ControlledInput
                name="price"
                control={outputsControl}
                placeholder="valor"
                error={errorOutputs.price}
              />
            </Box>
            <TouchableOpacity style={{ marginBottom: spacesNumber.large, backgroundColor: colors.primaryStrong, alignSelf: 'stretch', alignItems: 'center', padding: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'center' }}
              onPress={handleOutputsSubmit(addOutputs)}>
              <Text style={{ paddingRight: 16, fontSize: 16, color: 'white' }}>Adicionar</Text>
              <MaterialIcons
                name="add-circle"
                color={colors.primary}
                size={spacesNumber.large} />
            </TouchableOpacity>
          </Box>}
        </Box>
      }

      <Box padding={2} borderRadius={100} borderWidth={1} borderColor={colors.primary} flexDirection='row' justifyContent='space-around' >
        <TouchableOpacity
          style={{
            flex: 1,
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: activeTab === 'Entries' ? colors.primary : 'transparent',
            padding: 8,
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
          }} onPress={() => setActiveTab('Entries')}>
          <Text style={{ color: activeTab === 'Entries' ? 'white' : colors.primaryStrong }}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: activeTab === 'Outputs' ? colors.primary : 'transparent',
            padding: 8,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
          }} onPress={() => setActiveTab('Outputs')}>
          <Text style={{ color: activeTab === 'Outputs' ? 'white' : colors.primaryStrong }}>Saídas</Text>
        </TouchableOpacity>
      </Box>


      <>
        {activeTab === 'Entries' ?
          <Box marginTop={spacesNumber.large} backgroundColor={!visible ? colors.light : 'transparent'} style={{ height: spacesNumber.medium, borderRadius: spacesNumber.xs, width: Dimensions.get('window').width - spacesNumber.large }}>
            <Text style={{ fontWeight: '500', fontSize: fontSizeNumber.default, color: visible ? colors.grey : 'transparent' }}>Entradas: {formatCurrency.format(totalEntriesSum)}</Text>
          </Box> :
          <Box marginTop={spacesNumber.large} backgroundColor={!visible ? colors.light : 'transparent'} style={{ height: spacesNumber.medium, borderRadius: spacesNumber.xs, width: Dimensions.get('window').width - spacesNumber.large }}>
            <Text style={{ fontWeight: '500', fontSize: fontSizeNumber.default, color: visible ? colors.grey : 'transparent' }}>Saídas: {formatCurrency.format(totalOutputsSum)}</Text>
          </Box>}
      </>


      <ScrollMainPage withPadding={false}>
        {activeTab === 'Entries' &&
          <>
            {listFilter.map(list => (
              list?.entries?.map((el, index) => (
                list?.entries ? (
                  <ItemContainer onLongPress={() => el?.id && removeItemEntries(id, el?.id)} key={index}>
                    <ItemName key={index}>{el.itemName}</ItemName>
                    <ItemName>{el.price && formatCurrency.format(el?.price)}</ItemName>
                  </ItemContainer>
                ) : <Title>NADA</Title>
              ))))
            }
          </>
        }
        {activeTab === 'Outputs' &&
          <>
            {listFilter.map((list) => (
              list?.outputs?.map((el, index) => (
                <ItemContainer onLongPress={() => el?.id && removeItemOutputs(id, el?.id)} key={index}>
                  <ItemName>{el.itemName}</ItemName>
                  <ItemName>{el.price && formatCurrency.format(el?.price)}</ItemName>
                </ItemContainer>
              ))
            ))}
          </>
        }
        <View style={{ marginBottom: spacesNumber.xxxLarge }} />
      </ScrollMainPage >
    </ContainerMainPage >
  );
}