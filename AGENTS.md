# AI Agent Instructions for cosmos-mobile

## Project Overview

This is an Expo-based React Native mobile application using TypeScript and file-based routing with expo-router. The project follows modern React Native development patterns with Expo's managed workflow.

## Key Architecture Patterns

### File-based Routing

- Routes are defined in the `app/` directory using expo-router
- `app/_layout.tsx` defines the root Stack navigator
- Each file in `app/` becomes a route automatically
- Example: `app/index.tsx` is the root route

### Technology Stack

- React Native (0.81.5)
- Expo SDK 54
- TypeScript
- expo-router for navigation
- React Native Reanimated for animations
- React Native Gesture Handler for gestures

## Development Workflow

### Setup

```bash
npm install
```

### Running the App

```bash
npx expo start
```

This launches the Expo development server with options to run on:

- iOS Simulator
- Android Emulator
- Web browser
- Physical devices via Expo Go

### Code Organization

- `app/` - All screens and navigation logic
- `assets/` - Static assets like images
- `components/` - Reusable React components (create as needed)

### Component Development

- Before creating new app components, always search for existing ones first and consider reusing them
- If an existing component is not completely reusable, clarify if we should modify the existing component rather than creating a new one
- **CRITICAL**: NEVER use `React.FC` or `React.FunctionComponent` for component typing. Always use regular function declarations with explicit prop types or inline arrow functions with typed parameters

#### Platform-Specific Components

- Since iOS 18+ supports Liquid Glass, most components need platform-specific implementations:
  - `Component.ios.tsx` - iOS version with Liquid Glass support
  - `Component.tsx` - Default version for other platforms
- React Native will automatically select the correct file based on the platform

#### Platform-Specific Components

- Since iOS 18+ supports Liquid Glass, most components need platform-specific implementations:
  - `Component.ios.tsx` - iOS version with Liquid Glass support
  - `Component.tsx` - Default version for other platforms
- React Native will automatically select the correct file based on the platform

### Naming Conventions

#### Components/Screens
Use PascalCase and export default the component with name:

```typescript
export default function PascalCaseForNaming() {
  // ...
}
```

#### App Folders
Use kebab-case for all folders in the `app/` directory:

```
src/app/settings/change-password
```

**Reason:** Avoid any conflicts with upper or lower case in git. Preserve the pathing and align with common naming for URLs as it will affect deep linking.

#### Components Folder
Use PascalCase for component directories:

```
src/components/Typography
```

**Reason:** Makes import statements cleaner and more readable.

## Project Conventions

### Navigation

- Use the expo-router APIs for navigation
- Stack navigation is configured in `app/_layout.tsx`
- Access route params via `useLocalSearchParams()` from expo-router

### Styling

- **Styling System**: This project uses NativeWind under the hood for styling. All components are styled using className props with custom design tokens.
- **Design Tokens**: All styling MUST use design tokens defined in `global.css`. These tokens provide a consistent design system across the application.
  - Different themes (light/dark) share the same token names, enabling automatic theme support
  - Components implement styling using the design token names directly in className
  - Example: For button colors, use `className="bg-color-button-primary-surface-default"`
  - Token names can be found in the Figma design files (e.g., [CDS Mobile Components](https://www.figma.com/design/CxAubA0dcH2AH6nvLYdVHg/CDS--Mobile-Components?node-id=577-100709&m=dev)) where you can see the colors and other design properties used
- **CRITICAL**: Never use default NativeWind tokens (like `bg-blue-500`, `text-gray-900`, etc.). ALWAYS use the custom design tokens from `global.css`
- Create reusable style objects for consistent theming
- Follow React Native's flexbox-based layout system

### Liquid Glass (iOS 18+)

- **Implementation**: Use `@expo/ui` for Liquid Glass effects on iOS 18+ devices
- **Reference**: See [betomoedano's expo-ui-playground](https://github.com/betomoedano/expo-ui-playground) for comprehensive examples and implementation patterns
- **Figma Design Tokens**: In Figma, Liquid Glass is indicated by `Color burn` or `Color dodge` blend modes
  - These blend modes are simply markers for Liquid Glass usage
  - Do NOT implement actual blend modes - use Liquid Glass instead
- **Platform-Specific Implementation**:
  - Create `Component.ios.tsx` for iOS with Liquid Glass
  - Create `Component.tsx` for fallback behavior on other platforms
  - The Liquid Glass effect automatically provides the visual appearance without needing blend mode implementations
- **Best Practices**:
  - Always provide a graceful fallback for non-iOS platforms
  - Test on both iOS 18+ devices and older versions to ensure proper fallback behavior
  - Refer to betomoedano's examples for proper usage patterns of `@expo/ui` components

### Liquid Glass (iOS 18+)

- **Implementation**: Use `@expo/ui` for Liquid Glass effects on iOS 18+ devices
- **Reference**: See [betomoedano's expo-ui-playground](https://github.com/betomoedano/expo-ui-playground) for comprehensive examples and implementation patterns
- **Figma Design Tokens**: In Figma, Liquid Glass is indicated by `Color burn` or `Color dodge` blend modes
  - These blend modes are simply markers for Liquid Glass usage
  - Do NOT implement actual blend modes - use Liquid Glass instead
- **Platform-Specific Implementation**:
  - Create `Component.ios.tsx` for iOS with Liquid Glass
  - Create `Component.tsx` for fallback behavior on other platforms
  - The Liquid Glass effect automatically provides the visual appearance without needing blend mode implementations
- **Best Practices**:
  - Always provide a graceful fallback for non-iOS platforms
  - Test on both iOS 18+ devices and older versions to ensure proper fallback behavior
  - Refer to betomoedano's examples for proper usage patterns of `@expo/ui` components

### State Management

- Use React hooks for local state
- Consider implementing global state management when needed

## Common Development Tasks

### Adding a New Screen

1. Create a new `.tsx` file in the `app/` directory
2. Export a default React component
3. The file path becomes the route path automatically

### Running Type Checks

```bash
npx tsc
```

### Linting

```bash
npm run lint
```

Remember to test on both iOS and Android as layout behaviors can differ between platforms.
