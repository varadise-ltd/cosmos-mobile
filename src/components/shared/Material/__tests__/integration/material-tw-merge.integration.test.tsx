import React from 'react';
import { cn } from '../../../../../utils/cn/cn';

// Mock expo-glass-effect
jest.mock('expo-glass-effect', () => ({
  isLiquidGlassAvailable: jest.fn(() => false),
}));

// Mock @expo/ui/swift-ui
jest.mock('@expo/ui/swift-ui', () => ({
  GlassEffectContainer: ({ children }: { children: React.ReactNode }) =>
    children,
  Host: ({ children }: { children: React.ReactNode }) => children,
  glassEffect: jest.fn(),
}));

// Mock nativewind cssInterop
jest.mock('nativewind', () => ({
  cssInterop: jest.fn(),
}));

describe('Material Component - TailwindCSS tw-merge Integration', () => {
  describe('Test Case 1: Default bg-color-surface-bg-primary when no className', () => {
    it('should have default bg-color-surface-bg-primary when no className is provided', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const mergedClass = cn(defaultClassName, undefined);

      expect(mergedClass).toBe('bg-color-surface-bg-primary');
    });
  });

  describe('Test Case 2: Non-background className merges with default', () => {
    it('should merge non-bg className with default bg-color-surface-bg-primary', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'p-4 rounded-lg shadow-md';
      const mergedClass = cn(defaultClassName, customClassName);

      // Both default bg and custom classes should be present
      expect(mergedClass).toContain('bg-color-surface-bg-primary');
      expect(mergedClass).toContain('p-4');
      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).toContain('shadow-md');
    });

    it('should merge multiple non-bg classes with default background', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'p-8 m-4 flex flex-row items-center';
      const mergedClass = cn(defaultClassName, customClassName);

      // All classes should be present
      expect(mergedClass).toContain('bg-color-surface-bg-primary');
      expect(mergedClass).toContain('p-8');
      expect(mergedClass).toContain('m-4');
      expect(mergedClass).toContain('flex');
      expect(mergedClass).toContain('flex-row');
      expect(mergedClass).toContain('items-center');
    });
  });

  describe('Test Case 3: Background className replaces default bg-color-surface-bg-primary', () => {
    it('should override default bg-color-surface-bg-primary with custom design token bg', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'bg-color-button-primary-surface-default';
      const mergedClass = cn(defaultClassName, customClassName);

      // Custom bg should override default bg
      expect(mergedClass).toBe('bg-color-button-primary-surface-default');
      expect(mergedClass).not.toContain('bg-color-surface-bg-primary');
    });

    it('should override default bg-color-surface-bg-primary with standard tailwind bg', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'bg-red-500';
      const mergedClass = cn(defaultClassName, customClassName);

      // Custom bg should replace default
      expect(mergedClass).toBe('bg-red-500');
      expect(mergedClass).not.toContain('bg-color-surface-bg-primary');
    });

    it('should override default bg but keep non-conflicting classes', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'bg-blue-500 p-4 rounded-lg';
      const mergedClass = cn(defaultClassName, customClassName);

      // Custom bg should replace default, but other classes should be added
      expect(mergedClass).toContain('bg-blue-500');
      expect(mergedClass).toContain('p-4');
      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).not.toContain('bg-color-surface-bg-primary');
    });

    it('should override with another design token bg and keep other classes', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName =
        'bg-color-button-secondary-surface-default p-8 m-4 rounded-xl shadow-lg';
      const mergedClass = cn(defaultClassName, customClassName);

      // Custom bg should replace default, other classes preserved
      expect(mergedClass).toContain(
        'bg-color-button-secondary-surface-default',
      );
      expect(mergedClass).toContain('p-8');
      expect(mergedClass).toContain('m-4');
      expect(mergedClass).toContain('rounded-xl');
      expect(mergedClass).toContain('shadow-lg');
      expect(mergedClass).not.toContain('bg-color-surface-bg-primary');
    });
  });
});
