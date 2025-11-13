import Material from '@/components/shared/Material';
import { ScrollView, Text } from 'react-native';

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-color-surface-fg-primary">
      <Material size={'default'}>
        <Text className="">Hello World</Text>
      </Material>
    </ScrollView>
  );
}