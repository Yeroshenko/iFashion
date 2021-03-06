import React, { FC, useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Slide } from './Slide'
import { theme } from '../../../styles'
import { ScrollIndicator } from './ScrollIndicator'
import { isLastItem, isOdd } from '../../../utils/intex'
import { navigationPaths } from '../../../constants/navigation'

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

const slidesInfo = [
  {
    label: 'Relaxed',
    title: 'Find Your Outfits',
    description: ' Confused about your outfit? Don’t worry! Find the best outfit here!',
    color: theme.colors.onboarding[0]
  },
  {
    label: 'Playful',
    title: 'Hear it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: theme.colors.onboarding[1]
  },
  {
    label: 'Excentric',
    title: 'Your Style, Your Way',
    description: ' Create your individual & unique style and look amazing everyday',
    color: theme.colors.onboarding[2]
  },
  {
    label: 'Funky',
    title: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality',
    color: theme.colors.onboarding[3]
  }
]

export const Onboarding: FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const navigation = useNavigation()
  const topSliderRef = useRef(null as any)
  const scrollX = useRef(new Animated.Value(0)).current

  const backgroundColor = scrollX.interpolate({
    inputRange: slidesInfo.map((_, i) => i * width),
    outputRange: slidesInfo.map(({ color }) => color)
  })

  const onNextButtonPress = () => {
    const nextSlide = currentSlideIndex + 1
    // @ts-ignore
    topSliderRef.current.scrollTo({ x: width + scrollX._value })
    setCurrentSlideIndex(nextSlide)
  }

  const onStartedButtonPress = () => {
    navigation.navigate(navigationPaths.welcome)
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFillObject, { backgroundColor }]}>
        <View style={styles.backdropInner} />
      </Animated.View>
      <ScrollIndicator scrollX={scrollX} slidesInfo={slidesInfo} slideWidth={width} />
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
          {slidesInfo.map(({ label, title, description }, i) => (
            isLastItem(slidesInfo, i)
              ? <Slide key={label + i} label={label} title={title} description={description} right={isOdd(i)}
                       footerHeight={FOOTER_HEIGHT} onButtonPress={onStartedButtonPress} buttonType='primary'
                       buttonText='Let’s get started' />

              : <Slide key={label + i} label={label} title={title} description={description} right={isOdd(i)}
                       footerHeight={FOOTER_HEIGHT} onButtonPress={onNextButtonPress} buttonText='Next' />
          ))}
        </Animated.ScrollView>
      </View>
    </View>
  )
}
