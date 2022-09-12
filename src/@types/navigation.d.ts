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
 * Types Route Params Moviments
 */
type MovimentEntriesOutputs = {
  itemName?: string
  price?: number
}

type MovimentItems = {
  entries?: MovimentEntriesOutputs[]
  outputs?: MovimentEntriesOutputs[]
}

type MovimentItemsListItems = {
  id?: number
  nameList?: string
  items?: MovimentItems
}

/**
 * Interfaces Stack ParamList
 */
interface RootStackParamList extends ParamListBase {
  Home: undefined

  Profile: {
    users?: UserList[]
  }

  AddListForm

  Moviments: {
    users?: UserList[]
  }

  MovimentItems: {
    listItems: MovimentItemsListItems[]
    nameList?: string
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>
