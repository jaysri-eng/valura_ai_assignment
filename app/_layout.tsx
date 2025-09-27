import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Default options for all screens */}
      <Stack.Screen name="index" options={{ headerShown: true }} />
      {/* Hide header only for stock/[ticker].tsx */}
      <Stack.Screen name="stock/[ticker]" options={{ headerShown: false }} />
    </Stack>
  );
}
