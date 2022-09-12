import { Dimensions, TextProps, TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`

interface FabButtonProps {
  screenPosition?: "left" | "right" | "center"
}

export const FabButton = styled(TouchableOpacity)<FabButtonProps>`
  width: ${({ theme }) => theme.spaces.xxxLarge};
  height: ${({ theme }) => theme.spaces.xxxLarge};
  border-radius: ${({ theme }) => theme.spaces.xxLarge};
  background-color: ${({ theme }) => theme.colors.overlay};
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${({ theme }) => theme.spaces.medium};
  left: ${(props) =>
    props.screenPosition === "left"
      ? ({ theme }) => theme.spaces.large
      : props.screenPosition === "right"
      ? Dimensions.get("window").width - 100 + "px"
      : Dimensions.get("window").width / 2 - 30 + "px"};
`

interface FabButtonTextProps extends TextProps {
  color?: string
}

export const FabButtonText = styled.Text<FabButtonTextProps>`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.white};
`
