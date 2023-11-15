import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spaces.default};
  padding-top: ${({ theme }) => theme.spaces.default};
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.overlay};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.spaces.medium};
  padding-top: ${({ theme }) => theme.spaces.default};
  padding-bottom: ${({ theme }) => theme.spaces.small};
  font-weight: ${({ theme }) => theme.fonts.weight.l5};
`

export const ItemName = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.spaces.default};
`

export const ChevronDown = styled(MaterialIcons)`
  transform: rotate(270deg);
`
export const ChevronUp = styled(MaterialIcons)`
  transform: rotate(90deg);
`
