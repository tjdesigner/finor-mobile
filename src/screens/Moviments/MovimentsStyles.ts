import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  align-items: center;
  justify-content: center;
`

export const ListItemButton = styled(TouchableOpacity)`
  width: ${width - 32}px;
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  padding: ${({ theme }) => theme.spaces.default};
  border-radius: ${({ theme }) => theme.spaces.small};
  margin-bottom: ${({ theme }) => theme.spaces.small};
`
