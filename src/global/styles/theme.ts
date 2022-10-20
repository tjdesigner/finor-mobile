import styled from "styled-components/native"

export default {
  colors: {
    primary: "#43D094",
    primaryStrong: "#047e47",
    overlay: "rgba(0, 0, 0, 0.2)",
    grey: "rgba(0, 0, 0, 0.5)",
    primaryLight: "#7bf9c0",
    white: "white",
    black: "black",
    text: "#000000",
    danger: "#DC1637",
  },

  fonts: {
    family: {
      regular: "Poppins_400Regular",
      medium: "Poppins_500Medium",
      bold: "Poppins_700Bold",
    },
    weight: {
      level1: 100,
      level2: 200,
      level3: 300,
      level4: 400,
      level5: 500,
      level6: 600,
      level7: 700,
      level8: 800,
      level9: 900,
      bold: "bold",
    },
  },
  fontSize: {
    xxxs: `${1}px`,
    xxs: `${2}px`,
    xs: `${4}px`,
    small: `${8}px`,
    default: `${16}px`,
    medium: `${24}px`,
    large: `${32}px`,
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
    large: `${32}px`,
    xLarge: `${44}px`,
    xxLarge: `${48}px`,
    xxxLarge: `${60}px`,
    largestOfAll: `${76}px`,
  },
  fontSizeNumber: {
    xxxs: 1,
    xxs: 2,
    xs: 4,
    small: 8,
    default: 16,
    medium: 24,
    large: 32,
    xLarge: 44,
    xxLarge: 48,
    xxxLarge: 60,
    largestOfAll: 76,
  },
  spacesNumber: {
    xxs: 2,
    xs: 4,
    small: 8,
    default: 16,
    medium: 24,
    large: 32,
    large2: 36,
    large3: 40,
    xLarge: 44,
    xxLarge: 48,
    xxxLarge: 60,
    largestOfAll: 76,
  },
}

export const ContainerMainPage = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spaces.large};
  padding-left: ${({ theme }) => theme.spaces.default};
  padding-right: ${({ theme }) => theme.spaces.default};
`

interface ScrollMainPageProps {
  withPadding?: boolean
}

export const ScrollMainPage = styled.ScrollView<ScrollMainPageProps>`
  flex: 1;
  padding-left: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  padding-right: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spaces.default};
`
