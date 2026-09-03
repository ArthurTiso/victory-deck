import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Deck, Slide } from "./src/components/Deck";
import { S01Problema } from "./src/slides/S01Problema";
import { colors, fontAssets } from "./src/theme/tokens";

const SLIDES: Slide[] = [
  { id: "s01", tag: "O problema", render: () => <S01Problema /> },
  // s02 A pilha
  // s03 Primeiro gráfico          → locksGestures: true
  // s04 Galeria de tipos
  // s05 Eixos
  // s06 Tooltip                   → locksGestures: true
  // s07 Pan e zoom                → locksGestures: true
  // s08 Animação
  // s09 Limites e comparativo
];

export default function App() {
  const [ready] = useFonts(fontAssets);

  return (
    <GestureHandlerRootView style={styles.root}>
      <StatusBar hidden />
      {ready ? (
        <Deck slides={SLIDES} />
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.accent} />
        </View>
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.canvas },
  loading: { flex: 1, alignItems: "center", justifyContent: "center" },
});
