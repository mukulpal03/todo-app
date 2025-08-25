import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createHomeStyles(colors);

  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle dark mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}