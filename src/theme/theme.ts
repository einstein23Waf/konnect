import { colors } from "../styles/colors";
import { layout, spacing } from "../styles/spacing";
import { fontFamilies, fontSizes, lineHeights } from "../styles/typography";

export const theme = {
  colors,
  spacing,
  layout,
  typography: {
    fontFamilies,
    fontSizes,
    lineHeights,
  },
};

export type Theme = typeof theme;
