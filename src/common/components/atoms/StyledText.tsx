import { Text, TextProps } from "react-native";

interface _StyledTextProps extends TextProps {}

export const StyledText: React.FC<_StyledTextProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <Text style={[style]} {...props}>
      {children}
    </Text>
  );
};
