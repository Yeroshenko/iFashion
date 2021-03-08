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
      welcomeBg: string
    }
    borderRadius: {
      XXL: string
      XL: string
    }
    activeOpacity: number
  }
}
