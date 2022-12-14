import styled from "styled-components/native"

export const PageTitleContainer = styled.View`
  padding-top: ${({ theme }) => theme.spaces.medium};
  padding-bottom: ${({ theme }) => theme.spaces.large};
  align-self: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
`
