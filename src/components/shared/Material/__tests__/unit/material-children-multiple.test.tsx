import { render } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Material from '../../material';

// Mock expo-glass-effect
jest.mock('expo-glass-effect', () => ({
  isLiquidGlassAvailable: jest.fn(() => false),
}));

// Mock @expo/ui/swift-ui
jest.mock('@expo/ui/swift-ui', () => ({
  GlassEffectContainer: ({ children }: { children: React.ReactNode }) => children,
  Host: ({ children }: { children: React.ReactNode }) => children,
  glassEffect: jest.fn(),
}));

// Mock nativewind cssInterop
jest.mock('nativewind', () => ({
  cssInterop: jest.fn(),
}));

describe('Material Component - Multiple Children', () => {
  it('renders with multiple children', () => {
    const { getByText } = render(
      <Material size="default">
        <Text>First Child</Text>
        <Text>Second Child</Text>
        <View>
          <Text>Third Child</Text>
        </View>
      </Material>
    );
    expect(getByText('First Child')).toBeTruthy();
    expect(getByText('Second Child')).toBeTruthy();
    expect(getByText('Third Child')).toBeTruthy();
  });
});
