import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`

export const ListItemButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: ${width - 32}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spaces.default};
  border-radius: ${({ theme }) => theme.spaces.small};
  margin-bottom: ${({ theme }) => theme.spaces.default};
`

export const ListItemButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.default};
`
