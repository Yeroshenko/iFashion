import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import theme from '../styles/theme'

export type ButtonType = 'primary' | 'default'

type ButtonProps = {
  title: string
  onPress?: () => void,
  type?: ButtonType
}

const styles = StyleSheet.create({
  wrapper: {
    width: 245,
    borderRadius: theme.borderRadius.XL,
    padding: 16
  },
  text: {
    fontFamily: theme.fonts.SFProTextSemibold,
    fontSize: 16,
    textAlign: 'center'
  }
})

const typeToBg = (type: ButtonType): StyleProp<ViewStyle> => ({
  backgroundColor: type === 'default' ? theme.colors.defaultBtn : theme.colors.primary
})

const typeToColor = (type: ButtonType): StyleProp<TextStyle> => ({
  color: type === 'default' ? theme.colors.main : theme.colors.white
})

export const Button: FC<ButtonProps> = ({ title, type = 'default', onPress }) => (
  <TouchableOpacity style={[styles.wrapper, typeToBg(type)]} onPress={onPress}>
    <Text style={[styles.text, typeToColor(type)]}>{title}</Text>
  </TouchableOpacity>
)


