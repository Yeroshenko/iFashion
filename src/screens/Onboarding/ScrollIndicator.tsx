import React, { FC } from 'react'

import { ScrollDot, ScrollDots } from './styles'
import { ScrollIndicatorProps } from './types'


export const ScrollIndicator: FC<ScrollIndicatorProps> = ({ scrollX, slidesInfo, slideWidth }) => (
  <ScrollDots>
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

      return <ScrollDot key={i} style={{ opacity, transform: [{ scale }] }} />
    })}
  </ScrollDots>
)