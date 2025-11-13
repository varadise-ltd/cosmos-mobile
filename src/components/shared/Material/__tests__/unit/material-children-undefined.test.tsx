import { render } from '@testing-library/react-native';
import React from 'react';
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

describe('Material Component - Undefined Children', () => {
  it('renders correctly when children is undefined', () => {
    const component = render(<Material size="default">{undefined}</Material>);
    expect(component).toBeTruthy();
  });
});
