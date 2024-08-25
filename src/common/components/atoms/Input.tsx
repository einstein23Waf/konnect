import { useTheme } from "@/src/theme/useTheme";
import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { StyledText } from "./StyledText";

interface _StyledTextInputProps extends TextInputProps {
  label?: string;
  ref?: React.LegacyRef<TextInput>;
  error?: string;
}

export const StyledTextInput: React.FC<_StyledTextInputProps> = (
  { style, label, error, onBlur, ...props },
  ref
) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputBlur = (e: any) => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <View>
      {label && (
        <StyledText style={[isFocused && styles.labelFocused]}>
          {label}
        </StyledText>
      )}

      <TextInput
        ref={ref}
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          props.editable === false && styles.inputDisabled,
          error ? styles.inputError : null,
          style,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        {...props}
      />

      {error && <StyledText style={[styles.errorText]}>{error}</StyledText>}
    </View>
  );
};

function getStyles(theme: any) {
  return StyleSheet.create({
    input: {
      height: 48,
      borderWidth: 1,
      borderColor: theme.colors.neutral.dark,
      borderRadius: theme.layout.borderRadius,
      padding: theme.spacing.sm,
      fontSize: theme.typography.fontSizes.md,
      backgroundColor: theme.colors.background,
      //   fontFamily: "",
    },
    inputError: {
      borderColor: theme.colors.error,
      backgroundColor: `${theme.colors.error}15`,
    },
    inputFocused: {
      borderColor: theme.colors.primary,
      backgroundColor: `${theme.colors.secondary}15`,
      borderWidth: 1.5,
    },
    inputDisabled: {
      borderColor: `${theme.colors.neutral.dark}30`,
      backgroundColor: `${theme.colors.neutral.dark}09`,
      color: `${theme.colors.neutral.dark}70`,
    },
    labelFocused: {
      color: theme.colors.primary,
    },
    errorText: {
      color: theme.colors.error,
    },
  });
}
