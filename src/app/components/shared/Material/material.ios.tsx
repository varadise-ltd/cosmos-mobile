import { GlassEffectContainer, Host } from '@expo/ui/swift-ui';
import { glassEffect } from '@expo/ui/swift-ui/modifiers';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { cssInterop } from 'nativewind';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialProps } from './types';

cssInterop(Material, {
  className: 'style',
});

export default function Material({
  children,
  style,
  className,
}: MaterialProps) {
  const bgColor = StyleSheet.flatten(style)?.backgroundColor;

  if (isLiquidGlassAvailable()) {
    return (
      <Host>
        <GlassEffectContainer
          modifiers={[
            glassEffect({
              glass: {
                variant: 'regular',
                interactive: true,
                tint: bgColor,
              },
              shape: 'rectangle',
            }),
          ]}
        >
          {children}
        </GlassEffectContainer>
      </Host>
    );
  } else {
    return (
      <View>
        <Text>No glass effect available</Text>
      </View>
    );
  }
}
