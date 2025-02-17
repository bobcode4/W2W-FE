import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/SignUp" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Login" options={{ headerShown: false }} />
      <Stack.Screen name="screens/AccountVerification" options={{ headerShown: false }} />
      <Stack.Screen name="screens/OTPVerification" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Onboarding" options={{ headerShown: false }} />
    </Stack>
  );
}
