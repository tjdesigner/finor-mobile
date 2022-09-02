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

type UserList = {
  id?: number
  name?: string
  age?: number
}

interface RootStackParamList extends ParamListBase {
  Home: undefined

  Profile: {
    users?: UserList[]
  }

  Moviments: {
    users?: UserList[]
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>
