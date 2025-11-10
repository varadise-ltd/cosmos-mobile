import { Pressable, Text, View } from 'react-native';
import { useTheme } from './ThemeProvider';

export function ThemeSwitcher() {
  const { theme, setTheme, colorScheme } = useTheme();

  const themes: { value: 'light' | 'dark' | 'system'; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  return (
    <View className="p-16 bg-surface-bg-secondary rounded-lg">
      <Text className="text-text-title text-16 font-semibold mb-12">
        Theme Settings
      </Text>
      <Text className="text-text-caption text-12 mb-8">
        Current: {colorScheme}
      </Text>
      <View className="flex-row gap-8">
        {themes.map((t) => (
          <Pressable
            key={t.value}
            onPress={() => setTheme(t.value)}
            className={`
              flex-1 p-12 rounded-md border
              ${theme === t.value 
                ? 'bg-button-primary-surface-default border-button-primary-border' 
                : 'bg-surface-bg-primary border-border-default'
              }
            `}
          >
            <Text
              className={`
                text-12 text-center font-semibold
                ${theme === t.value 
                  ? 'text-button-primary-text-default' 
                  : 'text-text-body'
                }
              `}
            >
              {t.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
