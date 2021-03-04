import React, { useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'

import { Slide } from './Slide'
import theme from '../../styles/theme'

const { width, height } = Dimensions.get('window')

const FOOTER_HEIGHT = 320

const styles = StyleSheet.create({
  container: {
    height,
    flex: 1,
    position: 'relative'
  },
  slider: {
    flex: 1
  },
  backdropInner: {
    height: FOOTER_HEIGHT,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.borderRadius.XXL
  }
})

const slideBackgrounds = [
  theme.colors.onboarding[0],
  theme.colors.onboarding[1],
  theme.colors.onboarding[2],
  theme.colors.onboarding[3]
]

export const Onboarding = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const topSliderRef = useRef(null as any)
  const scrollX = useRef(new Animated.Value(0)).current

  const backgroundColor = scrollX.interpolate({
    inputRange: slideBackgrounds.map((_, i) => i * width),
    outputRange: slideBackgrounds
  })

  const onButtonPress = () => {
    const nextSlide = currentSlideIndex + 1
    // @ts-ignore
    topSliderRef.current.scrollTo({ x: width + scrollX._value })
    setCurrentSlideIndex(nextSlide)
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFillObject, { backgroundColor }]}>
        <View style={styles.backdropInner} />
      </Animated.View>
      <View style={styles.slider}>
        <Animated.ScrollView
          ref={topSliderRef}
          horizontal
          pagingEnabled
          scrollEventThrottle={32}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          <Slide label={'Relaxed'} title='Find Your Outfits'
                 description='Confused about your outfit? Don’t worry! Find the best outfit here!'
                 footerHeight={FOOTER_HEIGHT} onButtonPress={onButtonPress} />

          <Slide label={'Playful'} right title='Hear it First, Wear it First'
                 description='Confused about your outfit? Don’t worry! Find the best outfit here!'
                 footerHeight={FOOTER_HEIGHT} onButtonPress={onButtonPress} />

          <Slide label={'Excentric'} title='Your Style, Your Way'
                 description='Confused about your outfit? Don’t worry! Find the best outfit here!'
                 footerHeight={FOOTER_HEIGHT} onButtonPress={onButtonPress} />

          <Slide label={'Funky'} right title='Look Good, Feel Good'
                 description='Confused about your outfit? Don’t worry! Find the best outfit here!'
                 footerHeight={FOOTER_HEIGHT} onButtonPress={onButtonPress} buttonType='primary' />
        </Animated.ScrollView>
      </View>
    </View>
  )
}
