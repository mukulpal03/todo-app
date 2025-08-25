import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={styles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView
        style={styles.safeArea}
      >
        <Header />
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle dark mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}