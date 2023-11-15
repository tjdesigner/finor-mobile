import { ReactNode } from "react"
import { ViewProps } from "react-native"
import styled from "styled-components/native"

export interface PageTitleComponentProps extends ViewProps {
  height?: number
  width?: number
  alignItems?: "baseline" | "flex-start" | "center" | "flex-end" | "stretch"
  alignSelf?: "baseline" | "flex-start" | "center" | "flex-end" | "stretch"
  backgroundColor?: string
  borderBottomWidth?: number
  borderColor?: string
  borderLeftWidth?: number
  borderRadius?: number
  borderRightWidth?: number
  borderTopWidth?: number
  borderWidth?: number
  children?: ReactNode
  elevation?: number
  flex?: number
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse"
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "row-reverse"
    | "space-around"
    | "space-between"
  margin?: number
  marginBottom?: number
  marginHorizontal?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  marginVertical?: number
  padding?: number
  paddingBottom?: number
  paddingHorizontal?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingVertical?: number
  shadowColor?: string
  shadowOffset?: Object
  shadowOpacity?: number
  shadowRadius?: number
}

export const Container = styled.View<PageTitleComponentProps>`
  height: ${(props) => (props.backgroundColor ? props.height : "auto")}px;
  width: ${(props) => (props.backgroundColor ? props.width : "auto")}px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
`
