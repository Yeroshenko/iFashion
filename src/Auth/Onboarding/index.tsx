import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export const Onboarding = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'cyan', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
      <Text style={{ fontFamily: 'SFProText-Bold', textAlign: 'center' }}>iFashion</Text>
    </SafeAreaView>
  )
}
