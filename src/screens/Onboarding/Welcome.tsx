import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { Button } from '../../components'
import {
  WelcomeContainer,
  WelcomeImageContainer,
  WelcomeImageInner,
  WelcomeFooter,
  OnboardingTitle,
  OnboardingDescription,
  WelcomeLink
} from './styles'


export const Welcome: FC = () => (
  <WelcomeContainer>
    <WelcomeImageContainer>
      <WelcomeImageInner />
    </WelcomeImageContainer>
    <WelcomeFooter>
      <OnboardingTitle>Let’s get started</OnboardingTitle>
      <OnboardingDescription>
        Login to your account below or signup for an amazing experience
      </OnboardingDescription>
      <Button title='Have an account? Login' type='primary' style={{ marginBottom: 16 }} />
      <Button title='Join us, it’s Free' style={{ marginBottom: 30 }} />
      <TouchableOpacity activeOpacity={0.5}>
        <WelcomeLink>Forgot password?</WelcomeLink>
      </TouchableOpacity>
    </WelcomeFooter>
  </WelcomeContainer>
)
