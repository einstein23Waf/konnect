import { TextStyle } from "react-native";

export const fontFamilies = {
  regular: "System",
  medium: "System-Medium",
  bold: "System-Bold",
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
};

export const lineHeights = {
  tight: 1.2,
  normal: 1.5,
  loose: 1.8,
};

export const createTextStyle = (
  size: keyof typeof fontSizes,
  family: keyof typeof fontFamilies = "regular",
  lineHeight: keyof typeof lineHeights = "normal"
): TextStyle => ({
  fontFamily: fontFamilies[family],
  fontSize: fontSizes[size],
  lineHeight: fontSizes[size] * lineHeights[lineHeight],
});
