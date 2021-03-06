import React, { FC } from 'react'
import { Dimensions, View } from 'react-native'
import { Button } from '../../components'
import { SlideProps } from './types'
import { OnboardingDescription, OnboardingTitle, SlideContainer, SlideFooter, SlideLabel } from './styles'


const LABEL_HEIGHT = 90
const { width, height } = Dimensions.get('window')


export const Slide: FC<SlideProps> = (
  {
    label,
    right = false,
    footerHeight,
    title,
    description,
    buttonType = 'default',
    buttonText = 'Next',
    onButtonPress
  }
) => {
  const imageHeight = height - footerHeight
  const labelTransform = [
    { translateY: (imageHeight / 2) - (LABEL_HEIGHT / 2) },
    { translateX: right ? width / 2 - (LABEL_HEIGHT / 2) : -width / 2 + (LABEL_HEIGHT / 2) },
    { translateY: 40 },
    { rotate: right ? '-90deg' : '90deg' }
  ]

  return (
    <SlideContainer width={width}>
      <View style={{ height: imageHeight }}>
        <View style={{ transform: labelTransform }}>
          <SlideLabel labelHeight={LABEL_HEIGHT} width={width}>{label}</SlideLabel>
        </View>
      </View>
      <SlideFooter style={{ height: footerHeight }}>
        <OnboardingTitle>{title}</OnboardingTitle>
        <OnboardingDescription>{description}</OnboardingDescription>
        <Button title={buttonText} type={buttonType} onPress={onButtonPress} />
      </SlideFooter>
    </SlideContainer>
  )
}