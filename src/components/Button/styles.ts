import styled, { DefaultTheme } from 'styled-components/native'
import { ButtonStylesProps, ButtonType } from './types'


// COMPONENTS =================================================
export const ButtonWrapper = styled.TouchableOpacity<ButtonStylesProps>`
  width: 245px;
  border-radius: ${props => props.theme.borderRadius.XL};
  padding: 16px;
  background-color: ${(props) => typeToBg(props.type, props.theme)};
`

export const ButtonText = styled.Text<ButtonStylesProps>`
  font-family: ${props => props.theme.fonts.SFProTextSemibold};
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: ${(props) => typeToColor(props.type, props.theme)};
`


// HELPERS =================================================
const typeToBg = (type: ButtonType, theme: DefaultTheme) => {
  switch (type) {
    case 'default':
      return theme.colors.defaultBtn

    case 'primary':
      return theme.colors.primary
  }
}

const typeToColor = (type: ButtonType, theme: DefaultTheme) => {
  switch (type) {
    case 'default':
      return theme.colors.main

    case 'primary':
      return theme.colors.white
  }
}