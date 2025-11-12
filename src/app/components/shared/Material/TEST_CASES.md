# Material Component Test Cases

This document outlines UI rendering test cases for the Material component to ensure it renders properly in different scenarios.

## Component Variants

The Material component has platform-specific implementations:

- **iOS (18+)**: `material.ios.tsx` - Uses Liquid Glass effect
- **Default**: `material.tsx` - Fallback implementation for Android and older iOS versions

## UI Rendering Test Cases

### 1. Basic Rendering

- [ ] Component renders without crashing with no props
- [ ] Component renders with default props
- [ ] Component renders with custom className
- [ ] Component renders with testID prop

### 2. Children Rendering

- [ ] Component renders with single child element
- [ ] Component renders with multiple children
- [ ] Component renders with text children
- [ ] Component renders with nested children
- [ ] Component renders correctly when children is null
- [ ] Component renders correctly when children is undefined

### 3. Platform-Specific Rendering (iOS)

#### 3.1 With Liquid Glass Available

- [ ] Component renders GlassEffectContainer when Liquid Glass is available
- [ ] Component renders children inside GlassEffectContainer
- [ ] Component renders with custom className alongside Liquid Glass

#### 3.2 Without Liquid Glass Available

- [ ] Component renders fallback View when Liquid Glass is unavailable
- [ ] Component renders children in fallback mode
- [ ] Component displays fallback message correctly

### 4. Platform-Specific Rendering (Default/Android)

- [ ] Component renders standard View component
- [ ] Component renders children correctly
- [ ] Component applies className to View

### 5. Size Variants

- [ ] Component renders with size="default"
- [ ] Component renders with size="large"

### 6. Style Prop

- [ ] Component renders with custom style object
- [ ] Component renders with style array
- [ ] Component renders with backgroundColor in style

## Testing Strategy

- Use React Native Testing Library for component rendering
- Mock `isLiquidGlassAvailable()` to test different iOS scenarios
- Mock `@expo/ui/swift-ui` components for iOS-specific tests
- Use snapshot testing to verify rendered output
- Test both platform-specific files separately
