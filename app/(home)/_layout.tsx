// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../../providers/AuthProvider';


const HomeLayout = () => {

  return (
      <AuthProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
    </AuthProvider>
  );
}

export default HomeLayout;
