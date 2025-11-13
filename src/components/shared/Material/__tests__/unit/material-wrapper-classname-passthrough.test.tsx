import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import Material from '../../index';

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

describe('Material Wrapper - ClassName Passthrough', () => {
  it('passes className prop from wrapper to material component', () => {
    const { getByTestId } = render(
      <Material size="default" className="custom-test-class" testID="material-wrapper">
        <Text>Test Content</Text>
      </Material>
    );
    
    const materialComponent = getByTestId('material-wrapper');
    expect(materialComponent).toBeTruthy();
    expect(materialComponent.props.className).toContain('custom-test-class');
  });
});
