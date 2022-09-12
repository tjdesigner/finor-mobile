import styled from "styled-components/native"

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spaces.default};
  padding-top: ${({ theme }) => theme.spaces.default};
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.primaryLight};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.spaces.medium};
  padding-bottom: ${({ theme }) => theme.spaces.small};
  font-weight: ${({ theme }) => theme.fonts.weight.level6};
`

export const ItemName = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.spaces.default};
`
