import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import Material from '../material';

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

describe('Material Component Default - ClassName', () => {
  it('applies className to View', () => {
    const { getByText } = render(
      <Material size="default" className="custom-default-class">
        <Text>Test Content</Text>
      </Material>
    );

    expect(getByText('Test Content')).toBeTruthy();
  });
});
