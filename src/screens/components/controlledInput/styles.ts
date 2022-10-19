import { Dimensions } from "react-native"
import styled from "styled-components/native"
import { Controller } from "react-hook-form"
import theme from "../../../global/styles/theme"

const { width, height } = Dimensions.get("window")

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  margin: ${({ theme }) => theme.spaces.xxs};
  flex-direction: column;
`

export const ControllerContainer = styled.View`
  color: ${({ theme }) => theme.colors.danger};
  border-width: 1px;
  padding: 4px;
  border-radius: 5px;
  width: ${width - theme.fontSizeNumber.xxxLarge}px;
  margin-top: 4px;
  margin-right: 0px;
  margin-bottom: 4px;
`
