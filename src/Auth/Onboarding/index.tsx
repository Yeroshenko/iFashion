import React, { useRef } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'

import { Slide, SLIDE_HEIGHT } from './Slide'
import theme from '../../styles/theme'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 80
  },
  footer: {
    flex: 1
  },
  footerInner: {
    borderTopLeftRadius: 80,
    backgroundColor: 'white'
  }
})

const slides = [
  { label: 'Relaxed', color: theme.colors.onboarding[0] },
  { label: 'Playful', color: theme.colors.onboarding[1], right: true },
  { label: 'Excentric', color: theme.colors.onboarding[2] },
  { label: 'Funky', color: theme.colors.onboarding[3], right: true }
]

export const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  const backgroundColor = scrollX.interpolate({
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color)
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.FlatList
          data={slides}
          horizontal
          pagingEnabled
          scrollEventThrottle={32}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide label={item.label} right={item.right} />}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
      </Animated.View>
      <Animated.View style={[styles.footer, { backgroundColor }]}>
        <View style={[StyleSheet.absoluteFillObject, styles.footerInner]}>

        </View>
      </Animated.View>
    </View>
  )
}
