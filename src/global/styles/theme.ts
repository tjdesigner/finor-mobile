import styled from "styled-components/native"

export default {
  colors: {
    black: "black",
    danger: "#DC1637",
    grey: "rgba(0, 0, 0, 0.5)",
    light: "rgba(0, 0, 0, 0.08)",
    overlay: "rgba(0, 0, 0, 0.2)",
    primary: "#16be6c",
    primaryStrong: "#1a8b54",
    secondary: "#43D094",
    tertiary: "#B3EDD4",
    text: "#000000",
    white: "white",
  },

  fonts: {
    family: {
      regular: "Poppins_400Regular",
      medium: "Poppins_500Medium",
      bold: "Poppins_700Bold",
    },
    weight: {
      normal: "normal",
      bold: "bold",
      l1: "100",
      l2: "200",
      l3: "300",
      l4: "400",
      l5: "500",
      l6: "600",
      l7: "700",
      l8: "800",
      l9: "900",
      undefined,
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
    large2: `${36}px`,
    large3: `${40}px`,
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
    large2: `${36}px`,
    large3: `${40}px`,
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

export const getFontWeight = (str: string) => str as React.CSSProperties

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

export const ScrollMainPageTabbar = styled.ScrollView<ScrollMainPageProps>`
  flex: 1;
  padding-left: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  padding-right: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spaces.default};
  border-radius: ${({ theme }) => theme.spaces.large};
`

export const ScrollMainPage = styled.ScrollView<ScrollMainPageProps>`
  flex: 1;
  padding-left: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  padding-right: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spaces.default};
`
