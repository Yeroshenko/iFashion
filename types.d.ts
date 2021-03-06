import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      SFProTextBold: string
      SFProTextSemibold: string
      SFProTextRegular: string
    }
    colors: {
      white: string
      primary: string
      main: string
      defaultBtn: string
    }
    borderRadius: {
      XXL: string
      XL: string
    }
    activeOpacity: number
  }
}
