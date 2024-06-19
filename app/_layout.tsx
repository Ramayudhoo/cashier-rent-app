import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            headerShown:false,
        }}/>
        <Stack.Screen name='users/[id]' options={{
            headerTitle:"User Page"
        }}/>
        <Stack.Screen name='antrian' options={{
            headerTitle:"antrian",headerShown:false,
        }}/>
    </Stack>
  )
}

export default RootLayout