import styled from "styled-components/native"

export interface ContainerSvgProps {
  flex?: number
  width?: number
  height?: number
  marginTop?: number
  marginLeft?: number
  marginBottom?: number
  marginRight?: number
  paddingTop?: number
  paddingLeft?: number
  paddingBottom?: number
  paddingRight?: number
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse"
  backgroundColor?: string
  justifyContent?:
    | "baseline"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch"
  alignItems?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch"
  alignSelf?:
    | "auto"
    | "baseline"
    | "center"
    | "flex-end"
    | "flex-start"
    | "stretch"
  marginHorizontal?: number
  marginVertical?: number
}

export const ContainerSvg = styled.View<ContainerSvgProps>`
  width: ${(props) => (props.width ? props.width : 0)}px;
  height: ${(props) => (props.height ? props.height : 0)}px;
  flex: ${(props) => (props.flex ? props.flex : 0)}px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)}px;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : 0)}px;
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : 0}px;
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : 0)}px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
`
