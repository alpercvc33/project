import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="user-info" />
      <Stack.Screen name="fitness-goals" />
      <Stack.Screen name="nutrition-info" />
      <Stack.Screen name="mental-goals" />
    </Stack>
  );
}