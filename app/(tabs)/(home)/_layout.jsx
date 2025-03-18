import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="trending" options={{ headerShown: true }} />
    </Stack>
  );
}
