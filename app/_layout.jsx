import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Auth/SignUp" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Auth/Login" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Auth/AccountVerification" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Auth/OTPVerification" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Onboarding" options={{ headerShown: false }} />
    </Stack>
  );
}
