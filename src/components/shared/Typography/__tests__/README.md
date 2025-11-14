# Typography Component Tests

This directory contains comprehensive unit and integration tests for the Typography component.

## Test Structure

### Unit Tests (`__tests__/unit/`)

These tests use mocked `tailwind-variants` to verify component behavior in isolation:

- **typography-basic-rendering.test.tsx**: Tests basic component rendering, default props, and children rendering
- **typography-variants.test.tsx**: Tests all variant options (display, title, text)
- **typography-props.test.tsx**: Tests React Native Text props passthrough and prop handling
- **typography-children.test.tsx**: Tests different types of children (strings, numbers, nested components, etc.)
- **typography-tailwind-variants-mock.test.tsx**: Tests component behavior with mocked tailwind-variants
- **typography-span.test.tsx**: Tests Typography.Span component for inline nested text styling

### Integration Tests (`__tests__/integration/`)

These tests verify the actual integration with `tailwind-variants` library:

- **typography-tw-integration.integration.test.tsx**: Tests real tailwind-variants behavior, class merging, and design token usage
- **typography-span-integration.test.tsx**: Tests real-world use cases of Typography.Span including pricing displays, notifications, interactive text, and complex formatting scenarios

## Running Tests

Run all Typography tests:
```bash
npm test -- Typography
```

Run with explicit config (if needed):
```bash
npm test -- --config=jest.config.js Typography
```

Run in watch mode:
```bash
npm test:watch -- Typography
```

Run with coverage:
```bash
npm test:coverage -- Typography
```

## Test Coverage

The tests cover:

### Component Behavior
- ✅ Default props and rendering
- ✅ All 54 typography variants (9 display + 18 title + 18 text + 9 additional)
- ✅ Custom className merging
- ✅ React Native Text props passthrough
- ✅ Children rendering (strings, numbers, nested components, expressions)
- ✅ Accessibility props
- ✅ Interactive props (onPress, selectable, etc.)
- ✅ Typography.Span for nested inline text styling
- ✅ Multiple nested spans with independent styling
- ✅ Deeply nested text components

### Variant System
- ✅ Display variants (md, sm, xs) × (regular, medium, semi-bold)
- ✅ Title variants (xxl, xl, lg, md, sm, xs) × (regular, medium, semi-bold)
- ✅ Text variants (lg, md, ssm, sm, xs, xxs) × (regular, medium, semi-bold)
- ✅ Default variant application
- ✅ Font weight consistency across variants

### tailwind-variants Integration
- ✅ TV function creation and class merging
- ✅ Base class + variant class merging
- ✅ Default variant application
- ✅ Custom className merging
- ✅ Multiple variant property handling
- ✅ Design token usage verification
- ✅ Custom text-size, leading-size, and tracking tokens
- ✅ Bracket notation for custom values (e.g., text-[11px])

### Edge Cases
- ✅ Empty children
- ✅ Long text content
- ✅ Special characters
- ✅ Unicode and emoji
- ✅ Nested Typography components
- ✅ Conditional rendering
- ✅ Template literals
- ✅ Interactive spans with onPress handlers
- ✅ Multiple consecutive spans
- ✅ Span accessibility features

### Real-World Use Cases (Integration Tests)
- ✅ Pricing displays with formatted values
- ✅ Search result highlighting
- ✅ Link-like text within paragraphs
- ✅ Notification messages with emphasis
- ✅ Status messages with icons
- ✅ Mixed font weights and colors
- ✅ User mentions and code snippets inline
- ✅ Complex formatting with multiple spans

## Test Philosophy

1. **Unit tests** focus on component behavior with mocked dependencies
2. **Integration tests** verify the actual tailwind-variants library works correctly with our configuration
3. Tests follow the existing project patterns (see Material component tests)
4. Each test has a clear, descriptive name explaining what it verifies
5. Tests are grouped by concern for better organization

## Example Usage in Tests

```typescript
// Basic rendering
<Typography>Hello World</Typography>

// With variant
<Typography variant="title-lg-semi-bold">Page Title</Typography>

// With custom className
<Typography variant="text-md-regular" className="text-blue-500">
  Custom styled text
</Typography>

// With React Native props
<Typography numberOfLines={1} ellipsizeMode="tail">
  Long text that will be truncated
</Typography>

// Nested typography with Span
<Typography variant="text-md-regular">
  Normal text with <Typography.Span variant="text-md-semi-bold">bold</Typography.Span> word
</Typography>

// Multiple nested spans with different styles
<Typography variant="text-lg-regular">
  Price: <Typography.Span variant="text-lg-semi-bold" className="color-text-brand">$99</Typography.Span>{' '}
  <Typography.Span variant="text-xs-regular" className="color-text-tertiary">(was $199)</Typography.Span>
</Typography>

// Interactive span (like a link)
<Typography variant="text-md-regular">
  Visit our{' '}
  <Typography.Span 
    variant="text-md-semi-bold" 
    className="color-text-brand"
    onPress={handlePress}
  >
    website
  </Typography.Span>{' '}
  for more info
</Typography>
```
