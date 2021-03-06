import React, { FC } from 'react'

import { ButtonProps } from './types'
import { ButtonText, ButtonWrapper } from './styles'

export const Button: FC<ButtonProps> = ({ title, type = 'default', style, onPress }) => (
  <ButtonWrapper type={type} onPress={onPress} activeOpacity={0.5}>
    <ButtonText type={type}>{title}</ButtonText>
  </ButtonWrapper>
)
