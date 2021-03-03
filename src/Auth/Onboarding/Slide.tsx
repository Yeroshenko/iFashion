import React, { FC } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import theme from '../../styles/theme'

type SlideProps = {
  label: string
  right?: boolean
}

const { width, height } = Dimensions.get('window')

export const SLIDE_HEIGHT = height * 0.61

const SLIDE_WIDTH = width
const LABEL_HEIGHT = 90

const styles = StyleSheet.create({
  container: {
    width,
    display: 'flex'
  },
  label: {
    width,
    fontSize: 80,
    fontFamily: theme.fonts.SFProTextBold,
    color: theme.colors.white,
    textAlign: 'center',
    lineHeight: LABEL_HEIGHT
  }
})


export const Slide: FC<SlideProps> = ({ label, right = false }) => {
  const labelTransform = [
    { translateY: (SLIDE_HEIGHT / 2) - (LABEL_HEIGHT / 2) },
    { translateX: right ? SLIDE_WIDTH / 2 - (LABEL_HEIGHT / 2) : -SLIDE_WIDTH / 2 + (LABEL_HEIGHT / 2) },
    { rotate: right ? '-90deg' : '90deg' }
  ]
  return (
    <View style={styles.container}>
      <View style={{ transform: labelTransform }}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  )
}