import React from 'react'

import { navigationPaths } from '../constants/navigation'
import { Onboarding, Welcome } from '../screens'
import { createStackNavigator } from '@react-navigation/stack'


const AuthStack = createStackNavigator()

export const AuthNavigation = () => (
  <AuthStack.Navigator headerMode='none'>
    <AuthStack.Screen name={navigationPaths.onboarding} component={Onboarding} />
    <AuthStack.Screen name={navigationPaths.welcome} component={Welcome} />
  </AuthStack.Navigator>
)