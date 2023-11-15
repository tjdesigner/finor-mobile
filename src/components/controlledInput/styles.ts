import { Dimensions } from "react-native"
import styled from "styled-components/native"
import { Controller } from "react-hook-form"


const { width, height } = Dimensions.get("window")

export const InputText = styled.TextInput`
  height: ${({ theme }) => theme.spaces.xLarge};
  padding: ${({ theme }) => theme.spaces.small};
  align-self: stretch;
  font-size: ${({ theme }) => theme.spaces.default};
`

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  margin: ${({ theme }) => theme.spaces.xxs};
  flex-direction: column;
`

export const ControllerContainer = styled.View`
  color: ${({ theme }) => theme.colors.danger};
  border-width: 1px;
  border-radius: ${({theme})=>theme.spaces.small};
  width: ${({theme})=> width - theme.fontSizeNumber.large}px;
  margin-bottom: ${({theme})=>theme.spaces.small};
`
