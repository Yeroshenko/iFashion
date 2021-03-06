import styled from 'styled-components/native'
import { Animated } from 'react-native'
import {
  BackdropTopProps,
  BackdropBottomProps,
  SlideContainerProps,
  SlideLabelProps
} from './types'


export const OnboardingContainer = styled.View`
  flex: 1;
  position: relative;
`

export const OnboardingSlider = styled.View`
  flex: 1;
`

export const BackdropTop = styled.View<BackdropTopProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${props => props.bottomHeight + 'px'};
  background-color: ${props => props.theme.colors.white};
`

export const BackdropTopInner = styled(Animated.View)`
  display: flex;
  flex: 1 1 100%;
  border-bottom-right-radius: ${props => props.theme.borderRadius.XXL};
`

export const BackdropBottom = styled.View<BackdropBottomProps>`
  height: ${props => props.height + 'px'};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: ${props => props.theme.borderRadius.XXL};
`

export const SlideContainer = styled.View<SlideContainerProps>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: ${props => props.width + 'px'};
`

export const SlideLabel = styled.Text<SlideLabelProps>`
  font-size: 80px;
  text-align: center;
  line-height: ${props => props.labelHeight + 'px'};
  width: ${props => props.width + 'px'};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.SFProTextBold};
`

export const SlideFooter = styled.View`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OnboardingTitle = styled.Text`
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 12px;
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.SFProTextSemibold};
`

export const OnboardingDescription = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.7;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.SFProTextRegular};
`

export const ScrollDots = styled.View`
  position: absolute;
  bottom: 260px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ScrollDot = styled(Animated.View)`
  z-index: 5;
  width: 5px;
  height: 5px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
`

export const WelcomeContainer = styled(OnboardingContainer)`
  background-color: ${props => props.theme.colors.welcomeBg};
`

export const WelcomeImageContainer = styled.View`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.white};
`

export const WelcomeImageInner = styled.View`
  background-color: ${props => props.theme.colors.welcomeBg};
  flex: 1;
  border-bottom-right-radius: ${props => props.theme.borderRadius.XXL};
`

export const WelcomeFooter = styled.View`
  padding: 50px 40px 40px;
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: ${props => props.theme.borderRadius.XXL};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const WelcomeLink = styled.Text`
  font-family: ${props => props.theme.fonts.SFProTextSemibold};
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: ${props => props.theme.colors.main};
`
