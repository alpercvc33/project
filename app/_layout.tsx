import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SplashScreen } from 'expo-router';
import { useAuthStore } from '../store/auth'
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

export default function RootLayout() {
  useFrameworkReady();
  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Regular': Roboto_400Regular,
    'Roboto-Medium': Roboto_500Medium,
    'Roboto-Bold': Roboto_700Bold,
  });

  const { token } = useAuthStore();

  useEffect(() => {
    window.frameworkReady?.();
    
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return null to keep splash screen visible while fonts load
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' }
      }}>
        {!token ? (
          <Stack.Screen name="auth" options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ title: 'Page Not Found' }} />
          </>
        )}
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}