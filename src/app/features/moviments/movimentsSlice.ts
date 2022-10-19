import AsyncStorage from "@react-native-async-storage/async-storage"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IMoviment {
  id: string
  nameList: string
  items?: IEntriesOutputsList
}

interface IEntriesOutputsList {
  entries: IEntriesOutputs[]
  outputs: IEntriesOutputs[]
}

interface IEntriesOutputs {
  itemName: string
  price: number
}

interface IMovimentsList {
  value: IMoviment[]
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@moviments_Key")
    if (value) {
      const dataParse = JSON.parse(value)
      return value !== null ? dataParse : null
    }
  } catch (e) {
    console.log(e)
  }
}

export const movimentsSlice = createSlice({
  name: "moviments",
  initialState: getData,
  reducers: {
    addMoviment: (state, action: PayloadAction<IMoviment>) => {
      state.then((res) => res.value)
    },
  },
})

export const { addMoviment } = movimentsSlice.actions

export default movimentsSlice.reducer
