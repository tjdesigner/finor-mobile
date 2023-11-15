import styled from "styled-components/native"

export const PageTitleContainer = styled.View`
  padding-top: ${({ theme }) => theme.spaces.xxxLarge};
  padding-bottom: ${({ theme }) => theme.spaces.default};
  align-self: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
`
