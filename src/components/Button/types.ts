import { ViewStyle } from 'react-native'

export type ButtonType = 'primary' | 'default'

export type ButtonProps = {
  title: string
  onPress?: () => void
  type?: ButtonType
  style?: ViewStyle
}

export type ButtonStylesProps = {
  type: ButtonType
}