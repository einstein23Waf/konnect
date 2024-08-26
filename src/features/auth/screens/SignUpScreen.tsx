import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { validatePassword } from "firebase/auth";

import { useAuth } from "../hooks/useAuth";
import { auth, signUp } from "../services/firebaseAuth";
import { APP_ROUTES } from "@/src/common/constants/app_routes";
import { getErrorMessage } from "../constants/errorMessages";
import { StyledTextInput } from "@/src/common/components/atoms/Input";
import { StyledText } from "@/src/common/components/atoms/StyledText";
import { Button } from "@/src/common/components/atoms/Button";
import { AUTH_ROUTES } from "../constants/routes";
import { useTheme } from "@/src/theme/useTheme";

export const SignUpScreen: React.FC = () => {
  const styles = getStyles();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useAuth();

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setError("");
      if (!validatePassword(auth, password)) {
        throw new Error("Invalid password");
      }
      await signUp(email, password);
      router.replace(APP_ROUTES.home);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <StyledTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <StyledTextInput
        placeholder="Confirm Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? <StyledText>{error}</StyledText> : null}

      <Button
        title="Create Account"
        onPress={handleSignUp}
        // loading={loading}
      />

      <Button
        title="Login"
        onPress={() => router.navigate(AUTH_ROUTES.login)}
      />
    </View>
  );
};

function getStyles() {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing.md,
    },
  });
}
