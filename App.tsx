import React from 'react'
import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import { AuthNavigation } from './src/navigations'
import { LoadAssets } from './src/components'
import { theme } from './src/styles'

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf')
}

export default function App() {
  return (
    <LoadAssets fonts={fonts}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </LoadAssets>
  )
}
