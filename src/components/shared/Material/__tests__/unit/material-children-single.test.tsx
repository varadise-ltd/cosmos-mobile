import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
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

describe('Material Component - Single Child', () => {
  it('renders with single child element', () => {
    const { getByText } = render(
      <Material size="default">
        <Text>Single Child</Text>
      </Material>
    );
    expect(getByText('Single Child')).toBeTruthy();
  });
});
