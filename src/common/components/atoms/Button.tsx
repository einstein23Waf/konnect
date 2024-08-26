import { createTextStyle } from "@/src/styles/typography";
import { useTheme } from "@/src/theme/useTheme";
import React from "react";
import { StyleSheet, Text, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = "primary",
  loading,
  ...props
}) => {
  const styles = getStyles();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

function getStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: theme.layout.borderRadius,
      alignItems: "center",
      justifyContent: "center",
      minWidth: 120,
    },
    primaryButton: {
      backgroundColor: theme.colors.primary,
      height: 48,
    },
    secondaryButton: {
      backgroundColor: theme.colors.primary,
      height: 48,
    },
    outlineButton: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    textButton: {
      backgroundColor: "transparent",
      padding: 0,
      minWidth: 0,
    },
    disabledButton: {
      opacity: 0.5,
    },

    // TEXT
    text: {
      ...createTextStyle("md", "medium"),
      textAlign: "center",
    },
    primaryText: {
      color: theme.colors.primary,
    },
    secondaryText: {
      color: theme.colors.neutral.dark,
    },
    outlineText: {
      color: theme.colors.neutral.dark,
    },
    textButtonText: {
      color: theme.colors.neutral.dark,
      fontFamily: "Poppins-Regular",
      textDecorationLine: "underline",
    },
  });
}
