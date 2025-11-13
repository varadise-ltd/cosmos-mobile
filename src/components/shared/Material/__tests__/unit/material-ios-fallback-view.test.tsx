/* eslint-disable import/first, @typescript-eslint/no-require-imports */
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

// Mock expo-glass-effect - set to return FALSE for Liquid Glass availability
jest.mock('expo-glass-effect', () => ({
  isLiquidGlassAvailable: jest.fn(() => false),
}));

// Mock @expo/ui/swift-ui with proper components
jest.mock('@expo/ui/swift-ui', () => {
  const { View } = require('react-native');
  return {
    GlassEffectContainer: ({ children }: { children: React.ReactNode }) => (
      <View testID="glass-effect-container">{children}</View>
    ),
    Host: ({ children }: { children: React.ReactNode }) => (
      <View testID="host-container">{children}</View>
    ),
  };
});

jest.mock('@expo/ui/swift-ui/modifiers', () => ({
  glassEffect: jest.fn((config) => config),
}));

// Mock nativewind cssInterop
jest.mock('nativewind', () => ({
  cssInterop: jest.fn(),
}));

import Material from '../../material.ios';

describe('Material Component iOS - Fallback View', () => {
  it('renders fallback View when Liquid Glass is unavailable', () => {
    const { queryByTestId, getByText } = render(
      <Material size="default" testID="fallback-view">
        <Text>Test Content</Text>
      </Material>
    );

    // Glass components should not be rendered
    expect(queryByTestId('glass-effect-container')).toBeNull();
    expect(queryByTestId('host-container')).toBeNull();
    
    // Fallback View should render with testID
    expect(getByText('Test Content')).toBeTruthy();
  });
});
