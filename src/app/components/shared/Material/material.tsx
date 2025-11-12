import { View } from 'react-native';
import { MaterialProps } from './types';

// Ignore size prop not applicable for Android or pre iOS 18
export default function Material(props: MaterialProps) {
  return <View {...props} />;
}
