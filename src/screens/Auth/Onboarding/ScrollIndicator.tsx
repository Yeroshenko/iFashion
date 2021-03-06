import React, { FC } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { theme } from '../../../styles'

type ScrollIndicatorProps = {
  scrollX: Animated.Value
  slidesInfo: Array<any>
  slideWidth: number
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 280,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    zIndex: 5,
    marginHorizontal: 5
  }
})

export const ScrollIndicator: FC<ScrollIndicatorProps> = ({ scrollX, slidesInfo, slideWidth }) => (
  <View style={styles.wrapper}>
    {slidesInfo.map((_, i) => {
      const inputRange = [(i - 1) * slideWidth, i * slideWidth, (i + 1) * slideWidth]
      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1.2, 0.8],
        extrapolate: 'clamp'
      })
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp'
      })

      return <Animated.View key={i} style={[styles.dot, { opacity, transform: [{ scale }] }]} />
    })}
  </View>
)