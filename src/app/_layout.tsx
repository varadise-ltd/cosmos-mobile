import { Stack } from 'expo-router';
import { ThemeProvider } from '../components/ThemeProvider';
import '../tokens/global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
