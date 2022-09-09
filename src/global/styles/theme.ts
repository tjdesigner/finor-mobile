import styled from "styled-components/native"

export default {
  colors: {
    primary: "#43D094",
    primaryStrong: "#047e47",
    primaryLight: "#7bf9c0",
    white: "white",
    black: "black",
    text: "#000000",
  },

  fonts: {
    regular: "Poppins_400Regular",
    medium: "Poppins_500Medium",
    bold: "Poppins_700Bold",
  },
  fontSize: {
    xxs: `${2}px`,
    xs: `${4}px`,
    small: `${8}px`,
    default: `${16}px`,
    medium: `${24}px`,
    large: `${40}px`,
    xLarge: `${44}px`,
    xxLarge: `${48}px`,
    xxxLarge: `${60}px`,
  },
  spaces: {
    xxs: `${2}px`,
    xs: `${4}px`,
    small: `${8}px`,
    default: `${16}px`,
    medium: `${24}px`,
    large: `${40}px`,
    xLarge: `${44}px`,
    xxLarge: `${48}px`,
    xxxLarge: `${60}px`,
  },
}

export const ContainerMainPage = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spaces.default};
  padding-left: ${({ theme }) => theme.spaces.default};
  padding-right: ${({ theme }) => theme.spaces.default};
`
