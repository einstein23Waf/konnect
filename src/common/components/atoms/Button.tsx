import { createTextStyle } from "@/src/styles/typography";
import { useTheme } from "@/src/theme/useTheme";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export enum BUTTON_VARIANT_ENUMS {
  primary = "primary",
  secondary = "secondary",
}

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: `${BUTTON_VARIANT_ENUMS}`;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = "primary",
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor:
        variant === "primary" ? theme.colors.primary : theme.colors.secondary,
      padding: theme.spacing.sm,
      borderRadius: theme.spacing.xs,
    },
    text: {
      ...createTextStyle("md", "medium"),
      color: theme.colors.background,
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
