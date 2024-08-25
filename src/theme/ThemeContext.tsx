import { theme, Theme } from "@/src/theme/theme";
import React, { createContext } from "react";

export const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider: React.FC<any> = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
