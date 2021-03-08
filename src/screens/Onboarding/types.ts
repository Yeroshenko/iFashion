import { ButtonType } from '../../components'
import { Animated } from 'react-native'


export type BackdropTopProps = {
  bottomHeight: number
}

export type BackdropBottomProps = {
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
