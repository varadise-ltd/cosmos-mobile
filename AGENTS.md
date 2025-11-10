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

## Project Conventions

### Navigation
- Use the expo-router APIs for navigation
- Stack navigation is configured in `app/_layout.tsx`
- Access route params via `useLocalSearchParams()` from expo-router

### Styling
- Use inline styles with TypeScript type checking
- Create reusable style objects for consistent theming
- Follow React Native's flexbox-based layout system

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