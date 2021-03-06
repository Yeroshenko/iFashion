import React, { FC, useEffect, useState } from 'react'
import { FontSource, loadAsync } from 'expo-font'
import AppLoading from 'expo-app-loading'


type LoadAssetsProps = {
  fonts: string | { [fontFamily: string]: FontSource }
}

export const LoadAssets: FC<LoadAssetsProps> = ({ fonts, children }) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    loadAsync(fonts)
      .then(() => setIsReady(true))
      .catch(console.warn)
  }, [])

  // TODO: add async cache resources
  return (
    <>
      {isReady ? children : <AppLoading />}
    </>
  )
}