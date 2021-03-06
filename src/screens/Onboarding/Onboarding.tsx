import React, { FC, useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Slide } from './Slide'
import { ScrollIndicator } from './ScrollIndicator'
import { isLastItem, isOdd } from '../../utils'
import { navigationPaths } from '../../constants'
import { BackdropInner, OnboardingContainer, OnboardingSlider } from './styles'


const FOOTER_HEIGHT = 320
const { width, height } = Dimensions.get('window')
const slidesInfo = [
  {
    label: 'Relaxed',
    title: 'Find Your Outfits',
    description: ' Confused about your outfit? Don’t worry! Find the best outfit here!',
    color: '#BFEAF5'
  },
  {
    label: 'Playful',
    title: 'Hear it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4'
  },
  {
    label: 'Excentric',
    title: 'Your Style, Your Way',
    description: ' Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9'
  },
  {
    label: 'Funky',
    title: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD'
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
    <OnboardingContainer height={height}>
      <Animated.View style={[StyleSheet.absoluteFillObject, { backgroundColor }]}>
        <BackdropInner height={FOOTER_HEIGHT} />
      </Animated.View>
      <ScrollIndicator scrollX={scrollX} slidesInfo={slidesInfo} slideWidth={width} />
      <OnboardingSlider>
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
      </OnboardingSlider>
    </OnboardingContainer>
  )
}
