import { useColorScheme as useNativeWindColorScheme } from 'nativewind';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorScheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const systemColorScheme = useColorScheme();
  const { setColorScheme } = useNativeWindColorScheme();

  const colorScheme = theme === 'system' 
    ? (systemColorScheme ?? 'light')
    : theme === 'dark' 
      ? 'dark' 
      : 'light';

  useEffect(() => {
    // Apply the color scheme to NativeWind
    setColorScheme(colorScheme);
  }, [colorScheme, setColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
