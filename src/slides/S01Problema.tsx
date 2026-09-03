import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SlideLayout } from "../components/SlideLayout";
import { colors, space, type } from "../theme/tokens";

const PROBLEMAS = [
  {
    causa: "react-native-svg",
    efeito:
      "Não foi projetado para muitos nós sendo atualizados dinamicamente pela ponte.",
  },
  {
    causa: "Re-renders do React",
    efeito:
      "O código de animação e gestos dispara re-render a cada quadro. Somado ao item acima, gráfico interativo com dataset grande ficava inutilizável no Android.",
  },
  {
    causa: "Mobile ≠ web",
    efeito:
      "Uma biblioteca portada da web herda interações de mouse. No celular o usuário toca, arrasta e pinça.",
  },
];

export function S01Problema() {
  return (
    <SlideLayout
      fullWidth
      title="Desenhar gráfico em React Native é mais difícil do que parece"
      lead="Três limitações que a abordagem tradicional, baseada em SVG, nunca resolveu."
    >
      <View style={styles.grid}>
        {PROBLEMAS.map((p) => (
          <View key={p.causa} style={styles.item}>
            <Text style={styles.causa}>{p.causa}</Text>
            <Text style={styles.efeito}>{p.efeito}</Text>
          </View>
        ))}
      </View>

      <View style={styles.pergunta}>
        <Text style={styles.perguntaTexto}>
          Como desenhar dois mil pontos a 60 quadros por segundo num celular de entrada?
        </Text>
      </View>
    </SlideLayout>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    gap: space.xl,
  },
  item: {
    flex: 1,
    borderLeftWidth: 2,
    borderLeftColor: colors.borderStrong,
    paddingLeft: space.md,
  },
  causa: {
    ...type.label,
    color: colors.accent,
    marginBottom: space.sm,
  },
  efeito: {
    ...type.body,
    color: colors.textMuted,
  },
  pergunta: {
    marginTop: space.xxl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: space.lg,
  },
  perguntaTexto: {
    ...type.title,
    color: colors.text,
    maxWidth: 820,
  },
});
