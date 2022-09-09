import styled from "styled-components/native"

export const ItemContainer = styled.View`
  flex-direction: row;
  padding-bottom: ${({ theme }) => theme.spaces.small};
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.primaryLight};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.spaces.medium};
  padding-bottom: ${({ theme }) => theme.spaces.small};
  padding-top: ${({ theme }) => theme.spaces.medium};
`

export const ItemName = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.spaces.default};
`
