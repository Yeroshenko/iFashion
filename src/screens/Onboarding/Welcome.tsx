import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Button } from '../../components'


export const Welcome: FC = () => (
  <View>
    <View>
      <Text>out</Text>
    </View>
    <View>
      <Text>Let’s get started</Text>
      <Text>Login to your account below or signup for an amazing experience</Text>
      <Button title='Have an account? Login' type='primary' />
      <Button title='Join us, it’s Free' />
      <TouchableOpacity>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  </View>
)