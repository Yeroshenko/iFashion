import React, { FC } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { theme } from '../../../styles'
import { Button, ButtonType } from '../../../components'


type SlideProps = {
  label: string
  right?: boolean
  footerHeight: number
  title: string
  description: string
  buttonText?: string
  buttonType?: ButtonType
  onButtonPress?: () => void
}

const { width, height } = Dimensions.get('window')

const LABEL_HEIGHT = 90

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  labelWrapper: {},
  label: {
    width,
    fontSize: 80,
    fontFamily: theme.fonts.SFProTextBold,
    color: theme.colors.white,
    textAlign: 'center',
    lineHeight: LABEL_HEIGHT
  },
  footer: {
    padding: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: theme.fonts.SFProTextSemibold,
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 12,
    color: theme.colors.main
  },
  description: {
    fontFamily: theme.fonts.SFProTextRegular,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.main,
    marginBottom: 40,
    opacity: .7
  }
})


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
    <View style={styles.container}>
      <View style={[styles.labelWrapper, { height: imageHeight }]}>
        <View style={{ transform: labelTransform }}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
      <View style={[styles.footer, { height: footerHeight }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button title={buttonText} type={buttonType} onPress={onButtonPress} />
      </View>
    </View>
  )
}