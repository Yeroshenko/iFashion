import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import { AuthNavigation } from './src/navigations'
import { LoadAssets } from './src/components'

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf')
}


export default function App() {
  return (
    <LoadAssets fonts={fonts}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </LoadAssets>
  )
}