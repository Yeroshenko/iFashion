import { ButtonType } from '../../components'
import { Animated } from 'react-native'

export type OnboardingContainerProps = {
  height: number
}
export type BackdropInnerProps = {
  height: number
}

export type SlideProps = {
  label: string
  right?: boolean
  footerHeight: number
  title: string
  description: string
  buttonText?: string
  buttonType?: ButtonType
  onButtonPress?: () => void
}

export type SlideContainerProps = {
  width: number
}

export type SlideLabelProps = SlideContainerProps & {
  labelHeight: number
}

export type ScrollIndicatorProps = {
  scrollX: Animated.Value
  slidesInfo: Array<any>
  slideWidth: number
}