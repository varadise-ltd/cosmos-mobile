import { GlassEffectContainer, Host } from '@expo/ui/swift-ui';
import { glassEffect } from '@expo/ui/swift-ui/modifiers';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { cssInterop } from 'nativewind';
import { StyleSheet, View } from 'react-native';
import { MaterialProps } from './types';

// Required for NativeWind className support with @expo/ui components
cssInterop(Material, {
  className: 'style',
});

export default function Material(props: MaterialProps) {
  const { children, style } = props;
  // Extract backgroundColor to use as Liquid Glass tint
  const bgColor = StyleSheet.flatten(style)?.backgroundColor;

  if (isLiquidGlassAvailable()) {
    return (
      // Host wrapper is required by @expo/ui
      <Host matchContents>
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
    // Fallback for iOS < 18
    return <View {...props} />;
  }
}
