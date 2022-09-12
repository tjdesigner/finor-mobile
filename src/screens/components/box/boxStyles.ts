import { ReactNode } from "react"
import { ViewProps } from "react-native"
import styled from "styled-components/native"

export interface PageTitleComponentProps extends ViewProps {
  children?: ReactNode
  backgroundColor?: string
  padding?: number
  paddingTop?: number
  paddingLeft?: number
  paddingBottom?: number
  paddingRight?: number
  paddingVertical?: number
  paddingHorizontal?: number
  margin?: number
  marginTop?: number
  marginLeft?: number
  marginBottom?: number
  marginRight?: number
  borderRadius?: number
  borderColor?: string
  borderWidth?: number
  borderTopWidth?: number
  borderLeftWidth?: number
  borderBottomWidth?: number
  borderRightWidth?: number
  flex?: number
}

export const Container = styled.View<PageTitleComponentProps>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`
