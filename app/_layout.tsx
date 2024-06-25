import { Stack, useRouter, Redirect } from "expo-router";
import { AuthProvider,useAuth } from "../providers/AuthProvider";

import { useEffect } from "react";
import React from "react";

export default function Layout() {

    const { session, loading } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!loading) {
          if (!session) {
            router.replace('/(auth)');
          } else {
            router.replace('/(home)');
          }
        }
      }, [session, loading]);

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
        name="(auth)"
        options={{headerShown: false,}}
        />
        <Stack.Screen
        name="(home)"
        options={{headerShown: false,}}
        />
    </Stack>
        </AuthProvider>
          );
        }