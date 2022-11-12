/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { ParamListBase } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ReactNode } from "react"

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

/**
 * Types Route Params Profile
 */
type UserList = {
  id?: number
  name?: string
  age?: number
}

/**
 * Types Route Params Moviments ********************
 */
export interface IMoviment {
  id: string
  nameList: string
  listBalance?: number
  entries: IEntriesOutputs[]
  outputs: IEntriesOutputs[]
}

export interface IEntriesOutputs {
  id?: string
  itemName: string
  price: number
}
/****************************************************/
interface RootStackParamList extends ParamListBase {
  Home: undefined

  Profile: {
    users?: UserList[]
  }

  AddListForm

  Moviments: undefined

  MovimentItems: {
    items: IMoviment[]
    nameList: string
    id: string
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>
